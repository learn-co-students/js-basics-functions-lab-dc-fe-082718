// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  return Math.abs(42 - blockNumber);
}

function distanceFromHqInFeet(blockNumber) {
  numberOfBlocks = distanceFromHqInBlocks(blockNumber);
  return numberOfBlocks * 264;
}

function distanceTravelledInFeet(start, end) {
  numberOfBlocks = Math.abs(end - start);
  return numberOfBlocks* 264;
}

function calculatesFarePrice(start,destination) {
  feet = distanceTravelledInFeet(start, destination) 
  if(feet < 400) {
    return 0;
  } else if (feet >= 400 && feet < 2000) {
    return (feet - 400) * .02;
  } else if(feet > 2000 && feet <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far'
  }
}