import balm from "./img/photos/lemonbalm.jpeg";
import bay from "./img/photos/baylaurel.jpeg";

/** Represents a location on the map. */
export type Location = {x: number, y: number};

/** Special location marked on the map. */
export type Marker = {
  name: string;
  color: string;
  location: Location;
  size: string;
  // drawing_path: string; // path to a watercolored image of the plant (paintings in progress)
  photo_path: string;
  info: string;
};

/** List of colors that can be used for markers. */
export const COLORS: Array<string> = [
    "red", "orange", "yellow", "green", "blue", "indigo", "violet"
];

export const MARKERS: Array<Marker> = [
  {name: "Lemon Balm", color: "red", location: {x: 58, y: 60}, size: "20px", photo_path: balm, info: "This is a lemon balm plant! It's found on the UW campus and is, in fact, edible. It works best in places you would use mint to provide a zesty, citrusy flavor."},
  {name: "Bay Laurel", color: "red", location: {x: 49.5, y: 48.5}, size: "20px", photo_path: bay, info: "Bay leaves are fantastic in soups! They can be used either fresh or dried."}
];