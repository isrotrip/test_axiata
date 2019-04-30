// first create class Robot, just in case if user doesn't want the default 0 0 NORTH is added by default
// user can change it through class method CHANGE 
class Robot {
  constructor(posX = 0, posY = 0, direction = 'NORTH') {
    this.positionX = posX;
    this.positionY = posY;
    this.direction = direction;
    //this is available condition of the facing robot, because of each robot can only change direction into 90 degree
    this.availableDirection = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
  }
  //create functional place
  PLACE(positionX, positionY, direction) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.direction = direction;
  }
  //then create the functional movement
  MOVE() {
    //the maximum table is 5 and the minimum table is 0, so there must be a constrain movement function
    if(this.direction === 'NORTH') {
      if(this.positionY < 5) {
        this.positionY += 1;
      }
    } else if (this.direction === 'SOUTH') {
      if(this.positionY > 1) {
        this.positionY -= 1;
      }
    } else if (this.direction === 'WEST') {
      if(this.positionX > 1) {
        this.positionX -= 1;
      }
    } else {
      if(this.positionX < 5 ) {
        this.positionX += 1;
      }
    }
  }
  //the robot can only move right and left so i create 2 object methods of LEFT and RIGHT
  LEFT() {
    //we can use available function for the more easy syntax, and check with the index current position
    //the availableDirection create use the basic of clockwise
    //in the left 0 is minimum so we should make special condition, that will turn into 'WEST'
    if(this.availableDirection.indexOf(this.direction) === 0) {
      this.direction = 'WEST';
    } else {
      //else should just return the available direction minus by 1 for the current direction
      this.direction = this.availableDirection[this.availableDirection.indexOf(this.direction) - 1]
    }
  }
  RIGHT() {
    //similiar to the LEFT, the RIGHT have a special condition on the 3rd index
    if(this.availableDirection.indexOf(this.direction) === 3) {
      this.direction = 'NORTH';
    } else {
      //else should just return the available direction plus by 1 for the current direction
      this.direction = this.availableDirection[this.availableDirection.indexOf(this.direction) + 1]
    }
  }
  //then check for the current location
  REPORT() {
    console.log(this.positionX, this.positionY, this.direction)
  }
}

//test A
const RobotA = new Robot()
RobotA.PLACE(0, 0, 'NORTH');
RobotA.MOVE();
console.log('Robot A Report');
RobotA.REPORT();
//test B
const RobotB = new Robot()
RobotB.PLACE(0, 0, 'NORTH');
RobotB.LEFT();
console.log('Robot B Report');
RobotB.REPORT();
//test C
const RobotC = new Robot()
RobotC.PLACE(1, 2, 'EAST');
RobotC.MOVE();
RobotC.MOVE();
RobotC.LEFT();
RobotC.MOVE();
console.log('Robot C Report');
RobotC.REPORT();

// we can test it by type node to test it out!