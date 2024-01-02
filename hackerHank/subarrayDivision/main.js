function birthday(s, d, m) {
  // Write your code here
  let matches = 0;
  for (let i = 0; i < s.length; i++) {
    const subArr = s.slice(i, i + m);
    const sum = subArr.reduce((a, b) => a + b, 0);

    if (sum === d) matches++;
  }
  return matches;
}
