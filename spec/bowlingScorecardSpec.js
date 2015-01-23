describe("Scorecard", function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe("by default", function() {

    it("has a 0 score", function() {
      expect(scorecard.score).toEqual(0);
    });

    it("has one player", function() {
      expect(scorecard.player).toEqual(1);
    });

    it("has ten frames", function() {
      expect(scorecard.frames).toEqual(10);
    });

    it("has ten pins", function() {
      expect(scorecard.pins).toEqual(10);
    });

  });

  describe("knocks down pins", function() {

    it("can do it", function() {
      scorecard.knocksPins(1);
      expect(scorecard.pins).toEqual(9);
    });

    it("max 10", function() {
      expect(scorecard.knocksPins(11)).toBe("You cannot knock more than 10 pins");
      expect(scorecard.pins).toEqual(scorecard.pins)
    });

    it("pins can be reset to 10", function() {
      scorecard.knocksPins(1);
      scorecard.resetPins();
      expect(scorecard.pins).toEqual(10);
    });

  });

  describe("increase score", function() {

    it("by the number of pins knocked", function() {
      scorecard.knocksPins(1);
      expect(scorecard.score).toEqual(1);
    });

  });



});