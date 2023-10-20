describe("Parameter Properties", () => {
  // bisa langsung set properties melalui parameter
  class Person {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person = new Person("Rifqi");
    console.log(person);

    person.name = "Ziyad";
    console.log(person.name);
  });
});
