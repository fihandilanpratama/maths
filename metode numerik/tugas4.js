// set nilai awal dan variabel yang dibutuhkan
let x = 0, y = 1, z = 2, index = 0, episilon = 0.00001;
let xx, yy, zz, galatX, galatY, galatZ;

function nilaiX(y, z) {
   return (3.23 + 0.1*y - 2*z) / 0.3;
}
function nilaiY(x, z) {
   return (-4.3 + 0.3*x - 9*z) / 2; 
}
function nilaiZ(x, y) {
   return (18.4 - 0.4*x + 0.1*y) / 23;
}

while( true ) {
   console.log(`iterasi ke-${index}`)
   console.log(`x = ${x}`);
   console.log(`y = ${y}`);
   console.log(`z = ${z}`);
   xx = parseFloat(nilaiX(y, z).toFixed(5));
   yy = parseFloat(nilaiY(x, z).toFixed(5));
   zz = parseFloat(nilaiZ(x, y).toFixed(5));
   console.log(`x[${index+1}] = ${xx}`);
   console.log(`y[${index+1}] = ${yy}`);
   console.log(`z[${index+1}] = ${zz}`);

   // galat relatif
   galatX = parseFloat(Math.abs((xx - x) / xx).toFixed(7));
   galatY = parseFloat(Math.abs((yy - y) / yy).toFixed(7));
   galatZ = parseFloat(Math.abs((zz - z) / zz).toFixed(7));
   console.log(`galat x = ${galatX}`);
   console.log(`galat y = ${galatY}`);
   console.log(`galat z = ${galatZ}`);

   if( galatX < episilon && galatY < episilon && galatZ < episilon ) {
      break;
   }
   x = xx;
   y = yy;
   z = zz;
   index++;
   console.log('');
}

