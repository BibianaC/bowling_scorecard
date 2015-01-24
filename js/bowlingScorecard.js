var Scorecard = function() {
  this.score = 0;
  this.player = 1;
  this.frames = [];
};

Scorecard.prototype.addFrame = function() {
  frame = new Frame;
  this.frames.push(frame);
};

Scorecard.prototype.updateScore = function() {
  total = 0;
  for (i = 0; i < this.frames.length; i++) {
    total += this.frames[i].calculateScore();
  }
  this.score = total;
};
