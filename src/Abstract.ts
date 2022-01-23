abstract class Vehicle {
  abstract wheels: number;
  start(): void {
    console.log("brum");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class MotorCycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
car.wheels;
car.start();

let motor = new MotorCycle();
motor.wheels;
motor.start();
