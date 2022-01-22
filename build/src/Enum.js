"use strict";
// enum
// numeric enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 22] = "MAR";
    Month[Month["APR"] = 23] = "APR";
})(Month || (Month = {}));
console.log(Month.JAN);
console.log(Month.APR);
// string enum
var Month2;
(function (Month2) {
    Month2["JAN"] = "Januari";
    Month2["FEB"] = "Februari";
    Month2["MAR"] = "Maret";
    Month2["APR"] = "APRIL";
})(Month2 || (Month2 = {}));
console.log(Month2.JAN);
console.log(Month2.APR);
