const Angle = require("../index.js")

test('Correct Declaration', () => {
    var angleR = new Angle(Math.PI/2+"r")
    var angleG = new Angle("200g")
    var angleT = new Angle("1t")
    var angleD = new Angle(90);
    var angleNAN = new Angle("NOT A CORRECT DEFINITION")
    expect(angleR.radians).toBe(Math.PI/2);
    expect(angleG.gons).toBe(200);
    expect(angleT.turns).toBe(1);
    expect(angleD.degrees).toBe(90);
    expect(angleNAN.degrees).toBe(0);
  });


test('Correct Conversion - Degrees', () => {
    for(var i = 0; i<= 360; i++){
        expect(new Angle(i+"d").degrees).toBe(i);
    } 
  });
test('Correct Conversion - Radians', () => {
    for(var i = 0; i<= 360; i++){
        expect(new Angle(i+"d").radians).toBe(i*(Math.PI/180));
    }
  });

  test('Correct Conversion - Turns', () => {
    for(var i = 0; i <= 360; i++){
        expect(((new Angle(i+"d").turns).toFixed(13))).toBe((i*(1/360)).toFixed(13));
    }
  });

  test('Correct Conversion - Gradians', () => {
    for(var i = 0; i <= 360; i++){
        expect(((new Angle(i+"d").gons).toFixed(13))).toBe((i*(10/9)).toFixed(13));
    }
   
  });

  test('Principle Angle', () => {
    for(var i = 0; i <= 360; i++){
        if(i <= 180){
            expect(new Angle(i).principleAngle().degrees).toBe(i);
        }
        else{
         expect(new Angle(i).principleAngle().degrees).toBe(i-360); 
        }
    }
    for(var i = -360; i < -180; i++){
         expect(new Angle(i).principleAngle().degrees).toBe(i+360); 
    }
  });


  test('Normal Angle', () => {
    for(var i = 361; i < 720; i++){
        expect(new Angle(i).Normalize().degrees).toBe(i-360);
    }
    for(var i = -360; i < 0; i++){
        expect(new Angle(i).Normalize().degrees).toBe(i+360);
    }
  });


  test('Sine', () => {
    for(var i = 0; i <= 360; i++){
        expect(new Angle(i).sin()).toBe(Math.sin(i*(Math.PI/180)));
    }
  });


  test('Cosine', () => {
    for(var i = 0; i < 360; i++){
        expect(new Angle(i).cos()).toBe(Math.cos(i*(Math.PI/180)));
    }
  });

  test('Tangent', () => {
    for(var i = 0; i < 360; i++){
        expect(new Angle(i).tan()).toBe(Math.tan(i*(Math.PI/180)));
    }
  });


  test('Quadrant', () => {
    for(var i = 0; i <= 360; i++){
        if(i%90 == 0){
            expect(new Angle(i).quadrant()).toBe(-1)
        }
        if(i > 0 && i < 90){
            expect(new Angle(i).quadrant()).toBe(1);
        }
        if(i > 90 && i < 180){
            expect(new Angle(i).quadrant()).toBe(2);
        }
        if(i > 180 && i < 270){
            expect(new Angle(i).quadrant()).toBe(3)
        }
        if(i > 270 && i < 360){
            expect(new Angle(i).quadrant()).toBe(4)
        }
    }
  });

  test('Cardinal', () => {
    for(var i = 0; i <= 360; i++){
        if(i%90 == 0){
            expect(new Angle(i).cardinalDirection()).not.toBe(-1);
        }
        else{
            expect(new Angle(i).cardinalDirection()).toBe(-1); 
        }
    }
  });

  test('Intercardinal', () => {
    for(var i = 0; i <= 360; i++){
        if(i%45 == 0){
            expect(new Angle(i).IntercardinalDirection()).not.toBe(-1);
        }
        else{
            expect(new Angle(i).IntercardinalDirection()).toBe(-1); 
        }
    }
  });
  test('Between', () => {
    expect(new Angle(56).between(new Angle(40), new Angle(90))).toBe(true);
    expect(new Angle(56).between(new Angle(80), new Angle(90))).toBe(false);

  });



