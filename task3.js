const printSegitiga = (sisi) => {
  if (typeof sisi === 'number' === true) {
    let dataSisi = ''
    for (let i = sisi; i >= 1; i--) {
      for (let j = 1; j <= sisi; j++) {
        dataSisi += j + ' '
      }
      dataSisi += '\n'
    }
    return dataSisi
  } else {
    return 'Data harus number'
  }
}

console.log(printSegitiga(5))
console.log(printSegitiga('enam'))