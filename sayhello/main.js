const sayHello = (name) => {
  if (name /*!== undefined && name !== null*/){
    console.log(`Hello ${name}!`)
  } else {
    console.log(`Hello there!`)
  }
}

sayHello('Nathan')