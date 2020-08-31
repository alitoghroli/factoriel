let num: string = prompt('Enter a number between 20 and 100: ');
const n: number = Number(num);

while (num === '' || n <= 20 || n >= 100) {
  num = prompt('Enter a number between 20 and 100: ');
}

import { add } from './addLongs';

const factorial = (n: number): number => {
  let fact: any = 1;

  for (let i = 2; i <= n; i++) {
    if (Number.isSafeInteger(fact * i)) {
      fact = fact * i;
    } else {
      //fact = fact + fact + .. i times
      let factxi = '0'; // this is (fact * i) for us.
      for (let j = 0; j < i; j++) {
        factxi = add(factxi, fact.toString());
      }
      fact = factxi; // update value of fact before continuing the loop.
    }
  }
  return fact;
};
console.log(`factorial ${n} is : `);
console.log(factorial(n));
