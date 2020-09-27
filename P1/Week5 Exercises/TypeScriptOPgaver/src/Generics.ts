/*
a) Implement a generic function which will take an array of any kind, and return the array reversed 
(just use the built-in reverse function), so the three first calls below will print the reversed array, and the last call will fail.
*/



function reverseArr<T> (arg: any[]): any[] {
 return arg.reverse()

}
console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
console.log(reverseArr<number>(["a","b","c"]));

 
//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:


class DataHolder <T> {
    private _data: T;
    constructor(data:T){
        this._data = data;
    }

    get data(): T{ return this._data;}
    set data(data: T) {this._data = data;}
}


//d holder en string "hello" 
let d = new DataHolder<string>("Hello");
console.log(d.data);
//d bliver til "world"  (standard getter/setter) 
d.data = ("World");
console.log(d.data);

let d2 = new DataHolder<number>(123);
console.log(d2.data);
d2.data = 500;
console.log(d2.data);

