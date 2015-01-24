var Frame = function() {
  this.pins = 10;
  this.trows = 2
};

Frame.prototype.knocksPins = function(knocksBy) {
  this.pins -= knocksBy;

  if(knocksBy > 10){
    this.pins = this.pins - knocksBy
    return "You cannot knock more than 10 pins"
  }
};

Frame.prototype.resetPins =  function() {
  this.pins = 10;
};