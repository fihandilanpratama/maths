let xi = [45, 47, 50, 52, 56];
let yi = [147, 149, 160, 159, 160];
let xi_2 = [];
let xiyi = [];

function get_xi_2(xi) {
   for (let i = 0; i < xi.length; i++) {
      xi_2.push(xi[i] ** 2);
   }
   return xi_2;
}

function get_xiyi(xi, yi) {
   for (let i = 0; i < xi.length; i++) {
      xiyi.push(xi[i] * yi[i]);
   }
   return xiyi;
}

function total(x) {
   return x.reduce((a, b) => a + b);
}

console.log(`xi : ${xi}`);
console.log(`total xi : ${total(xi)}\n`);

console.log(`yi : ${yi}`);
console.log(`total yi : ${total(yi)}\n`);

console.log(`xi_2 : ${get_xi_2(xi)}`);
console.log(`total xi_2 : ${total(xi_2)}\n`);

console.log(`xi.yi : ${get_xiyi(xi, yi)}`);
console.log(`total xi.yi : ${total(xiyi)}\n`);

console.log('--------------------------------------------');
const a = ( total(yi) * total(xi_2) - total(xi) * total(xiyi) ) / ( xi.length * total(xi_2) - (total(xi) ** 2));
console.log(`(${total(yi)})(${total(xi_2)}) - (${total(xi)})(${total(xiyi)})`);
console.log(`${xi.length}(${total(xi_2)}) - (${total(xi) ** 2})\n`);
console.log(`${total(yi) * total(xi_2)} - ${total(xi) * total(xiyi)}`);
console.log(`${xi.length * total(xi_2)} - ${total(xi) ** 2}\n`);
console.log(`${total(yi) * total(xi_2) - total(xi) * total(xiyi)}`);
console.log(`${xi.length * total(xi_2) - (total(xi) ** 2)}\n`);
console.log(`a = ${a}`);

console.log('--------------------------------------------');

const b = ( xi.length * total(xiyi) - total(xi) * total(yi) ) / ( xi.length * total(xi_2) - (total(xi) ** 2) );
console.log(`${xi.length}(${total(xiyi)}) - (${total(xi)})(${total(yi)})`);
console.log(`${xi.length}(${total(xi_2)}) - (${total(xi) ** 2})\n`);
console.log(`${xi.length * total(xiyi)} - ${total(xi) * total(yi)}`);
console.log(`${xi.length * total(xi_2)} - ${total(xi) ** 2}\n`);
console.log(`${xi.length * total(xiyi) - total(xi) * total(yi)}`);
console.log(`${xi.length * total(xi_2) - (total(xi) ** 2)}\n`);
console.log(`b = ${b}`);
console.log('--------------------------------------------');
