describe("My fizzBuzz function", function() {
    
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    
    describe("Returns number, fizz, buzz or fizzbuzz", function() {
        
        it("should exist", function() {
            expect(fizzbuzz).toBeDefined();
        }),
        
        it("should return Fizz when called fizzbuzz(9)", function() {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        
        it("should return Buzz when called fizzbuzz(10)", function() {
            var result = fizzBuzz(10);
            expect(result).toBe("Buzz");
        });
        
        it("should return FizzBuzz when called fizzbuzz(15)", function() {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
        
        it("should return 1 when called fizzbuzz(1)", function () {
            var result = fizzBuzz(1);
            expect(result).toBe(1);
        });
        
        it("should return an error if we don't supply a number", function() {
            var result = fizzBuzz("Hitch");
            expect(result).toBe("Error!");
        });
    });
});