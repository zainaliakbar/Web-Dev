class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  showDetails() {
    console.log(`${this.brand} ${this.model} - $${this.price}`);
  }
}

class ElectricCar extends Car {
  constructor(brand, model, price, batteryLife) {
    super(brand, model, price);
    this.batteryLife = batteryLife;
  }

  charge() {
    console.log(`${this.model} is charging...`);
  }
}

const tesla = new ElectricCar("Tesla", "Model S", 90000, "450 km");
tesla.showDetails();
tesla.charge();
