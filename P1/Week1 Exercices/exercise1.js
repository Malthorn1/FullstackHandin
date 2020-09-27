////////////////////////OPGAVE 1 //////////////////////////////////
var arrayOfNames = ["Lars", "Peter", "Jan", "Bo"];
function myFilter (arrayForFilter, callback) {
    return result  = arrayForFilter.filter(word => word.length < callback)

}

var filter = myFilter(arrayOfNames, 4);
console.log(filter)

////////////////////////OPGAVE 2 //////////////////////////////////
var arrayofNumbers = [1,2,3,4,5]
function myMap (arrayForMap, callback) {
    return result  = arrayForMap.map(number => number * callback)

}


var map = myMap(arrayofNumbers, 2)
console.log(map) 


////////////////////////OPGAVE 3 //////////////////////////////////

var names = ["Lars", "Peter", "Jan", "Bo"];
var newArray = names.filter(function(name ) {
    return name = name.length < 4});
console.log(newArray)

var numbers = [1,2,3,4,5]
var newMapArray = numbers.map(function(number) {
    return number =  number*3; 
}); 
console.log(newMapArray)


////////////////////////OPGAVE 4, A //////////////////////////////////

function myReduce( names, callback ) {
    return names.join(callback)

}

let reduced = myReduce(names, ", ")
console.log(reduced)


////////////////////////OPGAVE 4, B //////////////////////////////////
let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]
   var reducer = members.reduce ((acc, member,idx,arr ) => {
    acc = acc + parseInt(`${member.age}`) 
    let temp = parseInt(acc) 
    temp = (idx < arr.length-1)? temp :temp

    if (idx+1 == arr.length) {
        return parseInt(acc/arr.length)
    } else {
        return temp 
    }
   },""); 
   console.log(reducer)


////////////////////////OPGAVE 5, Hoisting  //////////////////////////////////
//Hoisting bruges til at 
// Outputs: undefined
console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);

//

var name = "Baggins";
function BagginsAndUnderHill () {
    // Outputs: "Original name was undefined"
    console.log("Original name was " + name);

    //if there is no var  on the line below,  the output above would be "Original name was Baggins" 
    var name = "Underhill";

    // Outputs: "New name is Underhill"
    console.log("New name is " + name);
};
BagginsAndUnderHill();  

////////////////////Example with Functions////////////////////////////////////////
// Outputs: "Definition hoisted!"
definitionHoisted();

// TypeError: undefined is not a function
///////////////////////////////
//definitionNotHoisted();//////
///////////////////////////////
function definitionHoisted() {
    console.log("Definition hoisted!");
}

//since this function is declared with a variable, the program will break because it is undefined while being run higher up


var definitionNotHoisted = function () {
    console.log("Definition not hoisted!");
};



////// CALL /// 

//call() or Function.prototype.call()

/* Call kan bruges når man kalder en funktionn, med nogle givne variabler. 

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};
console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
// returns output as welcome Niladri to Newtown KOLKATA in WB

I dette tilfælde  kaldes greeting metoden med call, for at give et object (obj)  Her this.name, samt ekstra variabler Newtown","KOLKATA","WB" */ 



//////APPLY //// 
/*
var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

// array of arguments to the actual function
var args = ["Newtown","KOLKATA","WB"];  
console.log("Output using .apply() below ")
console.log(greeting.apply(obj,args));

Bind og Apply er egentligt meget ens.
en nævneværdig forskel er dog at man med apply kan sende sine argumenter som et array  (args) istedet for at skulle skrive dem i funktions kaldet 



*/


///////////////////////APPLY ////////////////////////////////
/*
var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

//creates a bound function that has same body and parameters 
var bound = greeting.bind(obj); 


console.dir(bound); ///returns a function

console.log("Output using .bind() below ");

console.log(bound("Newtown","KOLKATA","WB")); //call the bound function

Bind er en måde at holde fast i den originale "this", så den ikke går tabt ned igennem metode kald. 



*/ 

//////////////////////// CLOSURES ////////////

//////////Closure COunter ////////////////

var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    };
  })();
  
  console.log(counter.value());  // 0.
  
  counter.increment();
  counter.increment();
  counter.increment();
  console.log(counter.value());  // 2.
  
  counter.decrement();
  console.log(counter.value());  // 1.


  //////////////////////////

  var person = (function() {
    let info = {name: "", age: ""}

    function changeAge(val) { 
    `${info.age = val}`
    }
    function changeName(val) { 
        `${info.name = val}`
        }


    return {
      setAge: function(age) {
        changeAge(age);
      },
  
      setName: function(name) {
        changeName(name);
      },
  
      getInfo: function() {
        return `${info.name}` +", "+ `${info.age}`;
      }
    };
  })();

let person1 = person; 

person1.setName("Emil")
person1.setAge(20); 

console.log(person1.getInfo());  




