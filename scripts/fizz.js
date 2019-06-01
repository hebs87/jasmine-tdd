fizzBuzz = function(number) {
    if (number % 3 === 0 && number % 5 === 0 && typeof(number) == "number") {
        return "FizzBuzz";
    }
    else if (number % 3 === 0 && typeof(number) == "number") {
        return "Fizz";
    }
    else if (number % 5 === 0 && typeof(number) == "number") {
        return "Buzz";
    }
    else if (!number % 3 === 0 && !number % 5 === 0 && typeof(number) == "number") {
        return number;
    }
    else {
        return "Error!";
    }
}