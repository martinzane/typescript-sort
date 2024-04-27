class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(aIndex: number, bIndex: number): boolean {
    return this.data[aIndex].toLowerCase() > this.data[bIndex].toLowerCase();
  }

  swap(aIndex: number, bIndex: number): void {
    const characters = this.data.split("");
    const a = characters[aIndex];
    characters[aIndex] = characters[bIndex];
    characters[bIndex] = a;

    this.data = characters.join("");
  }
}

export default CharactersCollection;
