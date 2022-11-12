// ! this is old interface



class OldCalc {
  constructor() {
    this.operations = function (n1, n2, operation) {
      switch (operation) {
        case "add":
          return n1 + n2;
        case "sub":
          return n1 - n2;
        default:
          return NaN;
      }
    };
  }
}


//! this is new interface
class NewCalc {
  constructor() {
    this.add = function (n1, n2) {
      return n1 + n2;
    };
    this.sub = function (n1, n2) {
      return n1 - n2;
    };
  }
}



// Adapter Class
class CalcAdapter {
  constructor() {
    const newCalc = new NewCalc();

    this.operations = function (n1, n2, operation) {
      switch (operation) {
        case "add":
          // using the new implementation under the hood
          return newCalc.add(n1, n2);
        case "sub":
          return newCalc.sub(n1, n2);
        default:
          return NaN;
      }
    };
  }
}


const oldCalc = new OldCalc();
console.log(oldCalc.operations(1, 5, "add")); 

const newCalc = new NewCalc();
console.log(newCalc.add(6, 5)); 
const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(6, 5, "add")); 
