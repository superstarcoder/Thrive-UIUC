from dataclasses import dataclass
import requests
import re
from bs4 import BeautifulSoup
from dataclasses import dataclass


@dataclass
class Library:
    lid: int
    name: str
    num_rooms: int
    address: str


@dataclass
class Resource:
    id: str
    title: str
    url: str
    eid: int
    gid: int
    lid: int
    grouping: str
    gtype: int
    selectable: bool
    capacity: int
    hasInfo: bool
    thumbnail: str
    filterIds: list[str]


libraries: dict[str, Library] = {
    "Funk ACES Library": {
        "id": "3604",
        "name": "Funk ACES Library",
        "num_rooms": 6,
        "address": "1101 S Goodwin Ave, Urbana, IL 61801",
    },
    "Grainger Engineering Library": {
        "id": "3606",
        "name": "Grainger Engineering Library",
        "num_rooms": 15,
        "address": "1301 W Springfield Ave, Urbana, IL 61801",
    },
    "Main Library": {
        "id": "3608",
        "name": "Main Library",
        "num_rooms": 17,
        "address": "1408 W Gregory Dr, Urbana, IL 61801",
    },
}


def resources_to_string(resources: dict[str, Resource]) -> str:
    lines = []
    for rid, data in resources.items():
        lines.append(f"ID: {rid}")
        lines.append(f"  Title: {data['title']}")
        lines.append(f"  URL: {data['url']}")
        lines.append(f"  EID/GID/LID: {data['eid']} / {data['gid']} / {data['lid']}")
        lines.append(f"  Grouping: {data['grouping']} (gtype={data['gtype']})")
        lines.append(
            f"  Capacity: {data['capacity']} | Selectable: {data['selectable']} | Has Info: {data['hasInfo']}"
        )
        if data["thumbnail"]:
            lines.append(f"  Thumbnail: {data['thumbnail']}")
        if data["filterIds"]:
            lines.append(f"  Filter IDs: {', '.join(data['filterIds'])}")
        lines.append("")
    return "\n".join(lines)


def scrapeURL(url) -> tuple[bool, requests.Response]:
    # Passes a User-Agent header request to avoid error response from web server (might reject GET request if user agent is unknown)
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36",
    }

    # Uses requests library to call a GET method and returns the response
    page = requests.get(url=url, headers=headers)
    isGood: bool = True
    if page.status_code == 200:
        pass
    else:
        # Error response if GET request fails
        isGood = False
        print("Failed to get page contents.")

    return isGood, page


def scrapeHTMLContent(html_file) -> tuple[dict[str, Resource], Exception]:
    try:
        # Uses BeautifulSoup to parse raw HTML data and return desired data
        soup = BeautifulSoup(html_file, "html.parser")
        pattern = (
            r"resources\.push\(\{\s*"
            r'id:\s*"(?P<id>[^"]+)",\s*'
            r'title:\s*"(?P<title>[^"]+)",\s*'
            r'url:\s*"(?P<url>[^"]+)",\s*'
            r"eid:\s*(?P<eid>\d+),\s*"
            r"gid:\s*(?P<gid>\d+),\s*"
            r"lid:\s*(?P<lid>\d+),\s*"
            r'grouping:\s*"(?P<grouping>[^"]+)",\s*'
            r"gtype:\s*(?P<gtype>\d+),\s*"
            r"gBookingSelectableTime:\s*(?P<selectable>true|false),\s*"
            r"capacity:\s*(?P<capacity>\d+),\s*"
            r"hasInfo:\s*(?P<hasInfo>true|false),\s*"
            r'thumbnail:\s*"(?P<thumbnail>[^"]*)",\s*'
            r"filterIds:\s*\[(?P<filterIds>[^\]]*)\],?\s*"
            r"\}\);"
        )

        matches = re.finditer(pattern, str(soup.contents))
        resources: dict[str, Resource] = {}

        for m in matches:
            gd = m.groupdict()

            # Decode escaped text
            title = decode_js_unicode(gd["title"])
            grouping = decode_js_unicode(gd["grouping"])

            # Parse boolean fields
            selectable = gd["selectable"] == "true"
            hasInfo = gd["hasInfo"] == "true"

            # Parse filterIds as list
            filterIds = [
                fid.strip() for fid in gd["filterIds"].split(",") if fid.strip()
            ]

            url = gd["url"]
            if not url[0:8] == "https://":
                gd["url"] = "https://uiuc.libcal.com" + url

            resources[gd["id"]] = {
                "title": title,
                "url": gd["url"],
                "eid": int(gd["eid"]),
                "gid": int(gd["gid"]),
                "lid": int(gd["lid"]),
                "grouping": grouping,
                "gtype": int(gd["gtype"]),
                "selectable": selectable,
                "capacity": int(gd["capacity"]),
                "hasInfo": hasInfo,
                "thumbnail": gd["thumbnail"],
                "filterIds": filterIds,
            }
        return resources, None
    except Exception as e:
        # Return error message
        print(e)
        return None, e


def decode_js_unicode(s: str) -> str:
    return s.encode("utf-8").decode("unicode_escape")
