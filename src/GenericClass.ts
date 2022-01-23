class List<T> {
  private data: T[];

  constructor(...data: T[]) {
    this.data = data;
  }
  add(data: T): void {
    this.data.push(data);
    console.log(data);
  }
  addMultiple(...data: T[]): void {
    this.data.push(...data);
    console.log(...data);
  }
}

const list = new List<number | string>();
list.add("angga");
list.addMultiple("dewa", 123);
