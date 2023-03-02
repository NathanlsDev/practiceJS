const arr = [-4, 3, -9, 0, 4, 1];

function fraction(arr) {
  let positives = 0;
  let negatives = 0;
  let neutral = 0;

  arr.forEach((number) => {
    if (number > 0) {
      positives++;
    }
    if (number < 0) {
      negatives++;
    }
    if (number === 0) {
      neutral++;
    }
  });

  const pos = (positives / arr.length).toFixed(6);
  const neg = (negatives / arr.length).toFixed(6);
  const neut = (neutral / arr.length).toFixed(6);

  console.log(`${pos}\n${neg}\n${neut}`);
}

fraction(arr);
