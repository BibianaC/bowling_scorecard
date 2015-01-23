var Scorecard = function() {
  this.score = 0;
  this.player = 1;
  this.frames = 10;
  this.pins = 10;
};

Scorecard.prototype.knocksPins = function(knocksBy) {
  this.pins -= knocksBy;
  this.score += knocksBy;
  this.frames -= 1;

  if(knocksBy > 10){
    this.pins = this.pins - knocksBy
    this.score = this.score - knocksBy
    return "You cannot knock more than 10 pins"
  }
};

Scorecard.prototype.resetPins =  function() {
  this.pins = 10;
};

Scorecard.prototype.strike =function() {
  this.pins = 0;
};