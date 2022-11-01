function speedCheck (speed){
  const maxSpeed = 70
  const overMaxSpeed = 5
  const pointLimit = 12

  if (speed <= maxSpeed){
    console.log(`Ok`)
  } else {
    const points = Math.floor((speed - maxSpeed) / overMaxSpeed)

    if (points >= pointLimit){
      console.log(`Suspended cart ${points}`)
    } else {
      console.log(`Points: ${points}`)
    }
  }
}

speedCheck(95)