"use strict";
const assert = require("assert");
// name of the file should match
const calc = require("./calc.js");

describe("add", function () {

    it("5 plus 5 is 10", function () {
        assert.strictEqual(calc.add(5, 5), 10);
    });
    it("1 plus 0 is 1", function () {
        assert.strictEqual(calc.add(1,0), 1);
    });

    it("1 plus -1 is 0 ", function () {
        assert.strictEqual(calc.add(1, -1), 0);
    });
});

describe("sub", function() {
    it("10 minus 6 is 4", function() {
        assert.strictEqual(calc.sub(10, 6), 4);
    });
    it("5 minus 5 is 0", function () {
        assert.strictEqual(calc.sub(5, 5), 0);
    });
    it("-1 minus -5", function () {
        assert.strictEqual(calc.sub(-1, -5), 4);
    });
});

describe("div", function() {
    it("10 divide 5 is 2", function(){
        assert.strictEqual(calc.div(10, 5), 2);
    });
    it("-10 divide 5 is -2", function() {
        assert.strictEqual(calc.div(-10, 5), -2);
    });
    it("1 divide 2 is 0.5", function(){
        assert.strictEqual(calc.div(1, 2), 0.5);
    });
});

// write test description for sub and div




