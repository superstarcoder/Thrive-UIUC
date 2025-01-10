// temporary list of hobbies (need to make a more comprehensive list later)
export const HOBBIES = ["biking", "baking", "badminton", "boxing"];
export type Hobby = (typeof HOBBIES)[number];

export const YEARS = ["Freshman", "Sophomore", "Junior", "Senior"] as const;
export type Year = (typeof YEARS)[number];

export const MAJORS = [
  "Aerospace Engineering",
  "Bioengineering",
  "Civil Engineering",
  "Computer Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Biotechnology and Molecular Biosciences.",
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
};