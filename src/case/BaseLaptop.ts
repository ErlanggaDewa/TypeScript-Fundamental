import LaptopInterface from "./LaptopInterface";
import * as Keyboard from "./Keyboard";

export default class BaseLaptop<T> implements LaptopInterface<T> {
  constructor(
    public name: string,
    public type: T,
    public withNumeric: boolean
  ) {}

  a() {
    return Keyboard.a();
  }

  b() {
    return Keyboard.b();
  }
}
