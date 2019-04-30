// first create class Robot, just in case if user doesn't want the default 0 0 NORTH is added by default
// user can change it through class method CHANGE 
class Robot {
  constructor(posX = 0, posY = 0, direction = 'NORTH') {
    this.positionX = posX;
    this.positionY = posY;
    this.direction = direction;
    //this is available condition of the facing robot, because of each robot can only change direction into 90 degree
    this.availableDirection = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    //there's a rule that robot can ignore if haven't been place
    this.placeStatus = false;
  }
  //create functional place
  PLACE(positionX, positionY, direction) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.direction = direction;
    this.placeStatus = true;
  }
  //then create the functional movement
  MOVE() {
    if(this.placeStatus === false) {
      console.log('please place it first, before move')
    } else {
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
  }
  //the robot can only move right and left so i create 2 object methods of LEFT and RIGHT
  LEFT() {
    if(this.placeStatus === false) {
      console.log('please place it first, before turn left')
    } else {
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
  }
  RIGHT() {
    if(this.placeStatus === false) {
      console.log('please place it first, before turn right') 
    } else {
      //similiar to the LEFT, the RIGHT have a special condition on the 3rd index
      if(this.availableDirection.indexOf(this.direction) === 3) {
        this.direction = 'NORTH';
      } else {
        //else should just return the available direction plus by 1 for the current direction
        this.direction = this.availableDirection[this.availableDirection.indexOf(this.direction) + 1]
      }
    }
  }
  //then check for the current location
  REPORT() {
    if(this.placeStatus === false) {
      console.log('please place it first, before report')
    } else {
      console.log(this.positionX, this.positionY, this.direction)
    }
  }
  SHOW_IN_2D() {
    if(this.placeStatus === false) {
      console.log('please place it first, before show in 2D') 
    } else {
      let paint = '';
      for(let i = 0; i < 5; i++) {
        paint += ' ---------------\n';
        paint += `${(i+1)}`
        for(let j = 0; j < 5; j++) {
          if(5 - i !== this.positionX || j + 1 !== this.positionY){
            paint += '| |';
          } else {
            paint += '|R|';
          }
        }
        paint += '\n';
      }
      paint += ' ---------------\n';
      for(let i = 0; i < 5; i++) {
        paint += `  ${i+1}`
      }
      console.log(paint);
    }
  }
}

/////////////////////////////
/////////////////////////////
//////    TESTING      //////
/////////////////////////////
/////////////////////////////

console.log('default testing');
console.log('---------------');
//test A
const RobotA = new Robot();
RobotA.PLACE(0, 0, 'NORTH');
RobotA.MOVE();
console.log('Robot A Report');
RobotA.REPORT();
//test B
const RobotB = new Robot();
RobotB.PLACE(0, 0, 'NORTH');
RobotB.LEFT();
console.log('Robot B Report');
RobotB.REPORT();
//test C
const RobotC = new Robot();
RobotC.PLACE(1, 2, 'EAST');
RobotC.MOVE();
RobotC.MOVE();
RobotC.LEFT();
RobotC.MOVE();
console.log('Robot C Report');
RobotC.REPORT();

console.log('                  ');
console.log('example for create location in 2D');
RobotC.SHOW_IN_2D();

console.log('                  ');
console.log('warning testing');
console.log('---------------');
const RobotTest = new Robot();
//test if not place robot try to move, should return warning
RobotTest.MOVE();
//test if not place robot try to turn left or fight, should return warning
RobotTest.LEFT();
RobotTest.RIGHT();
//test if not place robot try to get a report
RobotTest.REPORT();
//test if not place try to show in 2D
RobotTest.SHOW_IN_2D();