from webscraper import scrapeURL, scrapeHTMLContent

isGood, page = scrapeURL("https://uiuc.libcal.com/allspaces")
if isGood:
    scrapeHTMLContent(page.text)
