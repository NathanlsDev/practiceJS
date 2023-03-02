const stars = 6;

function constellation(stars) {
  let star = "#";
  let space = " ";

  for (let i = 1; i <= stars; i++) {
    console.log(`${space.repeat(stars - i)}${star.repeat(i)}`);
  }
}

constellation(stars);
