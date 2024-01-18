const printer = (lines) => {
  if (Number.isNaN(Number(lines))) {
    throw new Error("Invalid input");
  }
  
  const isANaturalNumber = lines >= 0 && Number.isInteger(lines);

  if (isANaturalNumber) {
    let line = "";
    for (i = 0; i < lines; i++) {
      line += " * |";
      console.log(line);
    }
    return;
  }
  return console.log(`The number needs to be an integer, and greater than or equal to 0`)
};
printer(5);

const draw = (n) => {
  if ((!n && n !== 0) || Number.isNaN(Number(n)) || !Number.isInteger(n)) {
    throw new Error("Invalid input");
  }
  return new Array(n)
    .fill("*")
    .map((item, index) => item.repeat(index + 1))
    .join("\n");
};
console.log(draw(5));
