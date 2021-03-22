// This function takes in two different numbers 

function addAndMultiply(numOne, numTwo) {
    // add those numbers together in the brackets and then multiply that sum by 5
    var number = (numOne + numTwo) * 5;
    // return the final number
    return number;
}

// console.log to test the function

console.log(addAndMultiply(1, 2));
console.log(addAndMultiply(17, -12));
console.log(addAndMultiply(90, 11));


// here is a function that utilizes the built in function .length
// we will use this to function determine the length of a string
// If a string is greater than 10 characters, it will return true, 
// if it is less than 10 characters it will return false

function tenCharacterLimit(string) {
    if (string.length > 10) {
        return true;
    } else if(string.length <= 10) {
        return false;
    } else {
        return "something went wrong"
    }
} 

// console.log to test the function
console.log(tenCharacterLimit("Once upon a time"));
console.log(tenCharacterLimit("Look at the time!"));
console.log(tenCharacterLimit("Times up"));

// This function will take in one array of strings 
function arrayOfStrings(myArray) {

   // This loop will use the built in .startsWith function to return the FIRST string that 
   // begins with ph
    for (var counter = 0; counter < myArray.length; counter++) {

        // here we create a variable for the index of the arra of strings
        var string = myArray[counter];

        // here we create a variable that states that any string that starts with ph is equal to n
        var n = string.startsWith('ph');

        // as we loop through the array, if a string starts with ph, it will stop the function 
        // and return as the string
        if (n === true) {
            return string;
        } 

        // as we loop, if a string does not start with ph,
        //  nothing will return and the loop will continue through each string
        else if (n === false) {
        } 
        else {
            return "something went wrong"
        }
    }
    
}


// create an array of strings and console.log to test the function

var arrayOne = ["painter", "photographer", "phoet", "writer"];

console.log(arrayOfStrings(arrayOne));

var arrayTwo = ["school", "dentist", "accountant", "pharmacist"];

console.log(arrayOfStrings(arrayTwo));


var arrayThree = ["biology", "math", "physics", "chemistry"];

console.log(arrayOfStrings(arrayThree));

   