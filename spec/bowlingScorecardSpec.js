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

    it("has an empty array of frames", function() {
      expect(scorecard.frames.length).toEqual(0);
    });

  });

  describe("add frames", function() {

    it("knows when to add a new frame", function() {
      scorecard.nextFrame();
      expect(scorecard.frames.length).toEqual(1);
    });

    it("can have max 10 frames", function() {
      scorecard.addFrame();
      scorecard.addFrame();
      scorecard.addFrame();
      scorecard.addFrame();
      scorecard.addFrame();
      scorecard.addFrame();
      scorecard.addFrame();
      scorecard.addFrame();
      scorecard.addFrame();
      scorecard.addFrame();
      expect(scorecard.addFrame()).toBe("Game is over");
      expect(scorecard.frames.length).toEqual(10);
    });

  });

  describe("increase score", function() {

    it("based on the score of each frame", function () {
      scorecard.addFrame();
      scorecard.frames[0].knocksPins(1);
      scorecard.updateScore();
      expect(scorecard.score).toEqual(1);
    });

  });

});