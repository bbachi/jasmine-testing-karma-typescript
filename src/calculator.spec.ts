import { Calculator } from './calculator';

describe("Calculator", function() {
    let calculator: any;
    
    beforeAll(() => {
        console.log("runs only once before everything.")
    })

    afterAll(() => {
        console.log("runs only once after everything.")
    })

    beforeEach(() => {
        console.log("running before each spec!!!!")
        calculator = new Calculator();
    })

    afterEach(() => {
        console.log("running after each spec!!!!")
    })

    it("should add two numbers", () =>  {
         
         console.log("adding two numbers spec!!")

         let result = calculator.add(2,4);

         expect(result).toBe(6);
    })

    it("should subtract two numbers", () =>  {

        console.log("subtracting two numbers spec!!")

        let result = calculator.subtract(4,2);

        expect(result).toBe(2);
    })

    it("should multiply two numbers", () =>  {

        console.log("multiplying two numbers spec!!")

        let result = calculator.multiply(4,2);

        expect(result).toBe(8);
    })
});