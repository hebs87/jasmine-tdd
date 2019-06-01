/*Describe a test:
1) Describe our test - I want to test a calculator
    2) Describe the tests we want to perform - I am going to test the addition function
        3) We say what it should do - It should return a result of 42
        4) Parse in our expectation - I expect the result of 20 + 22 to be 42
        (the value in expect is the name of the function, which we then declare in scripts file - it is addition in this example)
        5) we can create more tests by creating a new it section (steps 3 and 4 repeated)
        (Second test ensures that we always get the sum of the addition of two numbers)
        6) Include defensive testing, so add further requirements
        7) Add Jasmine spies using spyOn function (in this example, we want it to spy on an alert)
        - First argument = the object that the function that we're spying on belongs to (window in this case, as alert is a method of the windows object)
        - Second argument = a string with the name of the function (in this case is "alert")
        8. Invoke addition function and pass through Hitch and Guide
        9. Expectation that we expect(window.alert).toHaveBeenCalledWith("Error!")
        .toHaveBeenCalledWith allows us to pass through a parameter and to check if that is the one that the function has been called with
        We can test for specific parameters */

/*Refactoring - fixing our tests
1. Create a new instance of the calculator object - var calc = new Calculator
2. As our calc function now only takes one number, we need to call the calc.add() twice
3. This time, we expect our running value to be the total, so we need to update this in the expect(calc.value)
4. In the last test, we need to call the calc.add() function, and we now only need one string, as there is only one value in the function
    This now leaves one error, which we'll have a look how to fix (we are getting a value of 68 but we're expecting 26
    This is the running total of 42 + 26
5. To stop the value from carrying through, we need to introduce a beforeEach() callback function
6. Then move the calc var in there and remove the var - this creates a new instance of calc each time*/


describe("Calculator", function() {
    
    beforeEach(function() {
        calc = new Calculator();
    });
    
    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value/*addition(20, 22) in the first test*/).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value/*addition(7, 19) in the first test*/).toBe(26); 
        });
        it("should return an error if we dont't supply two numbers", function() {
            spyOn(window, "alert");
            /*addition in the first test*/calc.add("Hitch"/*, "Guide" in the first test*/);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});