// set nilai awal dan variabel yang dibutuhkan
let x = 0.5, y = 0.5, z = 1, index = 0, episilon = 0.1;
let xBaru, yBaru, zBaru, galatX, galatY, galatZ;

function nilaiX(y, z) {
   return (3.13 - 0.3*y + 1.2*z) / 2.7;
}
function nilaiY(x, z) {
   return (-5.4 - 0.5*x - 3*z) / 4.2; 
}
function nilaiZ(x, y) {
   return (12.4 - 2.2*x - 0.5*y) / -17;
}

while( true ) {
   console.log(`iterasi ke-${index}`)
   console.log(`x = ${x}`);
   console.log(`y = ${y}`);
   console.log(`z = ${z}`);
   xBaru = parseFloat(nilaiX(y, z).toFixed(5));
   yBaru = parseFloat(nilaiY(x, z).toFixed(5));
   zBaru = parseFloat(nilaiZ(x, y).toFixed(5));
   console.log(`x[${index+1}] = ${xBaru}`);
   console.log(`y[${index+1}] = ${yBaru}`);
   console.log(`z[${index+1}] = ${zBaru}`);

   // galat relatif
   galatX = parseFloat(Math.abs((xBaru - x) / xBaru).toFixed(7));
   galatY = parseFloat(Math.abs((yBaru - y) / yBaru).toFixed(7));
   galatZ = parseFloat(Math.abs((zBaru - z) / zBaru).toFixed(7));
   console.log(`galat x = ${galatX}`);
   console.log(`galat y = ${galatY}`);
   console.log(`galat z = ${galatZ}`);

   if( galatX < episilon && galatY < episilon && galatZ < episilon ) {
      break;
   }
   x = xBaru;
   y = yBaru;
   z = zBaru;
   index++;
   console.log('');
}