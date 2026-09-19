class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}
const car2 = new Car('Pointac Firebird', 1976);
console.log(car2.details());
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());