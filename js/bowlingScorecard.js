var Scorecard = function() {
  this.score = 0;
  this.player = 1;
  this.frames = 10;
  this.pins = 10;
};

Scorecard.prototype.knocksPins = function(knocksBy) {
  this.pins -= knocksBy;

  if(knocksBy > 10){
    this.pins = this.pins - knocksBy
    return "You cannot knock more than 10 pins"
  }
};