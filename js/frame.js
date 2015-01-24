var Frame = function() {
  this.pins = 10;
  this.rolls = 2;
};

Frame.prototype.knocksPins = function(knocksBy) {
  this.pins -= knocksBy;

  if(knocksBy > 10){
    this.pins = this.pins - knocksBy;
    return "You cannot knock more than 10 pins";
  }
};

Frame.prototype.resetPins =  function() {
  this.pins = 10;
};

Frame.prototype.roll = function() {
  this.rolls -= 1;

  if(this.rolls < 0) {
    this.rolls = 0;
    return "You only have two rolls";
  }

};

Frame.prototype.resetRolls = function() {
  this.rolls = 2;
};