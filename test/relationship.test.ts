describe("Relationship", () => {
  //  Karena implementasi dari object di TypeScript adalah JavaScript object
  // Jadi sebenarnya jika terdapat dua object walaupun berbeda class, tetapi secara properties dan function sama, masa bisa dianggap secara struktur JavaScript object adalah sama
  // Pada kasus seperti itu, kita bisa membuat object untuk tipe data A, dengan membuat object dari tipe data B, asal secara properties dan method sama

  class Person {
    constructor(public name: string) {}
  }

  class Customer {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person: Person = new Customer("Eko");
    console.info(person.name);
  });
});
