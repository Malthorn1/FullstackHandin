

//This class is abstract, so you cannot make an instance of the class
abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;
    toString() {
       return( `Shape's color: ${this.color}, Area: ${this.area}, Perimeter: ${this.perimeter}` )
    }

    get color(): string {
        return this. _color
    }
    set color(color :string) {
        this._color = color
    }
}

// Create a new class Circle that should extend the Shape class.

 class Circle extends Shape {
    protected _radius:number
    color:string
    constructor (radius:number ,color:string) {
            super(color) 
            this._radius = radius

    }
    get radius(): number {return this._radius;}
    set radius(radius:number) {this._radius = radius;}

    get area(): number {
        return (Math.PI * Math.pow(this._radius,2));
    }
    get perimeter(): number {
        return (2 * Math.PI * this._radius);
    }
}

let cirle = new Circle (1, "red"); 
console.log(cirle.toString());
cirle.radius = 2; 
console.log(cirle.toString());
console.log(cirle.radius)
cirle.color = "Blue";
console.log(cirle.toString());


  
class Cylinder extends Circle {
    private _height : number
    color:string
    radius:number

    constructor (radius:number ,color:string, height: number) {
        super(radius,color) 
        this._height = height
}
    
get height():number{ return this._height;}
set height(height:number){this._height = height;}

get area(): number {
    return (2*Math.PI*this._radius*(this._height*this._radius));
}
get perimeter(): number {
    throw new Error("Not Implemented");
}
get volume():number {
    return (Math.PI * Math.pow(this._radius,2) * this._height);
}

toString(): string{
    return `Cylinders's color: ${this.color}, Area: ${this.area}, Volume: ${this.volume}, Perimeter: Not implemented!`
}

}

let cylinder1 = new Cylinder(2,"Green",4);
console.log(cylinder1.area);
console.log(cylinder1.volume);
//console.log(cylinder1.perimeter);
console.log(cylinder1.toString());