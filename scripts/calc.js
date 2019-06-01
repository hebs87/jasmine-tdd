/*Write source code
1. Write basic function - no values in parenthesis and return 42 - this is the bare minimum and passes the first test but fails second
2. Give parenthesis arguments of numOne and numTwo, and return sum of those two arguments
    This ensures both tests are passed and sum will always be the sum of those two numbers
3. Incorporate defensive testing by using if else statement, so if typeof arguments are both numbers, it will add the two, else it will return Error!
function addition(numOne, numTwo) {
    if (typeof(numOne) == "number" && (typeof(numTwo)) == "number") {
        return numOne + numTwo;
    } else {
        alert("Error!");
    }
} */

/*Refactoring - breaking our tests
1. Create new object Calculator = function()
2. Give it a running value, which is a running total (this.value = 0;)
3. Create our addition function and add it on to our Calculator object as a prototype (function that only takes one number as an argument)
4. Do the typeof() check again
5. So if the tyoe of number is actually a number, then the running total will be incremented by this number (+=)
6. So every time our new add function is called, if it is a number, we're going to increment our running total, otherwise we will return an error */
Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
   if (typeof(number) == "number") {
        this.value += number;
   } else {
       alert("Error!");
   }
}