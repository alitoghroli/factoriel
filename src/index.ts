let num: string = prompt('Enter a number between 20 and 100: ');

while (num === '' || Number(num) <= 20 || Number(num) >= 100) {
  num = prompt('Enter a number between 20 and 100: ');
}
let factoriel: number = 1;
for (let i = 1; i <= Number(num); i++) {
  factoriel *= i;
}

console.log(`factoriel ${Number(num)} is : `);
console.log(BigInt(factoriel));
