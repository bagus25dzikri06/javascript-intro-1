const printSegitiga = (sisi) => {
  try {
    if (typeof sisi === 'number' === false) throw 'Data harus number'

    let dataSisi = ''
    for (let i = sisi; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        dataSisi += `${j + 1} `
      }
      dataSisi += '\n'
    }
    return dataSisi
  } catch (err) {
    return err
  }
}

console.log(printSegitiga(5))
console.log(printSegitiga('enam'))