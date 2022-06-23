import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Buyers Guide",
  },
  {
    _id: uuid(),
    categoryName: "Switch",
  },
  {
    _id: uuid(),
    categoryName: "Custom",
  },
  {
    _id: uuid(),
    categoryName: "Typing",
  },
  {
    _id: uuid(),
    categoryName: "Gaming",
  },
];
