// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  if (street >= 42) {
    return street - 42
  } else {
    return 42 - street
  }
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(from, to) {
  const distance = from >= to ? from - to : to - from
  return distance * 264
}

function calculatesFarePrice(from, to) {
  
}