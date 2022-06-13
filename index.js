/*
Test types: 

    1. Inputs - selected
    1.1 Valid
    1.2 Invalid
    1.2.1 values?

    2. Outputs
    2.1 Expected - by specification (classical vs TDD/BDD) - TDD/BDD = specification = test. First test then code.
    2.2 Actual
    
*/


function plus(x, y) {

    if (x === undefined || y === undefined) {
        throw "Error, param must be defined"
        // Or - throw new Error("....")
    }

    return x + y;
}

function test_plus_ok() {
    // Arrange
    // 1. Init test target (app/object state, this, dependencies ...)
    // 2. Declare expectations

    const expectedResults = [3, -1, 1.1];
    const params = [{ x: 1, y: 2 }, { x: 0, y: -1 }, { x: 1, y: 0.1 }];
    // Act
    const actualResults = params.map((input) => plus(input.x, input.y));

    // Assert

    actualResults.forEach((actual, i) => {
        const expected = expectedResults[i];
        expected === actual ? console.log("ok") : console.log(`Not ok. Expected is ${expected} but actual was ${actual}`);
    });


}

function test_plus_error() {
    // Arrange
    // 1. Init test target (app/object state, this, dependencies ...)
    // 2. Declare expectations

    const expected = "Error, param must be defined";
    const params = [{}, { x: undefined, y: 10 }, { x: 10, y: undefined }];
    // Act
    const actualResults = params.map((input) => {

        try {
            plus(input.x, input.y)
            return null;
        } catch (e) {

            return e;
        }
    });

    // Assert

    actualResults.forEach((actual, i) => {
        expected === actual ? console.log("ok") : console.log(`Not ok. Expected error ${expected} none was cached.`);
    });

}

// It is good to test boundary cases`



test_plus_ok();
test_plus_error();