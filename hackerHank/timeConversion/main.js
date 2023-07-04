let s = "02:01:00PM";

function timeConversion(s) {
  let lastTwo = s.substring(8);
  let fullTime = s.substring(0, 8);
  let times = fullTime.split(":");

  if (lastTwo === "PM") {
    if (times[0] !== "12") {
      times[0] = parseInt(times[0]) + 12;
    }
  } else {
    // AM case
    if (times[0] === "12") {
      times[0] = "00";
    }
  }

  console.log(times.join(":"));
}

timeConversion(s);
