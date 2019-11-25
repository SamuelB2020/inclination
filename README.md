# inclination
A library for working with angles.

## Usage
### Basic Usage <br>
```javascript
const Angle = require('../index');
var angleA = new Angle("90d");
console.log(angleA.degrees);
// 90
console.log(angleA.radians);
// 1.5707963267948966
```

### Defining an Angle

By default an angle is defined in degrees for example the below code defines an angle of 70&deg; <br>
```javascript
var angleABC = new Angle(70);
```
<br>
Angles can be defined though as a string with a letter denoting their units.<br>

<b>Degrees</b><br>
```javascript
var angleABC = new Angle("70d");
```
<b>Radians</b><br>
```javascript
var angleABC = new Angle("3r");
```

Note.
Exact values with radians can be achieved with the following<br>
```javascript
var exact = Math.PI/2;
var angleABC = new Angle(exact+"r");
```

<b>Turns</b><br>
```javascript
var angleABC = new Angle("0.5t");
```

<b>Gons/Gradians</b><br>
```javascript
var angleABC = new Angle("300g");
```

## Properties

### Angle.degrees
Returns the angle in degrees
```javascript
var angleBCA = new Angle("30d");
console.log(angleBCA.degrees);
// 30
```
### Angle.radians
Returns the angle in radians
```javascript
var angleBCA = new Angle("30d");
console.log(angleBCA.radians);
// 0.5235987755982988
```
### Angle.turns
Returns the angle in turns
```javascript
var angleBCA = new Angle("30d");
console.log(angleBCA.turns);
// 0.08333333333333333
```
### Angle.gons
Returns the angle in gons/gradians
```javascript
var angleBCA = new Angle("30d");
console.log(angleBCA.gons);
// 33.33333333333333
```


## Functions

### Angle.principleAngle()

Returns a new angle within the bounds -180&deg; to 180&deg; (-&#960; to &#960;).
```javascript
var angleBCA = new Angle("200d");
var angleBCAPrinciple = angleBCA.principleAngle();
console.log(angleBCAPrinciple.degrees)
// -160
``` 
### Angle.Normalize()

Returns a new angle within the bounds 0&deg; to 360&deg; (0 to 2&#960;).

```javascript
var angleBCA = new Angle("400d");
var angleBCAPrinciple = angleBCA.Normalize();
console.log(angleBCAPrinciple.degrees)
// 40
``` 

### Angle.sin()

Returns the sine of the angle.

```javascript
var angleBCA = new Angle("90d");
console.log(angleBCA.sin())
// 1
```


### Angle.cos()

Returns the cosine of the angle.

```javascript
var angleBCA = new Angle("180d");
console.log(angleBCA.cos())
// -1
```


### Angle.tan()

Returns the tangent of the angle.

```javascript
var angleBCA = new Angle("0d");
console.log(angleBCA.tan())
// 0
```

### Angle.quadrant()

Returns the quadrant number of the angle. If the angle is a boundary angle e.g. 90&deg;, -1 will be returned.

```javascript
var angleBCA = new Angle("45d");
console.log(angleBCA.quadrant())
// 1
```

### Angle.cardinalDirection()

Returns the cardinal direction (N, S, E, W) of an angle. If the angle is not a cardinal direction -1 will be returned. 

```javascript
var angleBCA = new Angle("0d");
console.log(angleBCA.cardinalDirection())
// N
```

### Angle.IntercardinalDirection()

Returns the Intercardinal direction (N, S, E, W, NE, NW, SE, SW) of an angle. If the angle is not a intercardinal direction -1 will be returned. 

```javascript
var angleBCA = new Angle("45d");
console.log(angleBCA.IntercardinalDirection())
// NE
```

### Angle.Between(a,b)

Returns a boolean if the angle lies between two other angles a and b. Note if the angles are equal it will return true.

```javascript
var angleBCA = new Angle("45d");
var angleABC = new Angle("0d");
var angleDCA = new Angle("90d")
console.log(angleBCA.between(angleABC,angleDCA))
// true
```


### Angle.fromXY(x,y)

Returns the angle formed by the right triangle with base x and height y

```javascript
var angleBCA = new Angle().fromXY(3,3)
console.log(angleBCA.degrees)
// 45
```

