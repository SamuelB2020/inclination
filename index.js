module.exports = class Angle{
    constructor (angle){
        if(typeof angle == "string"){
            angle = stringDef(angle);
        }
        else{
        angle = parseFloat(angle);
        }   
        this.degrees = angle;
        this.radians = angle*(Math.PI/180);
        this.turns = angle/360;
        this.gons = angle*(10/9);
    }
    principleAngle(){
        var temp = this.degrees;
        while(temp > 180 || temp < -180){
            if(temp > 180){
                temp -= 360;
            }
            else{
                temp += 360;
            }
        }
        return new Angle(temp);
        
    }
    Normalize(){
        var temp = this.degrees;
        while(temp < 0 || temp > 360){
            if(temp > 360){
                temp -= 360;
            }
            else{
                temp += 360;
            }
        }
        return new Angle(temp);
    }
    cos(){
        return Math.cos(this.radians);
    }
    sin(){
        return Math.sin(this.radians);
    }
    tan(){
        return Math.tan(this.radians);
    }
    quadrant(){
        var Normalized = this.Normalize().degrees;
        if(Normalized%90 == 0){
            return -1;
        }
        else if(Normalized > 0 && Normalized < 90){
            return 1;
        }
        else if(Normalized > 90 && Normalized < 180){
            return 2;
        }
        else if(Normalized > 180 && Normalized < 270){
            return 3;
        }
        else {          
            return 4;
        }
    }
    cardinalDirection(){
        switch (this.Normalize().degrees) {
            case 0:
                return "N";
            case 360:
                return "N";
            case 90:
                 return "E";     
            case 180:
                return "S";
             case 270:
                return "W"
            default:
                return -1;
        }
    }
    IntercardinalDirection(){
        switch (this.Normalize().degrees) {
            case 0:
                return "N";
            case 360:
                return "N";
            case 45:
                return "NE"
            case 90:
                 return "E"; 
            case 135:
                return "SE";
            case 180:
                return "S";
            case 225: 
                return "SW";
            case 270:
                return "W";
            case 315:
                return "NW";
            default:
                return -1;
        }
    }
    between(a,b){
        var normalA = a.Normalize();
        var normalB = b.Normalize();
        return this.degrees >= Math.min(normalA.degrees,normalB.degrees) && this.degrees <=Math.max(normalA.degrees, normalB.degrees);
    }
    fromXY(x,y){
        this.radians = Math.atan(y/x);
        this.degrees = this.radians*(180/Math.PI);
        this.turns = this.degrees/360;
        this.gons = this.degrees*(10/9);
        return this;
    }
}
function stringDef(string){
    if(string.indexOf('d') != -1){
        return parseFloat(string.split('d')[0]);
    }
    else if(string.indexOf('r') != -1){
        var rad = parseFloat(string.split('r')[0]);
        return rad*(180/Math.PI);
    }
    else if(string.indexOf("t") != -1){    
        return parseFloat(string.split("t")[0])*360;
    }
    else if(string.indexOf("g") != -1){
        return parseFloat(string.split("g")[0])*(9/10);
    }
    else{
        return 0;
    }
}