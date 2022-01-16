function f(x) {
   return Math.pow(Math.E, 4*x) + 5 * Math.pow(x, 3) - 10
}
let galat = 0.01
let index = 0
let hasil
let a = 0
let b = 1
let c
while( true ) {
   console.log(`iterasi ke ${index}`)
   console.log(`a = ${a}`)
   console.log(`b = ${b}`)
   c = (a + b) / 2
   console.log(`c = ${c}`)
   console.log(`f(a) = ${parseFloat(f(a).toFixed(5))}`)
   console.log(`f(b) = ${parseFloat(f(b).toFixed(5))}`)
   console.log(`f(c) = ${parseFloat(f(c).toFixed(5))}`)
   hasil = f(a) * f(c)
   console.log(`f(a).f(c) = ${hasil}`)
   console.log(`error = ${Math.abs(b - c)}`)
   // cek proses berhenti selang baru
   if( Math.abs(b - c) > galat ) {
      if( hasil > 0 ) {          // jika f(a).f(c) > 0
         a = c
         b = b
         console.log(`selang baru = [c,b]`)
      } else if( hasil < 0 ) {   // jika f(a).f(c) < 0
         a = a
         b = c
         console.log(`selang baru = [a,c]`)
      } else if( hasil == 0 ) {
         break; // keluar dari perulangan
      }
   } else if( Math.abs(b - c) < galat ) {
      break;   // keluar dari perulangan
   }
   console.log("\n")
   index++
}