class Rectangle {
  constructor(length = 0, breadth = 0, color = "white") {
    this.length = length;
    this.breadth = breadth;
    this.color = color;
  }
  
  area() {
    console.log(`The area of this rectangle is ${this.length * this.breadth}.`);
  }

  parameter() {
    console.log(
      `The parameter of this rectangle is ${2 * (this.length + this.breadth)}.`
    );
  }

  paint () {
    console.log(`The color of this rectangle is ${this.color}.`);
  }
}

const rectangleOne = new Rectangle(10, 20);
rectangleOne.area();
rectangleOne.parameter();
rectangleOne.paint();
