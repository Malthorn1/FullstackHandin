let http = require("http");

interface IBook {
    title: string; 
    readonly author: string;
    published?: Date; 
    pages?: number; 
}


function takesIBook (book: IBook) {
    return "Title: " +book.title +"\n Author: " + book.author + "\n Published: "+ book.published + "\n Number of pages: "+ book.pages
} 

let book : IBook= {title: "Python", author: "Dan", published: new Date("2015-03-25"), pages: 50}

console.log(takesIBook(book))



///THIS IS DUCK DYPING,  if the function recives the parameters title, author, date and number it assumes that it was given a book.
//Even though it might have been something else entirely 
function duckTypingExample (title: string, author: string, published: Date, pages: number ) {
    return "Title: " +title +"\n Author: " + author + "\n Published: "+ published + "\n Number of pages: "+ pages
} 
///////////////////////////////////////////////


function optionalParameters (title: string, author: string, published?: Date, pages?: number ):IBook {
    return published? pages?   {title, author, published, pages} : {title, author, pages} : {title, author}
};

let twoParam = optionalParameters("Typescript", "jesper"); 

console.log(twoParam)


//READ ONLY   
/*
console.log(book)
book.author = "yo"
console.log(book)

*/ 

class Book implements IBook {
    #title: string
    #author: string 
    #published: Date
    #pages: number
    constructor(title: string, author: string, publshed: Date, pages: number) { 
        this.#title = title
        this.#author = author
        this.#published = publshed
        this.#pages = pages
    }

    get title(): string { return this.#title }
    set title(title: string) { this.#title = title }
    get author(): string { return this.#author }
    set author(author: string) { this.#author = author }

    get published(): Date {return this.#published}
    set published(published: Date) { this.#published = published }

    get pages(): number {return this.#pages}
    set pages(pages: number) { this.#pages = pages }

}


interface IPerson { name: string }

class Person implements IPerson {
    #name: string
    constructor(name: string) { this.#name = name }
    get name(): string { return this.#name }
    set name(name: string) { this.#name = name }
    toString(): string { return this.#name }
}


////////////////////////////////// INTERFACES 2 
/*
Interfaces 2:
a) Create an interface to describe a function: myFunc that should take three 
string parameters and return a String Array.
*/

interface Imyfunc {
    (string1 : string,
    string2 : string,
    string3 : string ) :  string[]
}

let stringFunction : Imyfunc
let upperCaseStringFunction : Imyfunc
stringFunction = function (string1,string2,string3) {
    let list: string[] = [string1,string2,string3]
    return list; 
}

/*
c) Design another implementation that returns an array, with the three strings uppercased.
*/


upperCaseStringFunction = function (string1,string2,string3) {
    let list: string[] = [string1.toUpperCase(),string2.toUpperCase(),string3.toUpperCase()]
    return list; 
}


let myList = stringFunction('today', 'is','sunday');
let myUpperCaseList = upperCaseStringFunction('today', 'is','sunday');
console.log(myList);
console.log(myUpperCaseList);

/*
d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.
*/
let f2 = function logger(f1: Imyfunc){
    console.log(f1)
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));

}

f2(stringFunction)


//e) Test f2 with the two implementations created in b+c. 
function f2test () {
    let list: string[] = ["D"];
    return list 
}   

f2(f2test)

//f) Verify that f2 cannot be used with functions that do not obey the myFunc interface

let other = (test:number) => {console.log(test)}

// f2(other);