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
