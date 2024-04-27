class CharactersCollection {
  constructor(public data: string) {}

  public get length(): number {
    return this.data.length;
  }

  public compare(aIndex: number, bIndex: number): boolean {
    return this.data[aIndex].toLowerCase() > this.data[bIndex].toLowerCase();
  }

  public swap(aIndex: number, bIndex: number): void {
    const characters = this.data.split("");
    const a = characters[aIndex];
    characters[aIndex] = characters[bIndex];
    characters[bIndex] = a;

    this.data = characters.join("");
  }
}

export default CharactersCollection;
