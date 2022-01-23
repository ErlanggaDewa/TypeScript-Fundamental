export class User {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName = (): string => {
    return this.name;
  };
}

class Admin extends User {
  read: boolean = true;
  write: boolean = false;
  phone: string;
  private _email: string = "default@gmail.com";
  static getRoleName: string = "Admin";

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return { read: this.read, write: this.write };
  }

  set email(email: string) {
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

console.log(Admin.getRoleName);
