const result = fizzBuzz(15)

function fizzBuzz(input){
  if  (typeof input !== "number"){
    return ("It's not a number")
  }
  if (input % 3 === 0 && input % 5 === 0){
    return ("FizzBuzz")
  }
  if (input % 3 === 0){
    return ("Fizz")
  } 
  if (input % 5 === 0){
    return ("Buzz")
  } 
  return (input);
}

console.log(result)