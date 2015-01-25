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

Scorecard.prototype.updateScore = function() {
  total = 0;
  for (i = 0; i < this.frames.length; i++) {
    total += this.frames[i].calculateScore();
  }
  this.score = total;
};

Scorecard.prototype.nextFrame = function() {

  if (this.frames.length === 0) {
    this.addFrame();
  }
  else if (this.frames[this.frames.length-1].isFinish === true) {
    this.addFrame();
  }

};
