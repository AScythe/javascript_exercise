"use strict";

// let x = prompt('Give a positive integer?', 1);
// let n = prompt('Give another positive integer?', 1);

describe("pow", function () {

    it("2 raised to power 3 is 8", function () {
        assert.equal(pow(2, 3), 8);
    });

    it("3 raised to power 4 is 81", function () {
        assert.equal(pow(3, 4), 81);
    });

});