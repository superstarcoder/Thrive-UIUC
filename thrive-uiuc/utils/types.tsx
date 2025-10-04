import { ImageSourcePropType } from "react-native";

export const HOBBIES = ["biking", "baking", "badminton", "boxing"];
export type Hobby = (typeof HOBBIES)[number];

export const YEARS = ["Freshman", "Sophomore", "Junior", "Senior"] as const;
export type Year = (typeof YEARS)[number];

export const CLASSES = ["CS 233", "CS 225", "MATH 257", "ENG 199", "ENG 201"];
export type Class = (typeof CLASSES)[number];

export const MAJORS = [
  "Aerospace Engineering",
  "Bioengineering",
  "Civil Engineering",
  "Computer Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Biotechnology and Molecular Biosciences",
  "Computer Science & Statistics",
];
export type Major = (typeof MAJORS)[number];

export type ProfileSettings = {
  id: string;
  name: string;
  year: Year | null;
  major: Major | null;
  introduction: string;
  hobbies: Hobby[];
  classes: Class[];
};

export const STUDY_LOCATIONS = ["Main Library", "Funk ACES Library", "Grainger Library"];
// export type StudyLocation = (typeof STUDY_LOCATIONS)[number];

export type StudySessionSettings = {
  id: string;
  name: string;
  minPeople: number;
  maxPeople: number;
  startTime: Date;
  endTime: Date;
  location: Building | Room | null;
};

export const LOCATION_TYPES = ["building", "room"];
export type LocationType = (typeof LOCATION_TYPES)[number];

// Note: if room category exists, we should look at
export type Building = {
  id: string;
  name: string;
  minCapacity?: number;
  maxCapacity?: number;
  openingTime?: Date;
  closingTime?: Date;
  image?: ImageSourcePropType;
  rooms?: Room[];
  subCategories?: LocationCategory[];
};

// note only one category type can be filled (roomsInCategory, buildingsInCategory, and subCategories)
export type LocationCategory = {
  id: string;
  name: string;
  roomsInCategory?: Room[];
  buildingsInCategory?: Building[];
  subCategories?: LocationCategory[];
  image?: ImageSourcePropType;
};

export type Room = {
  id: string;
  name: string;
  roomNumber?: string;
  minCapacity?: number;
  maxCapacity?: number;
  openingTime?: Date;
  closingTime?: Date;
  building?: Building;
};

const openGroupStudyRooms: Room[] = [
  {
    id: "0",
    name: "040A",
  },
  {
    id: "1",
    name: "040B",
  },
  {
    id: "2",
    name: "040C",
  },
  {
    id: "3",
    name: "040D",
  },
  {
    id: "4",
    name: "040E",
  },
  {
    id: "5",
    name: "405",
  },
  {
    id: "6",
    name: "407",
  },
  {
    id: "7",
    name: "408",
  },
];


const ideaLabStudyRooms: Room[] = [
  {
    id: "8",
    name: "002",
  },
  {
    id: "9",
    name: "003",
  },
  {
    id: "10",
    name: "004",
  },
  {
    id: "11",
    name: "005",
  },
  {
    id: "12",
    name: "006",
  },
  {
    id: "13",
    name: "007",
  },
];

const graingerRoomCategories: LocationCategory[] = [
  {
    id: "0",
    name: "Open Group Study Rooms",
    roomsInCategory: openGroupStudyRooms,
  },
  {
    id: "1",
    name: "IDEA LAB",
    roomsInCategory: ideaLabStudyRooms,
  },
];

export const sampleBuildings: Building[] = [
  {
    id: "0",
    name: "Main Library",
    minCapacity: 1,
    maxCapacity: 500,
    openingTime: new Date("2024-01-01T08:00:00"),
    closingTime: new Date("2024-01-01T22:00:00"),
    // image: require("../../assets/images/main_library.jpg"),
  },
  {
    id: "1",
    name: "Funk ACES Library",
    minCapacity: 1,
    maxCapacity: 200,
    openingTime: new Date("2024-01-01T09:00:00"),
    closingTime: new Date("2024-01-01T18:00:00"),
    // image: require("../../assets/images/funk_aces_library.jpg"),
  },
  {
    id: "2",
    name: "Grainger Library",
    minCapacity: 1,
    maxCapacity: 300,
    openingTime: new Date("2024-01-01T07:00:00"),
    closingTime: new Date("2024-01-01T23:00:00"),
    // image: require("../../assets/images/grainger_library.jpg"),
    rooms: [...openGroupStudyRooms, ...ideaLabStudyRooms],
    subCategories: graingerRoomCategories,
  }
];

// if name is PARENT, then we know it's the parent of all locations
export const allBuildings: LocationCategory = {
  id: "0",
  name: "PARENT",
  roomsInCategory: openGroupStudyRooms,
  buildingsInCategory: sampleBuildings,
};
