import CharactersCollection from "./characters-collection.js";
import { LinkedList } from "./linked-list.js";
import NumbersCollection from "./numbers-collection.js";
import Sorter from "./sorter.js";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("Xaayb");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log("Numbers: ", numbersCollection.data);

const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();
console.log("Characters: ", charactersCollection.data);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
