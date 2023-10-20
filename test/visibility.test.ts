describe("Visibility", () => {
  // public = Bisa diakses dimanapun, secara default jika tidak menyebutkan visibility, maka akan menggunakan visibility public

  // private = Hanya bisa diakses oleh class nya sendiri
  // protected = Sama seperti private, tapi bisa juga diakses oleh class turunannya
  class Counter {
    // private counter: number = 0;
    protected counter: number = 0;

    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
      this.counter += 2;
    }
  }

  // it("should support private", () => {
  //   const counter = new Counter();
  //   counter.increment();
  //   counter.increment();
  //   counter.increment();
  //   console.info(counter.getCounter());
  // });

  it("should support protected", () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });
});
