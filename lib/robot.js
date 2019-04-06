class Robot {
  //your solution here

  constructor(coordinates = [0, 0], bearing = "north") {
    this.bearings = ["north", "east", "south", "west"];
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(b) {
    if (this.bearings.find(e => e === b)) {
      this.bearing = b;
    } else {
      throw "Invalid Robot Bearing";
    }
  }
  place(placement) {
    this.coordinates = [placement.x, placement.y];
    this.bearing = placement.direction;
  }
  turnRight() {
    this.turn(true);
  }
  turnLeft() {
    this.turn(false);
  }
  turn(right) {
    let currentOrient = this.bearings.indexOf(this.bearing);
    if (right) {
      currentOrient++;
      if (currentOrient === 4) currentOrient = 0;
    } else {
      currentOrient--;
      if (currentOrient === -1) currentOrient = 3;
    }
    this.bearing = this.bearings[currentOrient];
  }
  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1]++;
        break;
      case "south":
        this.coordinates[1]--;
        break;
      case "east":
        this.coordinates[0]++;
        break;
      case "west":
        this.coordinates[0]--;
        break;
      default:
        break;
    }
  }

  translateInstructions(command) {
    for (let i = 0; i < command.length; i++) {
      if (command.charAt(i) === "R") this.turnRight();
      else if (command.charAt(i) === "L") this.turnLeft();
      else if (command.charAt(i) === "A") this.advance();
    }
  }
}
