function f(x) {
   return Math.pow(Math.E, 4*x) + 5 * Math.pow(x, 3) - 10
}
function f_aksen(x) {
   return 4*Math.pow(Math.E, 4*x) + 15 * Math.pow(x, 2)
}

let index = 0, ta = 1.2, episilon = 0.01, hasil

while( true ) {
   console.log(`iterasi ke-${index}`)
   console.log(`x[${index}] = ${ta}`)
   console.log(`f(x[${index}]) = ${parseFloat(f(ta).toFixed(6))}`)
   console.log(`f'(x[${index}]) = ${parseFloat(f_aksen(ta).toFixed(6))}`)

   let xPlus1 = parseFloat((ta - (f(ta) / f_aksen(ta))).toFixed(6))
   console.log(`x[${index+1}] = x[${index}] - f(x[${index}]) / f'(x[${index}]) = ${xPlus1}`)

   hasil = Math.abs(parseFloat((xPlus1 - ta).toFixed(6)))
   console.log(`|E| = |${xPlus1.toFixed(6)} - ${ta.toFixed(6)}| = ${hasil}`)

   let string = 'Galat relatif hampiran'
   console.log(`${string} = ${Math.abs(parseFloat((hasil / xPlus1) * 100).toFixed(4))}%`)

   if( hasil > episilon ) {
      ta = xPlus1
      index++
      console.log('')
   } else break
}