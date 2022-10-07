// Data types
//javascript has 7 data type


// 1. STRINGS

let myName = 'mildred';
let course = "javascript";
let classroom = `computers Labs` // this is known as templete literal or template strings
  let studentAge = "28";// string can look like numbers

  //string concatenation
  console.log(studentAge  + ' is ' + myName + ' age');

  //string interpolation
  let subject = `${myName} likes to study ${course} in the ${classroom}`;
  console.log(subject);



  // 2. NUMBERS

  let age = 29;
  let myAge = 28.5;
  console.log(age)
  console.log(myAge);

  //Javascript maths operations
// additions
  console.log(10 + 4);

  // subtractions
  console.log(10 - 4);

  //Division
  console.log(10 / 4);

  //multiplication
  console.log(10 * 4);

  //modulus
  console.log(10 % 4);// this one gives you the remainder




  // TYPE OF OPERATORS

  console.log(typeof myName); //Gives us the string representation of the type of data in the operand
  console.log(typeof myAge)


  let addAges = myAge + studentAge;
  console.log(addAges);
  console.log(typeof addAges)// adding a strings and a number converts ti to a string and joins the values togather similar to concatenation.

  console.log(age + myAge);
  // this is adding a number data type to another number data type and it gives you the correct answer


























