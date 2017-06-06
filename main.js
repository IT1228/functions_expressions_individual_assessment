// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a , b){
  if (a > b){
  return a;
}else (a < b)
  return b;}
  console.assert(max(200, 58998) === 58998);
  console.assert(max(-400, 2) === 2);
  console.assert(max(223, 221) === 223);


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a , b , c){
  if ((a > b) && (a > c)){
  return a;
}else if ((b > a) && (b > c)){
  return b;
}else {
  return c;}
}
console.assert(maxOfThree(89, 270, 85) === 270);
console.assert(maxOfThree(27, 25, 26) === 27);
console.assert(maxOfThree(100000, 2, 20924848) === 20924848);


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){

    var letter = false;

    var vowels = ["a","e","i","o","u", "A", "Y"];

    if(vowels.indexOf(char) != -1)
      letter = true;

    return letter;

}

console.assert(isVowel("a") === true);
console.assert(isVowel("f") === false);
console.assert(isVowel("x") === false);
console.assert(isVowel("e") === true);
console.assert(isVowel("i") === true);
console.assert(isVowel("o") === true);
console.assert(isVowel("u") === true);

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(a , b){
  return (a + b);
}



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(a, b, c){
  return (a + b + c)/3;
}
console.assert(avg(1,2,3));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(a){
  return a.length;
}


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(a , b){
if (a > b) {
return true;
}else
return false;
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name){
  return ("Hello, " + name + "!");
}
// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(a, b, c, d){
  return ("The " + a + " " + b + " jumps over the " + c + " " + d);
}
console.log(madlib("large", "bear", "white", "cheese"))
