let x = [0.4, 1.6, 2.4, 3.5];
let y = [2.50, 0.63, 0.42, 0.29];

const derajat = 3, fx = 2.8;
let yp = 0;

for (let i = 0; i <= derajat; i++) {
   let p = 1;
   for (let j = 0; j <= derajat; j++) {
      if(i != j) {
         p = p * (fx - x[j]) / (x[i] - x[j]);
      }
   }
   yp = yp + p * y[i];
}

console.log(`x : ${x}`);
console.log(`y : ${y}`);
console.log(`derajat : ${derajat}\n`);
console.log(`f(${fx}) = ${yp}`);