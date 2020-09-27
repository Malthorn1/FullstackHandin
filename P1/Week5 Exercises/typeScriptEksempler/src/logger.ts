

function loggerV1(a: any, b: any) {
    console.log(`Value-1: ${a}, Value-2: ${b}`)
}


let n1 = 45;
let s1 = "Hello gutterne"
loggerV1(n1, s1)

function loggerV2(a: number, b: string) {
    console.log(`Value-1: ${a}, Value-2: ${b}`)
}

function loggerV2Return(a: number, b: string): string {
    return `Value-1: ${a}, Value-2: ${b}`
}

loggerV2(n1, s1)

////////////////////////////////////////////

interface IPerson { name: string }
interface IAddres { street: String }

function loggerV3(a: IPerson, b: IAddres) {
    console.log(`Value-1: ${a.name}, Value-2: ${b.street}`)
}

loggerV3({ name: "Rasmus Paludan" }, { street: "Roskildevej 69" })


class Address implements IAddres {
    private _street: string
    constructor(street: string) { this._street = street }

    get street(): string { return this._street }
    set street(street: string) { this._street = street }
    toString(): string { return this._street }
}

class Person implements IPerson {
    #name: string
    constructor(name: string) { this.#name = name }
    get name(): string { return this.#name }
    set name(name: string) { this.#name = name }
    toString(): string { return this.#name }

}

let p1 = new Person("Kurt")
let a1 = new Address("Roskildevej")

let test = a1.street
console.log(a1.street)
a1.street = "kdakdsa2"


loggerV3(p1, a1)

////////////////////////////
// DONT DO THIS BELOW 
function loggerV4<T, U>(a: T, b: U) {
    console.log(`Value-1: ${a}, Value-2: ${b}`)
}

loggerV4(4, "hej gutter")
//TOO GENERIC, ITS THE SAME AS loggerV1
////////////////////


//let numbers: Array<number>
//let names: Array<string>
//let results: Array<boolean>


class GenericLogger<T, U> {

    log = (a: T, b: U) => {
        console.log(`Value-1: ${a}, Value-2: ${b}`)
    }
}


const numberLogger = new GenericLogger<number, number>();
const personAddressLogger = new GenericLogger<IPerson, IAddres>();

numberLogger.log(45, 56)
personAddressLogger.log(p1, a1)
