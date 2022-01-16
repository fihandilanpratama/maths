function checkDes(x) {
   x = x.toString();
   x = x.split('.'); 
   if( x.length == 1 ) {
      return x[0];
   } else if( x[1].length > 6 ) {
      a = x[0];
      a += '.';
      a += x[1];
      a = parseFloat(a);
      return a.toFixed(6);
   } else {
      a = x[0];
      a += '.';
      a += x[1];
      a = parseFloat(a);
      return a;
   }
}
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
   console.log(`x = ${checkDes(x)}`);
   console.log(`y = ${checkDes(y)}`);
   console.log(`z = ${checkDes(z)}`);

   xBaru = nilaiX(y, z);
   let x_i = nilaiX(y, z);
   yBaru = nilaiY(x_i, z);
   let y_i = nilaiY(x_i, z);
   zBaru = nilaiZ(x_i, y_i);

   console.log(`x[${index+1}] = ${checkDes(xBaru)}`);
   console.log(`y[${index+1}] = ${checkDes(yBaru)}`);
   console.log(`z[${index+1}] = ${checkDes(zBaru)}`);

   // galat relatif
   galatX = Math.abs((xBaru - x) / xBaru);
   galatY = Math.abs((yBaru - y) / yBaru);
   galatZ = Math.abs((zBaru - z) / zBaru);
   console.log(`galat x = ${checkDes(galatX)}`);
   console.log(`galat y = ${checkDes(galatY)}`);
   console.log(`galat z = ${checkDes(galatZ)}`);

   if( galatX < episilon && galatY < episilon && galatZ < episilon ) { break; }
   x = xBaru;
   y = yBaru;
   z = zBaru;
   index++;
   console.log('');
}