function myData<T>(params: T) {
  return params;
}

console.log(myData("Erlangga").length);
console.log(myData(4).toString());

const arrFunc = <T>(value: T): T => {
  return value;
};
console.log(arrFunc("Dewa").length);
console.log(arrFunc(10).toString());
