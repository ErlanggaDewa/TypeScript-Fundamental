interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Lenovo implements Laptop {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  on(): void {
    console.log("Laptop hidup");
  }
  off(): void {
    console.log("Laptop mati");
  }
}

let lenovo = new Lenovo("Legion 15 ARH");
console.log(lenovo.on());
