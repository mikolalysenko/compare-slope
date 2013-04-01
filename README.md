compare-slope
=============
Ranks the slope of a pair of vectors through the origin in clockwise order.  This is more robust than comparing their arc tangents using atan2.

Use
===
First install using npm:

    npm install compare-slope
    
Then use as follows:

```javascript
var compareSlope = require("compare-slope")

console.log(compareSlope([0, 1], [1, 2]))
```

### `require("compare-slope")(a, b)`
Checks whether `a` comes before `b` in a counter-clockwise ordering.

* `a` and `b` are both represented by arrays of at least length 2

**Returns:**
* `> 0` if `b` is clockwise from `a`
* `< 0` if `a` is clockwise from `b`
* `0` if `a` and `b` are collinear

**Note:** Somewhat arbitrarily, the degenerate point at the origin is ranked before all other points.

Credits
=======

