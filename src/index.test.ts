import { pgHello, sum } from ".";

test("sum works", () => {
  expect(sum({ num1: 1, num2: 2 })).toBe(3);
});

test("pgHello works", async () => {
  expect(await pgHello()).toBe("Hello world!");
});
