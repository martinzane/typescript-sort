import Sorter from "./sorter.js";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  public get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  public add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  private at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  public compare(aIndex: number, bIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(aIndex).data > this.at(bIndex).data;
  }

  public swap(aIndex: number, bIndex: number): void {
    const aNode = this.at(aIndex);
    const bNode = this.at(bIndex);

    const a = aNode.data;
    aNode.data = bNode.data;
    bNode.data = a;
  }

  public print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
