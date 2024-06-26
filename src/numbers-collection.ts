import Sorter from "./sorter.js";

class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  public get length(): number {
    return this.data.length;
  }

  public compare(aIndex: number, bIndex: number): boolean {
    return this.data[aIndex] > this.data[bIndex];
  }

  public swap(aIndex: number, bIndex: number): void {
    const a = this.data[aIndex];
    this.data[aIndex] = this.data[bIndex];
    this.data[bIndex] = a;
  }
}

export default NumbersCollection;
