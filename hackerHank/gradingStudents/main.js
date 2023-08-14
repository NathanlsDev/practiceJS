/*
  Toda nota a baixo de 40 esta reprovado

  se a diferença da nota até o proximo múltiplo de cinco for menor que 3
  arredondar a nota para o proximo múltiplo de 5

  se a nota for menor que 38 não fazer nenhum arredondamento, e continua reprovado

  automatizar o processo de arredondamento de notas

*/

grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % 5 === 3) {
      grades[i] += 2;
    } else if (grades[i] >= 38 && grades[i] % 5 === 4) {
      grades[i] += 1;
    }
  }
  console.log(grades);
}

gradingStudents(grades);
