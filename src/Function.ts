function getName(): string {
  return "Hallo Erlangga";
}
console.log(getName());

const getName2 = (): string => "Hallo Dewa";
console.log(getName2());

function printDay(): void {
  console.log("Hari ini sangat Indah");
}
printDay();

// * argument type
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}
console.log(multiply(2, 5));

// * function as types

type tambah = (val1: number, val2: number) => number;
const addFunc: tambah = (val1: number, val2: number): number => val1 + val2;
console.log(addFunc(10, 2));

// default parameters
const fullName = (firstName: string, lastName: string = "Dewa"): string => {
  return firstName + " " + lastName;
};
console.log(fullName("Erlangga"));

// Optional parameters
const getMark = (val1: string, val2?: number): string => {
  return val1 + " " + val2;
};
console.log(getMark("A", 1));
