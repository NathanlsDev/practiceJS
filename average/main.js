/*
 * 0-59: F
 * 60-69: D
 * 70-79: C
 * 80-89: B
 * 90-100: A
 */
const average = [70,70,80];

function calcAverage(grades){
  const total = grades.reduce((prev, current) => (prev + current))
  const media = (total / grades.length).toFixed(2)
  
  if (media <= 59) return 'F';
  if (media <= 69) return 'D';
  if (media <= 79) return 'C';
  if (media <= 89) return 'B';
  return 'A';
  
}
console.log(calcAverage(average))