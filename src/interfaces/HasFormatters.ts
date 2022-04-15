// This interfaces only function is to make sure that whatever uses it has
// the format method which returns a string
export interface HasFormatter {
    format(): string;
}