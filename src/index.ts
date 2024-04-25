import NumbersCollection from "./numbers-collection.js";
import Sorter from "./sorter.js";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(sorter.collection, "1");
