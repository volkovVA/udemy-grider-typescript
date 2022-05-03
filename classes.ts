class Vehicle2 {
  // color: string = 'red';
  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  private drive(): void {
    console.log('vroom');
  }

  public honk(): void {
    console.log('beep');
  }

  protected speed(): void {
    console.log('car speed');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

class Car extends Vehicle2 {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  getCarSpeed(): void {
    this.speed();
  }
}

const vehicle = new Vehicle2('orange');
vehicle.honk();
console.log(vehicle.color);

const car = new Car(4, 'red');
car.startDrivingProcess();
car.honk();
car.getCarSpeed();
