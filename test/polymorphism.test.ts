describe("Polymorphism", () => {
  // Saat kita membuat function / method dengan parameter, kita juga bisa mengirim data polymorphism pada parameter tersebut
  // Misal kita membuat sebuah function dengan parameter class Employee, kita bisa mengirim object dalam bentuk Employee, Manager ataupun VicePresident
  // Hal ini karena Manager dan VicePresident merupakan turunan dari Employee, sehingga kita bisa mengirim data seluruh turunan dari Employee

  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  // Saat melakukan Type Cast, pastikan posisi Child paling bawah dilakukan pengecekan di awal
  // Hal ini agar tidak terjadi kesalahan konversi
  // Contoh, jika kita ubah posisi pengecekan instanceof Manager dan VicePresident, maka ketika kita mengirim VicePresident, dia akan berhenti di Manager, hal ini karena hasil instanceof bernilai true, karena VicePresident adalah turunan dari Manager

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  it("should support", () => {
    let employee: Employee = new Employee("Eko");
    console.log(employee);

    employee = new Manager("Eko");
    console.log(employee);

    employee = new VicePresident("Eko");
    console.log(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Rifqi"));
    sayHello(new Manager("Ziyad"));
    sayHello(new VicePresident("Imtinan"));
  });

  it("should support method parameter polymorphism wrong", () => {
    sayHelloWrong(new Employee("Eko"));
    sayHelloWrong(new Manager("Budi"));
    sayHelloWrong(new VicePresident("Joko"));
  });
});
