import { describe, expect, test } from "@jest/globals";

// https://github.com/denysdovhan/wtfjs
describe("javascript being javascript", () => {
  test("1 + 2 + '3' = '33'", () => {
    const actual = 1 + 2 + "3";
    expect(actual).toBe("33");
  });

  test("baNaNa", () => {
    const actual = "b" + "a" + +"a" + "a";
    expect(actual).toBe("baNaNa");
  });
});
