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
      expect(frame.knocksPins(11)).toBe("You cannot knock more than 10 pins");
      expect(frame.pins).toEqual(frame.pins)
    });

    it("pins can be reset to 10", function() {
      frame.knocksPins(1);
      frame.resetPins();
      expect(frame.pins).toEqual(10);
    });

  });

  describe("decrease rolls", function() {

    it("can do it", function() { 
      frame.roll();
      expect(frame.rolls).toEqual(1);
    });

  });

});