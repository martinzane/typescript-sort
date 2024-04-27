import CharactersCollection from "./characters-collection.js";
import NumbersCollection from "./numbers-collection.js";
import Sorter from "./sorter.js";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("Xaayb");

const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();

const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();

console.log("Numbers: ", numbersCollection.data);
console.log("Characters: ", charactersCollection.data);
