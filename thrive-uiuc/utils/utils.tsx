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
  
  var timeString = "In 0 minutes"

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
        timeString = "In " + differenceWeek + " week"
      } else {
        timeString = "In " + differenceWeek + " weeks"
      }
    } else {
      if (differenceWeek == 1) {
        timeString = differenceWeek + " week ago"
      } else {
        timeString = differenceWeek + " weeks ago"
      }
    }
  } else if (differenceMilli < 86400000) {
    const formattedMinutes = nonCurrentTime.toTimeString().substring(3,5);
    if (nonCurrentTime.getDate() != currentTime.getDate() && nonCurrentTime.getTime() > currentTime.getTime()) {
      if (nonCurrentTime.getHours() > 12) {
        timeString = "Tomorrow at " + (nonCurrentTime.getHours() % 12) + ":" + formattedMinutes + " PM";
      } else {
        timeString = "Tomorrow at " + nonCurrentTime.getHours() + ":" + formattedMinutes + " AM";
      }
    } else if (nonCurrentTime.getDate() != currentTime.getDate() && nonCurrentTime.getTime() < currentTime.getTime()) {
      if (nonCurrentTime.getHours() > 12) {
        timeString = "Yesterday at " + (nonCurrentTime.getHours() % 12) + ":" + formattedMinutes + " PM";
      } else {
        timeString = "Yesterday at " + nonCurrentTime.getHours() + ":" + formattedMinutes + " AM";
      }
    } else if (nonCurrentTime.getDate() === currentTime.getDate()) {
      if (nonCurrentTime.getHours() > 12) {
        timeString = "Today at " + (nonCurrentTime.getHours() % 12) + ":" + formattedMinutes + " PM";
      } else {
        timeString = "Today at " + nonCurrentTime.getHours() + ":" + formattedMinutes + " AM";
      }
    }
  }
  
  return timeString;
}

// Utility function to return a formatted string of the number of people
export function formatNumPeople(people: number) {
  if (people == 1) {
    return people + " person";
  }
  return people + " people";
}
