"use strict"

function quadrant(x, y) {
  if(x > 0) {
    if(y >= 0) {
      return 1
    } else {
      return 4
    }
  } else if(x < 0) {
    if(y >= 0) {
      return 2
    } else {
      return 3
    }
  } else if(y > 0) {
    return 1
  } else if(y < 0) {
    return 3
  }
  return 0
}

function compareSlope(a, b) {
  var ax = a[0]
    , ay = a[1]
    , bx = b[0]
    , by = b[1]
    , d = quadrant(ax, ay) - quadrant(bx, by)
  if(d) {
    return d
  }
  var p = ax * by
    , q = ay * bx
  if(p > q) { return -1 }
  if(p < q) { return  1 }
  return 0
}

module.exports = compareSlope