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
var exact = Math.PI/2;<br>
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

### Angle.radians
Returns the angle in radians
### Angle.turns
Returns the angle in turns
### Angle.gons
Returns the angle in gons/gradians



## Functions

### Angle.principleAngle()

Returns a new angle within the bounds -180&deg; to 180&deg; (-&#960; to &#960;).

### Angle.Normalize()

Returns a new angle within the bounds 0&deg; to 360&deg; (0 to 2&#960;).

### Angle.sin()

Returns the sine of the angle.

### Angle.cos()

Returns the cosine of the angle.

### Angle.tan()

Returns the tangent of the angle.

### Angle.quadrant()

Returns the quadrant number of the angle. If the angle is a boundary angle e.g. 90&deg;, -1 will be returned.

### Angle.cardinalDirection()

Returns the cardinal direction (N, S, E, W) of an angle. If the angle is not a cardinal direction -1 will be returned. 

### Angle.IntercardinalDirection()

Returns the Intercardinal direction (N, S, E, W, NE, NW, SE, SW) of an angle. If the angle is not a intercardinal direction -1 will be returned. 

### Angle.Between(a,b)

Returns a boolean if the angle lies between two other angles a and b. Note if the angles are equal it will return true.
