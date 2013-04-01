var compareSlope = require("../slope.js")

require("tap").test("compare-slope", function(t) {

  var pts = []
  for(var a=0.0; a<2.0*Math.PI; a+=0.1) {
    pts.push([Math.cos(a), Math.sin(a)])
  }
  
  console.log(pts)
  pts.sort(compareSlope)
  console.log(pts)

  t.end()
})