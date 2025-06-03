import balm from "./img/photos/lemonbalm.jpeg";
import bay from "./img/photos/baylaurel.jpeg";
import fern from "./img/photos/brackenfern.jpeg";
import strawberry from "./img/photos/wildstrawberry.jpeg";
import grape from "./img/photos/oregongrape.jpeg";
import salal from "./img/photos/salal.jpeg";
import dandelion from "./img/photos/dandelion.jpeg";
import apple from "./img/photos/crabapple.jpeg";
import strawtree from "./img/photos/strawberrytree.jpeg";
import duck from "./img/photos/duck.jpeg";

import water_balm from "./img/drawings/lemonbalm.jpg";
import water_bay from "./img/drawings/baylaurel.jpg";
import water_fern from "./img/drawings/brackenfern.jpg";
import water_strawberry from "./img/drawings/wildstrawberry.jpg";
import water_grape from "./img/drawings/oregongrape.jpg";
import water_salal from "./img/drawings/salal.jpg";
import water_dandelion from "./img/drawings/dandelion.jpg";
import water_apple from "./img/drawings/crabapple.jpg";
import water_strawtree from "./img/drawings/strawberrytree.jpg";

/** Represents a location on the map. */
export type Location = {x: number, y: number};

/** Special location marked on the map. */
export type Marker = {
  name: string;
  color: string;
  location: Location;
  size: string;
  drawing_path: string; // path to a watercolored image of the plant (paintings in progress)
  photo_path: string;
  info: string;
};

export const MARKERS: Array<Marker> = [
  {name: "Lemon Balm", color: "red", location: {x: 58, y: 60}, size: "20px", photo_path: balm, drawing_path: water_balm, info: "Lemon balm adapts well to a variety of climates, so it's no surprise it ended up thriving in Seattle. It has a zesty, citrusy flavor, and is a great addition to salads, soups, and cold or hot beverages. It has calming properties, and pairs well with other herbs such as chamomile (Northern Gardener)."},
  {name: "Bay Laurel", color: "red", location: {x: 49.5, y: 48.5}, size: "20px", photo_path: bay, drawing_path: water_bay, info: "The bay laurel, native to the Mediterranean region, is a leafy plant used in many kinds of meals. Dried or fresh, the leaves are a great addition to soups, rice, and meat dishes (Portland Nursery)."},
  {name: "Bracken Fern", color: "red", location: {x: 60, y:46}, size: "20px", photo_path:fern, drawing_path: water_fern, info: "The Lushootseed name for bracken fern is č̓alas, and indigenous people have traditionally used the fern rhizomes to make flour and herbal remedies (Lushootseed). When cooked at high temperatures, the young bracken fern found in spring (called fiddleheads) can provide a great addition to a dish (UW)."},
  {name: "Wild Strawberry", color: "red", location: {x:56, y: 60}, size: "20px", photo_path: strawberry, drawing_path: water_strawberry, info: "Wild strawberries are much smaller than domesticated strawberry varieties, but are no less delicious. They are found from early May to late September, and can be cooked or eaten raw! Just keep in mind they won't last as long in the fridge as store bought berries; try to eat them within 24 hours (Freed)."},
  {name: "Oregon Grape", color: "red", location: {x:54, y:54.4}, size: "20px", photo_path: grape, drawing_path: water_grape, info: "The oregon grape, native to Washington, has been used as a medicinal plant and a dye by the Salish people. The berries, found from July to September, have a bitter flavoring that can be transformed into tasty jams or sauces (Cook)."},
  {name: "Salal", color: "red", location: {x:55, y:57}, size: "20px", photo_path: salal, drawing_path: water_salal, info: "This vitamin-rich fruit was used by Salish tribes for many purposes: The Klallam, Bella Coola and Quileute People chew salal leaves and put them on burns and sores, the Samish and Swinomish People use the leaves in tea for coughs and tuberculosis, and the Quinault People use them to treat diarrhea and flu-like symptoms. The berries can be used for many purposes, including raw, in smoothies, or dried (Krohn)."},
  {name: "Dandelion", color: "red", location: {x:45, y:48.5}, size: "20px", photo_path: dandelion, drawing_path: water_dandelion, info: "Dandelions are a shockingly bitter plant found in most yards in Seattle! Cooking the leaves with garlic, adding them to a salad, or making dandelion root tea are all popular uses for these readily available plants (Jarvie)."},
  {name: "Crabapple Tree", color: "red", location: {x:48, y:52}, size: "20px", photo_path: apple, drawing_path: water_apple, info: "Crabapples can be harvested through late summer and fall, but are also ripe in the winter! While they can be bitter, they make great additions to jams, pies, and sauces (Edible Plant)."},
  {name: "Strawberry Tree", color: "red", location: {x:54, y:51}, size: "20px", photo_path: strawtree, drawing_path: water_strawtree, info: "Native to the Mediterranean region, this tree produces berries that are woody in texture. They are best cooked into jams, sauces, or alcohol making, though they can be eaten raw (UW Campus Tree Tours)."},
  {name: "Duck!!!", color:"red", location: {x:47, y:53}, size:"20px", photo_path: duck, drawing_path: duck, info: "The best part of being at UW are all the free ducks!"}
];