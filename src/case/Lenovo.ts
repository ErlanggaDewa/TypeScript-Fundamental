import BaseLaptop from "./BaseLaptop";

export default class Lenovo<T> extends BaseLaptop<T> {
  constructor(type: T, withNumeric: boolean) {
    super("Lenovo", type, withNumeric);
  }
}
