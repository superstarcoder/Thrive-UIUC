import { TagData } from "../components/sharedComponents/Tag";

// Utility function to compare two TagData objects
export const isEqualTagData = (tag1: TagData, tag2: TagData): boolean =>
  Object.entries(tag1).every(([key, value]) => tag2[key as keyof TagData] === value);

type ObjectType = { [key: string]: any };

export function objectMatchesAnyInArray(target: ObjectType, array: ObjectType[]): boolean {
  return array.some((obj) => {
    // Check if all properties of target match the properties of the current object
    return Object.keys(target).every((key) => {
      return target[key] === obj[key];
    });
  });
}

// Utility function to calculate and return a formatted string
// representing the amount of time from now until a specified time.
export function findTimeUntil(nonCurrentTime: Date) {
  const currentTime = new Date(Date.now());
  const isTimePast = nonCurrentTime.getTime() - currentTime.getTime() <= 0;
  const differenceMilli = Math.abs(nonCurrentTime.getTime() - currentTime.getTime());
  const differenceDay = Math.floor(differenceMilli / 86400000);
  const differenceWeek = Math.floor(differenceMilli / 604800000);

  var timeString = "In 0 minutes";

  // If the specified time is more than 1 day but less than 1 week away
  if (86400000 <= differenceMilli && differenceMilli <= 604800000) {
    if (!isTimePast) {
      if (differenceDay == 1) {
        timeString = "In " + differenceDay + " day";
      } else {
        timeString = "In " + differenceDay + " days";
      }
    } else {
      if (differenceDay == 1) {
        timeString = differenceDay + " day ago";
      } else {
        timeString = differenceDay + " days ago";
      }
    }
  } else if (differenceMilli > 604800000) {
    if (!isTimePast) {
      if (differenceWeek == 1) {
        timeString = "In " + differenceWeek + " week";
      } else {
        timeString = "In " + differenceWeek + " weeks";
      }
    } else {
      if (differenceWeek == 1) {
        timeString = differenceWeek + " week ago";
      } else {
        timeString = differenceWeek + " weeks ago";
      }
    }
  } else if (differenceMilli < 86400000) {
    const formattedMinutes = nonCurrentTime.toTimeString().substring(3, 5);
    if (nonCurrentTime.getDate() != currentTime.getDate() && nonCurrentTime.getTime() > currentTime.getTime()) {
      if (nonCurrentTime.getHours() > 12) {
        timeString = (nonCurrentTime.getHours() % 12) + ":" + formattedMinutes + " PM, Tomorrow";
      } else if (nonCurrentTime.getHours() === 12) {
        timeString = 12 + ":" + formattedMinutes + " PM, Tomorrow";
      } else {
        timeString = nonCurrentTime.getHours() + ":" + formattedMinutes + " AM, Tomorrow";
      }
    } else if (nonCurrentTime.getDate() != currentTime.getDate() && nonCurrentTime.getTime() < currentTime.getTime()) {
      if (nonCurrentTime.getHours() > 12) {
        timeString = (nonCurrentTime.getHours() % 12) + ":" + formattedMinutes + " PM, Yesterday";
      } else if (nonCurrentTime.getHours() === 12) {
        timeString = 12 + ":" + formattedMinutes + " PM, Yesterday";
      } else {
        timeString = nonCurrentTime.getHours() + ":" + formattedMinutes + " AM, Yesterday";
      }
    } else if (nonCurrentTime.getDate() === currentTime.getDate()) {
      if (nonCurrentTime.getHours() > 12) {
        timeString = (nonCurrentTime.getHours() % 12) + ":" + formattedMinutes + " PM, Today";
      } else if (nonCurrentTime.getHours() === 12) {
        timeString = 12 + ":" + formattedMinutes + " PM, Today";
      } else {
        timeString = nonCurrentTime.getHours() + ":" + formattedMinutes + " AM, Today";
      }
    }
  }

  return timeString;
}

// Utility function to find duration in hours + minutes
export function findDuration(startTime: Date, endTime: Date) {
  const durationMs = Math.abs(endTime.getTime() - startTime.getTime());
  const durationHr = Math.floor(durationMs / 3600000);
  const durationMinFull = Math.floor(durationMs / 60000);
  const durationMinAfterHr = durationMinFull % 60;
  if (durationMinAfterHr === 0) {
    if (durationHr > 1) {
      return durationHr + " hours";
    }
    return durationHr + " hour";
  }
  if (durationHr > 1 && durationMinAfterHr > 1) {
    return durationHr + " hours and " + durationMinAfterHr + " minutes";
  } else if (durationHr > 1) {
    return durationHr + " hours and " + durationMinAfterHr + " minute";
  } else if (durationMinAfterHr > 1) {
    return durationHr + " hour and " + durationMinAfterHr + " minutes";
  }
  return durationHr + " hour and " + durationMinAfterHr + " minute";
}

// Utility function to get a formatted date and time string from a date object
export function getFormattedDateTimeString(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
		month: "2-digit",
		day: "2-digit",
		year: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: undefined,
	};
  return date.toLocaleString("en-us", options);
}

// Utility function to return a formatted string of the number of people
export function formatNumPeople(people: number) {
  if (people == 1) {
    return people + " person";
  }
  return people + " people";
}

// Utility function to truncate strings to a specified character count, with optional ellipses
export function truncateText(text: string, ellipses: boolean, length: number) {
  var moddedText = text.length > length ? text.slice(0, length - 3) + (ellipses ? "..." : "") : text;
  return moddedText;
}
