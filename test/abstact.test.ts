describe("Abstract Class", () => {
  // Abstract Class merupakan deklarasi Class yang belum selesai
  // Abstract Class membolehkan memiliki properties atau method yang abstract atau belum di buat implementasinya
  // Abstract Class juga tidak bisa dibuat menjadi object menggunakan kata kunci new
  // Kegunaan Abstract Class hanya digunakan sebagai Parent Class yang nanti diturunkan ke Child Class nya

  abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
      this.id = id;
    }

    hello() {
      console.log("hello");
    }

    abstract sayHello(name: string): void;
  }

  class RegularCustomer extends Customer {
    name: string;

    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should support ", () => {
    // const customer1 = new Customer(1)  // tidak bisa dijadikan instance karena class tersebut abstact
    const customer1 = new RegularCustomer(1, "Eko");
    customer1.sayHello("Budi");
  });
});
