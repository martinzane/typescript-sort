interface Sortable {
  length: number;
  compare(aIndex: number, bIndex: number): boolean;
  swap(aIndex: number, bIndex: number): void;
}

abstract class Sorter {
  abstract length: number;
  abstract compare(aIndex: number, bIndex: number): boolean;
  abstract swap(aIndex: number, bIndex: number): void;

  public sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

export default Sorter;
