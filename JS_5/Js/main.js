//1. boolean datatype

// boolean are a way of creatins switches that can turn settings No or OFF. TRUE or FALSE

console.log("*Boolean*");
let sleeping = true;
let wakeUp = false;

console.log(typeof sleeping);
console.log(typeof wakeUp);

let a = 7;
let b = 2;
let c = 7;
console.log(a == b);
console.log(a == c);


//2. NULLL DATATYPE
// it is totally empty or a meaningless value

let nothing = null;
console.log(nothing)
console.log(typeof nothing)
// Null on typeof will give you an object


// 3. Undefined

console.log('*undefined*')

let noting;
console.log(noting)
console.log(typeof noting)


// 4. Symbols

// Symbols are an ES6 data type whichare used as unique indentifiers. 
//Symbols can not be changed(immutable) and are unique


//let uniqueSymbol = Symbol('my things');
//console.log(uniqueSymbol)
//console.log(typeof uniqueSymbol)

//console.log(uniqueSymbol.description)// this gives you the value inside the symbol function

//let myUniqueSymbol = Symbol('converting to strings');
//console.log(myUniqueSymbol)

//alert(myUniqueSymbol);// A symbol can not be converted into a string thats why this will give and error message

//alert(myUniqueSymbol.toString());// this is how you manually convert a symbol to a string by using the tostring() function




// 5. BigInt

//it alllow us to represent interger value that are very large. the number data type in js can precisely represent numbers up to the number.Max_Safe_INTERGER which equals 12345678901234567890 (2^53 - 1).

console.log(999999);//accurate
console.log(99999999999999999999); //lost precision

console.log(12345678901234567890 === 12345678901234567890)

console.log(1234567890123456789n);// to create a bigInt we add n at the end of and interger






























