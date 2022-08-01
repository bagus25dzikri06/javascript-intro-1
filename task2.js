const isNumber = (currentValue) => typeof currentValue === 'number' === true
const batasMinimum = (element) => element < 0
const batasMaksimum = (element) => element > 100
let totalNilai = 0

const nilaiRataRataUN = (dataNilai) => {
  try {
    if (typeof dataNilai === 'object' === false) throw 'Input data nilai harus berupa array'
    if (dataNilai.every(isNumber) === false) throw 'Input setiap data nilai harus berupa angka'
    if (dataNilai.length < 4) throw 'Input setiap data nilai harus berjumlah 4'
    if (dataNilai.length > 4) throw 'Input setiap data nilai cukup berjumlah 4'
    if (dataNilai.some(batasMinimum) === true && dataNilai.some(batasMaksimum) === true) throw 'Input nilai tidak valid'

    for (let i = 0; i < dataNilai.length; i++) {
      totalNilai += dataNilai[i]
    }

    rataRataNilai = totalNilai / dataNilai.length

    if (rataRataNilai >= 90 && rataRataNilai <= 100) {
      return 'Nilai UN total: A'
    } else if (rataRataNilai >= 80 && rataRataNilai < 90) {
      return 'Nilai UN total: B'
    } else if (rataRataNilai >= 70 && rataRataNilai < 80) {
      return 'Nilai UN total: C'
    } else if (rataRataNilai >= 60 && rataRataNilai < 70) {
      return 'Nilai UN total: D'
    } else if (rataRataNilai >= 0 && rataRataNilai < 60) {
      return 'Nilai UN total: E'
    }
  } catch (err) {
    return err
  }
}

console.log(nilaiRataRataUN([78, 90, 89, 87]))
console.log(nilaiRataRataUN([80, 85, 90, 100, 75]))
console.log(nilaiRataRataUN([65, 98]))
console.log(nilaiRataRataUN([85, 91, -64, 78, 70]))
console.log(nilaiRataRataUN([76, 'enam', 594, 85]))
console.log(nilaiRataRataUN(89))