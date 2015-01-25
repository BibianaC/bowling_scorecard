var Frame = function() {
  this.pins = 10; // Standing pins.
  this.rolls = 2; // Rolls left.
};

Frame.prototype.knocksPins = function(knocksBy) {
  
  if(this.pins < knocksBy){
    return "You cannot knock more than 10 pins";
  }
  else if(this.rolls === 0) {
    return "You cannot knock down more pins";
  }
  else {
    this.pins -= knocksBy;
    this.roll();
  }
};

Frame.prototype.roll = function() {
  this.rolls -= 1;

  if(this.rolls < 0) {
    this.rolls = 0;
    return "You only have two rolls";
  }
};

Frame.prototype.calculateScore = function() {
  initial_pins = 10;
  return initial_pins - this.pins;
};

Frame.prototype.isSpare = function() {
  return((this.pins === 0) && (this.rolls === 0));
};

Frame.prototype.isStrike = function() {
  return((this.pins === 0) && (this.rolls === 1));
};

Frame.prototype.isFinish = function() {
  return((this.rolls === 0) || (this.pins === 0));
};