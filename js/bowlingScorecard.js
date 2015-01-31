var Scorecard = function() {
  this.score = 0;
  this.player = 1;
  this.frames = [];
};

Scorecard.prototype.addFrame = function() {

  if ( this.frames.length >= 10) {
    return "Game is over"
  }

  else {
    frame = new Frame;
    this.frames.push(frame);
  }

};

Scorecard.prototype.nextFrame = function() {

  if (this.frames.length === 0) {
    this.addFrame();
  }
  else if (this.latestFrame().isFinish() === true) {
    this.addFrame();
  }
};

Scorecard.prototype.updateScore = function() {
  
  total = 0;
  for (i = 0; i < this.frames.length; i++) {
    total += this.calcFrameScore(i);
  }
  this.score = total;
  return this.score;
};

Scorecard.prototype.calcFrameScore = function(number) {
  frame = this.frames[number];
  if (frame.isSpare()) {
    return this.calcBonusSpare(number);
  }
  else if (frame.isStrike()) {
    return this.calcBonusStrike(number);
  }
  else {  
    return frame.calculateScore();
  }
};
  

Scorecard.prototype.calcBonusSpare = function(number) {
  if (number > this.frames.length-1) {
    return "not valid " + number + " " + this.frames.length;
  } 
  else {
    sum = this.frames[number].calculateScore();
    if (this.frames[number+1] !== undefined) {
      sum += this.frames[number+1].calculateScore();
    }
    return sum;
  }
};

Scorecard.prototype.calcBonusStrike = function(number) {
  if (number > this.frames.length-1) {
    return "not valid";
  } 
  else {
    sum = this.frames[number].calculateScore();
    if (this.frames[number+1] !== undefined) {
      sum += this.frames[number+1].calculateScore();
      if (this.frames[number+2] !== undefined) {
        sum += this.frames[number+2].calculateScore();
      }
    }
    return sum;
  }
};

Scorecard.prototype.isBonusSpare = function() {
  return this.latestFrame().isSpare() === true;
};

Scorecard.prototype.isBonusStrike = function() {
  return this.latestFrame().isStrike() === true;
};

Scorecard.prototype.latestFrame = function() {
  return this.frames[this.frames.length-1];
};
