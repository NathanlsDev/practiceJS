function createPhone (brand, screen, battery){
  return {
    brand,
    screen,
    battery,
    call () {
      console.log(`Calling...`)
    }
  }  
}

const celPhone = createPhone('Samsung', 10.7, 5000)
console.log(celPhone)