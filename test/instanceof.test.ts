describe("Instance Of", () => {
  // untuk mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
  // Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah “object”
  // Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan
  class Employee {}
  class Manager {}

  const budi = new Employee();
  const eko = new Manager();

  it("should have problem using typeof", () => {
    console.log(typeof budi);
    console.log(typeof eko);
  });

  it("should support instanceof", () => {
    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);

    expect(eko instanceof Employee).toBe(false);
    expect(eko instanceof Manager).toBe(true);
  });
});
