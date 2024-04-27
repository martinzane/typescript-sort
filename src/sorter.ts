interface Sortable {
  length: number;
  compare(aIndex: number, bIndex: number): boolean;
  swap(aIndex: number, bIndex: number): void;
}

class Sorter {
  constructor(public collection: Sortable) {}

  public sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

export default Sorter;
