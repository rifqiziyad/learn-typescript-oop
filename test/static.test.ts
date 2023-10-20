describe("Static", () => {
  //  - Static merupakan kata kunci yang bisa digunakan pada properties atau method di class, yang menyebabkan properties atau method tersebut bukan lagi sebagai bagian dari object yang dibuat dari class
  // - Static properties atau method, bisa menyebabkan seakan-akan kita membuat global variable atau function, yang bisa diakses secara langsung, tanpa membuat object dari class nya
  // - Kita juga bisa menambah visibility pada static properties atau method
  // - Biasanya static ini sering digunakan pada jenis class utility / helper

  //  - Static member hanya bisa mengakses static member lainnya, tidak bisa mengakses non static member, kecuali dari object
  // - Sedangkan untuk non static member, bisa mengakses static member secara langsung

  class Configuration {
    static NAME: string = "Belajar TypeScript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Eko Kurniawan Khannedy";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }

  it("should support static method", () => {
    console.info(MathUtil.sum(1, 2, 3, 4, 5));
  });

  it("should support", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });
});
