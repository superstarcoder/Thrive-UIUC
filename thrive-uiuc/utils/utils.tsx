import { TagData } from "../components/sharedComponents/Tag";

// Utility function to compare two TagData objects
export const isEqualTagData = (tag1: TagData, tag2: TagData): boolean =>
    Object.entries(tag1).every(([key, value]) => tag2[key as keyof TagData] === value);

type ObjectType = { [key: string]: any };

export function objectMatchesAnyInArray(target: ObjectType, array: ObjectType[]): boolean {
    return array.some(obj => {
        // Check if all properties of target match the properties of the current object
        return Object.keys(target).every(key => {
            return target[key] === obj[key];
        });
    });
}