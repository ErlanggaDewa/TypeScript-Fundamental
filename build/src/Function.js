"use strict";
function getName() {
    return "Hallo Erlangga";
}
console.log(getName());
const getName2 = () => "Hallo Dewa";
console.log(getName2());
function printDay() {
    console.log("Hari ini sangat Indah");
}
printDay();
// * argument type
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(2, 5));
const addFunc = (val1, val2) => val1 + val2;
console.log(addFunc(10, 2));
// default parameters
const fullName = (firstName, lastName = "Dewa") => {
    return firstName + " " + lastName;
};
console.log(fullName("Erlangga"));
// Optional parameters
const getMark = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getMark("A", 1));
