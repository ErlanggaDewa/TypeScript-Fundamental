import BaseLaptop from "./BaseLaptop";

export default class MacBook<T> extends BaseLaptop<T> {
  constructor(type: T, withNumeric: boolean) {
    super("MacBook", type, withNumeric);
  }
}
