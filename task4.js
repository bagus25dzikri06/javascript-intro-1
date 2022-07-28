let data = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496'
    }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org'
}

//a. Spread operator to change the name and the email and add the hobbies 
let newData = {
  ...data,
  name: 'Bagus Dzikri Hidayat',
  email: 'bagusdzikri@gmail.com',
  hobby: ['reading', 'listening to the music', 'browsing']
}

console.log(newData)

//b, Destructuring the street and the city from the user's address
const { street, city } = newData.address

console.log(street + ', ' + city)