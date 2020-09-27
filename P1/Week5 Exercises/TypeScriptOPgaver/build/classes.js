"use strict";
//This class is abstract, so you cannot make an instance of the class
class Shape {
    constructor(color) {
        this._color = color;
    }
    toString() {
        return (`Shape's color: ${this.color}, Area: ${this.area}, Perimeter: ${this.perimeter}`);
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}
// Create a new class Circle that should extend the Shape class.
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this._radius = radius;
    }
    get radius() { return this._radius; }
    set radius(radius) { this._radius = radius; }
    get area() {
        return (Math.PI * Math.pow(this._radius, 2));
    }
    get perimeter() {
        return (2 * Math.PI * this._radius);
    }
}
let cirle = new Circle(1, "red");
console.log(cirle.toString());
cirle.radius = 2;
console.log(cirle.toString());
console.log(cirle.radius);
cirle.color = "Blue";
console.log(cirle.toString());
class Cylinder extends Circle {
    constructor(radius, color, height) {
        super(radius, color);
        this._height = height;
    }
    get height() { return this._height; }
    set height(height) { this._height = height; }
    get area() {
        return (2 * Math.PI * this._radius * (this._height * this._radius));
    }
    get perimeter() {
        throw new Error("Not Implemented");
    }
    get volume() {
        return (Math.PI * Math.pow(this._radius, 2) * this._height);
    }
    toString() {
        return `Cylinders's color: ${this.color}, Area: ${this.area}, Volume: ${this.volume}, Perimeter: Not implemented!`;
    }
}
let cylinder1 = new Cylinder(2, "Green", 4);
console.log(cylinder1.area);
console.log(cylinder1.volume);
//console.log(cylinder1.perimeter);
console.log(cylinder1.toString());
//# sourceMappingURL=classes.js.map