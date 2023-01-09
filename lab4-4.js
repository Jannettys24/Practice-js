// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// if ( a < b) {
// console.log(true); true
// }else {
// console.log(false);
// }

// //
// if (c > d) {
// console.log(true); true
// }else {
// console.log( false);
// }
// console.log (a < b); true
// console.log (c > d); true
// console.log('name'==='name'); true

// // FOR THE NEXT TWO, USE ONLY && OR //
// console.log(true || false); true
// console.log(false && false && false && false && false || true);
// console.log(false || false)
// console.log(e ='Kevin');
// console.log(a < b != c);  // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a = a !=d ); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// // D. The Farm //
// let animal = "chicken"
// if (animal==='cow') {
//     console.log( "moooo")
// } else {
//  console.log ("Hey you are not a cow")
    
// }

//   E. Driver's Ed

//   Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
//if (age >= 16) {
 // console.log("Here are the keys!");
//} else {
  //  console.log("Sorry, you're too young.")
//}  


nes (66 sloc)  1.96 KB

// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed
// const cat1 = {
//     name: "Tommy",
//     breed: "Domestic Shorthair",
//     age: 1
// }
// console.log(cat1.age);
// console.log(cat1.breed);

// Papa cat
// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)
const cat2 = {
    name: "Jerry",
    breed: "American Shorthair",
    age: 2
}

/*3. Combine Cats!
The cats are multiplying!
Write a function combineCatsthat has two parameters mama, and papa. 
The function will take two arguments -- each a cat object.
Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.*/
// function combineCats(argueX, argueY) {
//     console.log(argueX);
//     console.log(argueY);
// }
// console.log(combineCats(cat1, cat2))

// function combineTwoCats(argue1, argue2) {
//     return {
//     name: argue1.name + argue2.name,
//     breed: argue1.breed + " - " + argue2.breed,
//     age: 1
// } 
//     }
    
// console.log(combineTwoCats(cat1, cat2));

// 4. Cat brain bender
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, 
// each which are combineCats, each which have two arguments, each which are combineCats.
// console.log(combineTwoCats(
//         combineTwoCats(cat1, cat2),
//         combineTwoCats(cat1, cat2)
//     )
// );
// console.log(combineTwoCats(combineTwoCats(cat1, cat2), combineTwoCats(cat1, cat2)));

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, 
// each which are combineCats, each which have two arguments, each which are combineCats.
// console.log(combineTwoCats(
//     combineTwoCats(
//      combineTwoCats(
//         combineTwoCats(cat1, cat2),
//         combineTwoCats(cat1, cat2),
//         ),
//         combineTwoCats(
//             combineTwoCats(cat1, cat2),
//             combineTwoCats(cat1, cat2) 
//         )
//     )
// )
// );

// II. Loops

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive

// for (let i = 0; i <= 10; i++) {
// console.log(i);
// }
// // Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 10; i <= 400; i++) {
// console.log(i);
// }
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i <= 4000; i += 3) {
// console.log(i);
// }

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     }
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let i = 1; i <= 100; i++) {
// if (i % 2 == 0) {
//     console.log(i + "<-- is an even number")
// } else if (i % 2 != 0) {
//     console.log(i)
// }
// }

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for (let i = 0; i <= 100; i++) {
// if (i % 5 === 0 && i % 3 != 0) {
//     console.log("I found a " + i +"." + " High five!");
// }
// //     // Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//     else if (i % 3 === 0 && i % 5 !== 0) {
//         console.log("I found a " + i +"." + " Three is a crowd!");
// } else if (i % 5 === 0 && i % 3 === 0) {
//     console.log("I found a " + i +"." + " High five! Three is a crowd!")
// }
// }

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// let bank_account = 0
// for (let i = 0; i <= 10; i++) {
//     bank_account += i;
//     console.log(bank_account);
//     
//     }

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let bank_account = 0
for (let i = 1; i <= 100; i++) {
    bank_account += (i * 2);
    console.log(bank_account);
    }
if (bank_account = 10,100) {
    console.log("I'm rich!");
}

III. Arrays & Control flow

A. Talk about it
What are the things in an array called?
"Each variable in an array is called an element"
Do Arrays guarantee those things will be in order?
"Not necessarily. Only ordered arrays can put elements in ascending/descending order"
What real-life thing could you model with an array?
"Phone numbers, or a list of songs from an album"

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
const quotes = [
   "Every",
   "Villian",
   "Is Lemons",
];

// // C. Accessing elements
// // Given the following array const randomThings = [1, 10, "Hello", true]
// // How do you access the 1st element in the array?
// const randomThings = [1, 10, "Hello", true];
// const firstEle = randomThings[0];
// console.log(firstEle);
// // Change the value of "Hello"to "World"
// randomThings[2] = "World";
// console.log(randomThings);

// // D. Change values
// // Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// // What would you write to access the 3rd element of the array?
// ourClass[2];
// // Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";
// // Add a new element, "Cloud City" to the array
// ourClass[5] = "Cloud City";
// //or
// // ourClass.push("Cloud City");
// console.log(ourClass);

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// // Given the following array: const myArray = [5, 10, 500, 20]
// const myArray = [5, 10, 500, 20]
// // Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray[4] = "Aegon";
// myArray.push("The Great");
// // console.log(myArray);
// // Remove the 5 from the beginning of the array.
// myArray.shift([1]);
// console.log(myArray);
// // Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley");
// console.log(myArray);
// // Remove the string of your choice from the end of the array.
// myArray.pop();
// console.log(myArray);
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// console.log(myArray.reverse());
// "mutate means changing a properties value"

// // F. Biggie Smalls
// // Create a variable that contains an integer.
// let num = 100;
// // Write an if ... elsestatement that:
// // console.log()s "little number" if the number is entered is less than 100
// if (num < 100) {
//     console.log("little number")
// }
// // console.log()s big numberif the number is greater than or equal to 100.
// else {
//     console.log("big number")
// }

// // G. Monkey in the Middle
// // Write an if ... else if ... elsestatement:
// let num = 11
// // console.log()little numberif the number entered is less than 5.
// if (num < 5) {
//         console.log("little number")
//     }
// // If the number entered is more than 10, log big number.
// else if (num > 10) {
//         console.log("big number")
//     }
// // Otherwise, log "monkey".
// else {
//     return console.log("monkey");
// }

// H. What's in Your Closet?

const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "Per Scholas hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];
 
 // Thom's closet is more complicated. Check out this nested data structure!!
 const thomsCloset = [
   [
     // These are Thom's shirts
     "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up",
   ],[
     // These are Thom's pants
     "grey jeans",
     "jeans",
     "PJs"
   ],[
     // Thom's accessories
     "wool mittens",
     "wool scarf",
     "raybans"
   ]
 ];

// //   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log("Kristyn is rocking that " +  kristynsCloset[3] + " today!")
// // Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(5, 0, 'raybans');
// console.log(kristynsCloset);
// // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// kristynsCloset[6] = "stained knit hat";
// console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]);
// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2]);
// Access one item from Thom's accessories array.
console.log(thomsCloset[2][1]);
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][2] + " and " + thomsCloset[2][1] + "!");
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]);