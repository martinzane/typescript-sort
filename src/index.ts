class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        const a = this.collection[j];
        const b = this.collection[j + 1];

        if (a > b) {
          this.collection[j] = b;
          this.collection[j + 1] = a;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();

console.log(sorter.collection);
