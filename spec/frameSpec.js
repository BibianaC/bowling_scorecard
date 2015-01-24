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

    it("pins can be reset to 10", function() {
      frame.knocksPins(1);
      frame.resetPins();
      expect(frame.pins).toEqual(10);
    });

    it("cannot do it if rolls are 0", function() {
      frame.knocksPins(1);
      frame.knocksPins(2);
      expect(frame.knocksPins(3)).toBe("You cannot knock down more pins");
      expect(frame.pins).toEqual(7);
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

    it("can be reset to 2", function() {
      frame.roll();
      frame.resetRolls();
      expect(frame.rolls).toEqual(2);
    });

    it("every time the player knocks down pins", function() {
      frame.knocksPins(1);
      expect(frame.rolls).toEqual(1);
    });

  });

});