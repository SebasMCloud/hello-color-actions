const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola, Soy Sebastian Mesa + CI/CD");
  });
});
