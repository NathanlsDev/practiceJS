function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCount = 0;
  let orangesCount = 0;

  const appleDropped = (apple) => {
    const appleInHouseArea = apple + a >= s && apple + a <= t;
    if (appleInHouseArea) applesCount++;
  };

  const orangeDropped = (orange) => {
    const orangeInHouseArea = orange + b <= t && orange + b >= s;
    if (orangeInHouseArea) orangesCount++;
  };

  apples.forEach(appleDropped);
  oranges.forEach(orangeDropped);

  console.log(applesCount);
  console.log(orangesCount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
