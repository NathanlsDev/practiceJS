//pascal case
function Cell (brand, screenSize, battery){
  this.brand = brand,
  this.screen = screenSize,
  this.battery = battery,
  this.call = function () {
    console.log(`Calling...`)
  }
}

const cellPhone = new Cell('Motorola', 7.6, 4500)

console.log(cellPhone)