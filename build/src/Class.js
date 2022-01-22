"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.User = User;
class Admin extends User {
    constructor(name, age, phone) {
        super(name, age);
        this.read = true;
        this.write = false;
        this._email = "default@gmail.com";
        this.phone = phone;
    }
    getRole() {
        return { read: this.read, write: this.write };
    }
    set email(email) {
        if (email.length <= 5) {
            console.log("email tidak valid");
            return;
        }
        this._email = email;
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin("Erlangga", 21, "+628999222");
console.log(admin.getName());
console.log(admin.age);
console.log(admin.phone);
console.log((admin.email = "cek"));
console.log(admin.getRole());
