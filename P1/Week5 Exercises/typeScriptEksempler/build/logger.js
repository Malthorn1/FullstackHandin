"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
function loggerV1(a, b) {
    console.log(`Value-1: ${a}, Value-2: ${b}`);
}
let n1 = 45;
let s1 = "Hello gutterne";
loggerV1(n1, s1);
function loggerV2(a, b) {
    console.log(`Value-1: ${a}, Value-2: ${b}`);
}
function loggerV2Return(a, b) {
    return `Value-1: ${a}, Value-2: ${b}`;
}
loggerV2(n1, s1);
function loggerV3(a, b) {
    console.log(`Value-1: ${a.name}, Value-2: ${b.street}`);
}
loggerV3({ name: "Rasmus Paludan" }, { street: "Roskildevej 69" });
class Address {
    constructor(street) { this._street = street; }
    get street() { return this._street; }
    set street(street) { this._street = street; }
    toString() { return this._street; }
}
class Person {
    constructor(name) {
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    get name() { return __classPrivateFieldGet(this, _name); }
    set name(name) { __classPrivateFieldSet(this, _name, name); }
    toString() { return __classPrivateFieldGet(this, _name); }
}
_name = new WeakMap();
let p1 = new Person("Kurt");
let a1 = new Address("Roskildevej");
let test = a1.street;
console.log(a1.street);
a1.street = "kdakdsa2";
loggerV3(p1, a1);
////////////////////////////
// DONT DO THIS BELOW 
function loggerV4(a, b) {
    console.log(`Value-1: ${a}, Value-2: ${b}`);
}
loggerV4(4, "hej gutter");
//TOO GENERIC, ITS THE SAME AS loggerV1
////////////////////
//let numbers: Array<number>
//let names: Array<string>
//let results: Array<boolean>
class GenericLogger {
    constructor() {
        this.log = (a, b) => {
            console.log(`Value-1: ${a}, Value-2: ${b}`);
        };
    }
}
const numberLogger = new GenericLogger();
const personAddressLogger = new GenericLogger();
numberLogger.log(45, 56);
personAddressLogger.log(p1, a1);
//# sourceMappingURL=logger.js.map