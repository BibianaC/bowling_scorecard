describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("by default", function() {

    it("has ten pins", function() {
      expect(frame.pins).toEqual(10);
    });

    it("has two rolls", function() {
      expect(frame.rolls).toEqual(2);
    });

  });

  describe("knocks down pins", function() {

    it("can do it", function() {
      frame.knocksPins(1);
      expect(frame.pins).toEqual(9);
    });

    it("max 10", function() {
      frame.knocksPins(2);
      expect(frame.knocksPins(11)).toBe("You cannot knock more than 10 pins");
      expect(frame.pins).toEqual(8);
      expect(frame.rolls).toEqual(1);
    });

    it("cannot do it if rolls are 0", function() {
      frame.knocksPins(1);
      frame.knocksPins(2);
      expect(frame.knocksPins(3)).toBe("You cannot knock down more pins");
      expect(frame.pins).toEqual(7);
    });

    it("should know how many pins has knocked down", function() {
      frame.knocksPins(1);
      expect(frame.knockedPins(0)).toEqual(1);
      frame.knocksPins(2);
      expect(frame.knockedPins(1)).toEqual(2);
    });

  });

  describe("decrease rolls", function() {

    it("can do it", function() { 
      frame.roll();
      expect(frame.rolls).toEqual(1);
    });

    it("can have max two rolls", function() {
      frame.roll();
      frame.roll();
      expect(frame.roll()).toBe("You only have two rolls");
      expect(frame.rolls).toEqual(0);
    });

    it("every time the player knocks down pins", function() {
      frame.knocksPins(1);
      expect(frame.rolls).toEqual(1);
    });

  });

  describe("calculate score", function() {

    it("based on number of knocked pins", function() {
      frame.knocksPins(1);
      expect(frame.calculateScore()).toEqual(1);
    });

  });

  describe("spare", function() {

    it("knows when it is a spare", function() {
      frame.knocksPins(7);
      frame.knocksPins(3);
      expect(frame.isSpare()).toBe(true);
    });

    it("knows when it is not a spare", function() {
      frame.knocksPins(7);
      frame.knocksPins(2);
      expect(frame.isSpare()).toBe(false);
    });

    it("knows that a strike is not a spare", function() {
      frame.knocksPins(10);
      expect(frame.isSpare()).toBe(false);
    });

  });

  describe("strike", function() {

    it("knows when it is a strike", function() {
      frame.knocksPins(10);
      expect(frame.isStrike()).toBe(true);
    });

    it("knows when it is not a strike", function() {
      frame.knocksPins(0);
      frame.knocksPins(10);
      expect(frame.isStrike()).toBe(false);
    });

  });

  describe("is finish", function() {

    it("when rolls is 0", function() {
      frame.knocksPins(2);
      frame.knocksPins(1);
      expect(frame.isFinish()).toBe(true);
    });

    it("when player makes a strike", function() {
      frame.knocksPins(10);
      expect(frame.isFinish()).toBe(true);
    });

    it("it is not finish", function() {
      frame.knocksPins(1);
      expect(frame.isFinish()).toBe(false);
    });

  });

});