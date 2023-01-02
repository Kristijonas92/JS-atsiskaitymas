/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    sum(x, y) {
      return console.log(x + y);
    }
  
    subtraction(x, y) {
      return console.log(x - y);
    }
  
    multiplication(x, y) {
      return console.log(x * y);
    }
  
    division(x, y) {
      return console.log(x / y);
    }
  }