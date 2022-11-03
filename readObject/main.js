const person = {
  name: 'Derpson',
  age: 45,
  born: 1977,
  lastName: 'Derp',
  country: 'Vanuatu'
}

function filterString (obj){
  for (key in obj){
    if (typeof obj[key] === "string"){
      console.log(key, obj[key])
    }
  }
}

filterString(person)