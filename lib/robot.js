const directions = ["north", "east", "south", "west"];
class Robot {
	constructor(x = 0, y = 0, bearing = "north"){
    this.coordinates = [x, y]
    this.bearing = bearing;
  }

  setCoordinates(x, y){
    this.coordinates = [x, y];
  }

  setBearing(bearing){
    if(directions.includes(bearing)){
      this.bearing = bearing;
    }
    else{
      throw "Invalid Robot Bearing";
    }
  }

  place(location){
    this.coordinates = [location.x, location.y];
    this.setBearing(location.direction)
  }

  turnRight(){
    let indexOfBearing = directions.indexOf(this.bearing)
    if(indexOfBearing < 3){
      this.bearing = directions[indexOfBearing + 1];
    }
    else {
      this.bearing = directions[0];
    }
  }

  turnLeft(){
    let indexOfBearing = directions.indexOf(this.bearing)
    if(indexOfBearing > 0){
      this.bearing = directions[indexOfBearing - 1];
    }
    else {
      this.bearing = directions[3];
    }
  }

  advance(){
    if(this.bearing === "north"){
      this.coordinates[1] = this.coordinates[1] + 1;
    }
    else if (this.bearing === "south"){
      this.coordinates[1] = this.coordinates[1] - 1;
    }
    else if (this.bearing === "east"){
      this.coordinates[0] = this.coordinates[0] + 1;
    }
    else if (this.bearing === "west"){
      this.coordinates[0] = this.coordinates[0] - 1;
    }
  }

  translateInstructions(instructions){
    instructions.split("").forEach(instruction => {
      (instruction === "R" ? this.turnRight() : "");
      (instruction === "L" ? this.turnLeft()  : "");
      (instruction === "A" ? this.advance()   : "");
    }
  )
  }
}
