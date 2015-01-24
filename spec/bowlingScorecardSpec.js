describe("Scorecard", function() {

  var scorecard;
  var frame;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
  });

  describe("by default", function() {

    it("has a 0 score", function() {
      expect(scorecard.score).toEqual(0);
    });

    it("has one player", function() {
      expect(scorecard.player).toEqual(1);
    });

    it("has an empty array of frames", function() {
      expect(scorecard.frames.length).toEqual(0);
    });

  });

  describe("add frames", function() {

    it("can do it", function() { 
      scorecard.addFrame();
      expect(scorecard.frames.length).toEqual(1);
    });

  });



});