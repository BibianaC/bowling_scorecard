var Scorecard = function() {
  this.score = 0;
  this.player = 1;
  this.frames = [];
};

Scorecard.prototype.addFrame = function() {
  frame = new Frame;
  this.frames.push(frame);
};
