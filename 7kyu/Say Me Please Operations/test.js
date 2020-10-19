const chai = require("chai");
const assert = chai.assert;

describe("Say me operations", () => {
  it("Sample tests", () => {
    assert.strictEqual(sayMeOperations("1 2 3 5 8"), "addition, addition, addition");
    assert.strictEqual(sayMeOperations("9 4 5 20 25"), "subtraction, multiplication, addition");
    assert.strictEqual(sayMeOperations("10 2 5 -3 -15 12"), "division, subtraction, multiplication, subtraction");
    assert.strictEqual(sayMeOperations("2 2 4"), "addition");
  });
});