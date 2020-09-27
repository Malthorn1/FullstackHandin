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
var _title, _author, _published, _pages, _name;
let http = require("http");
function takesIBook(book) {
    return "Title: " + book.title + "\n Author: " + book.author + "\n Published: " + book.published + "\n Number of pages: " + book.pages;
}
let book = { title: "Python", author: "Dan", published: new Date("2015-03-25"), pages: 50 };
console.log(takesIBook(book));
///THIS IS DUCK DYPING,  if the function recives the parameters title, author, date and number it assumes that it was given a book.
//Even though it might have been something else entirely 
function duckTypingExample(title, author, published, pages) {
    return "Title: " + title + "\n Author: " + author + "\n Published: " + published + "\n Number of pages: " + pages;
}
///////////////////////////////////////////////
function optionalParameters(title, author, published, pages) {
    return published ? pages ? { title, author, published, pages } : { title, author, pages } : { title, author };
}
;
let twoParam = optionalParameters("Typescript", "jesper");
console.log(twoParam);
//READ ONLY   
/*
console.log(book)
book.author = "yo"
console.log(book)

*/
class Book {
    constructor(title, author, publshed, pages) {
        _title.set(this, void 0);
        _author.set(this, void 0);
        _published.set(this, void 0);
        _pages.set(this, void 0);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _author, author);
        __classPrivateFieldSet(this, _published, publshed);
        __classPrivateFieldSet(this, _pages, pages);
    }
    get title() { return __classPrivateFieldGet(this, _title); }
    set title(title) { __classPrivateFieldSet(this, _title, title); }
    get author() { return __classPrivateFieldGet(this, _author); }
    set author(author) { __classPrivateFieldSet(this, _author, author); }
    get published() { return __classPrivateFieldGet(this, _published); }
    set published(published) { __classPrivateFieldSet(this, _published, published); }
    get pages() { return __classPrivateFieldGet(this, _pages); }
    set pages(pages) { __classPrivateFieldSet(this, _pages, pages); }
}
_title = new WeakMap(), _author = new WeakMap(), _published = new WeakMap(), _pages = new WeakMap();
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
let stringFunction;
let upperCaseStringFunction;
stringFunction = function (string1, string2, string3) {
    let list = [string1, string2, string3];
    return list;
};
/*
c) Design another implementation that returns an array, with the three strings uppercased.
*/
upperCaseStringFunction = function (string1, string2, string3) {
    let list = [string1.toUpperCase(), string2.toUpperCase(), string3.toUpperCase()];
    return list;
};
let myList = stringFunction('today', 'is', 'sunday');
let myUpperCaseList = upperCaseStringFunction('today', 'is', 'sunday');
console.log(myList);
console.log(myUpperCaseList);
/*
d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.
*/
let f2 = function logger(f1) {
    console.log(f1);
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
};
f2(stringFunction);
//e) Test f2 with the two implementations created in b+c. 
function f2test() {
    let list = ["D"];
    return list;
}
f2(f2test);
//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface
let other = (test) => { console.log(test); };
// f2(other);
//# sourceMappingURL=typescript.js.map