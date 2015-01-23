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

  });


});