const { sum } = require("../sum");

test("sum function should calculate the sum of two numbers", () => {
    const res = sum(1,2);
    expect(res).toBe(3);
});
