/** Represents a location on the map. */
export type Location = {x: number, y: number};

/** Special location marked on the map. */
export type Marker = {
  name: string;
  color: string;
  location: Location;
  size: string;
};

/** List of colors that can be used for markers. */
export const COLORS: Array<string> = [
    "red", "orange", "yellow", "green", "blue", "indigo", "violet"
];