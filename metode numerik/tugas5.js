function checkDes(x) {
   x = x.toString();
   x = x.split('.');    // x[0] : angka sebelum koma, x[1] : angka sesudah koma
   let a;
   // inputan = bilangan bulat, maka return nilai tersebut
   if( x.length == 1 ) {
      return x[0];
   } 
   // inputan terdapat lebih dari 6 angka di belakang koma, ambil 6 angka saja
   else if( x[1].length > 6 ) {
      // console.log(x[1]);
      a = x[0];
      a += '.';
      a += x[1];
      a = parseFloat(a);
      return a.toFixed(6);
   } 
   // terdapat tidak lebih dari 6 angka di belakang koma, maka return nilai tersebut.
   else {
      a = x[0];
      a += '.';
      a += x[1];
      a = parseFloat(a);
      return a;
   }
}

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
   console.log(`x = ${checkDes(x)}`);
   console.log(`y = ${checkDes(y)}`);
   console.log(`z = ${checkDes(z)}`);

   xx = nilaiX(y, z);
   let x_i = nilaiX(y, z);
   yy = nilaiY(x_i, z);
   let y_i = nilaiY(x_i, z);
   zz = nilaiZ(x_i, y_i);

   console.log(`x[${index+1}] = ${checkDes(xx)}`);
   console.log(`y[${index+1}] = ${checkDes(yy)}`);
   console.log(`z[${index+1}] = ${checkDes(zz)}`);

   // galat relatif
   galatX = Math.abs((xx - x) / xx);
   galatY = Math.abs((yy - y) / yy);
   galatZ = Math.abs((zz - z) / zz);
   console.log(`galat x = |(${checkDes(xx)} - ${checkDes(x)}) / ${checkDes(xx)}| = ${checkDes(galatX)}`);
   console.log(`galat y = |(${checkDes(yy)} - ${checkDes(y)}) / ${checkDes(yy)}| = ${checkDes(galatY)}`);
   console.log(`galat z = |(${checkDes(zz)} - ${checkDes(z)}) / ${checkDes(zz)}| = ${checkDes(galatZ)}`);

   if( galatX < episilon && galatY < episilon && galatZ < episilon ) {
      break;
   }
   x = xx;
   y = yy;
   z = zz;

   x_i = 0;
   y_i = 0;
   index++;
   console.log('');
}