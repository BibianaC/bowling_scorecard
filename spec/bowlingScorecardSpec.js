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

    it("should not add a new frame if frame is not over", function() {
      scorecard.nextFrame();
      scorecard.nextFrame();
      scorecard.frames[0].roll();
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

    it("adds spare bonus if spare", function() {
      scorecard.addFrame();
      scorecard.frames[0].knocksPins(1);
      scorecard.frames[0].knocksPins(9);
      scorecard.addFrame();
      scorecard.frames[1].knocksPins(1);
      scorecard.frames[1].knocksPins(2);
      scorecard.updateScore();
      expect(scorecard.score).toEqual(16);
    });

    it("adds spare bonus if spare", function() {
      scorecard.addFrame();
      scorecard.frames[0].knocksPins(10);
      scorecard.addFrame();
      scorecard.frames[1].knocksPins(1);
      scorecard.frames[1].knocksPins(1);
      scorecard.addFrame();
      scorecard.frames[2].knocksPins(1);
      scorecard.frames[2].knocksPins(1);
      scorecard.updateScore();
      expect(scorecard.score).toEqual(18);
    });

  });

  describe("bonus", function() {

    it("when player makes a spare", function() {
      scorecard.addFrame();
      scorecard.frames[0].knocksPins(1);
      scorecard.frames[0].knocksPins(9);
      expect(scorecard.isBonusSpare()).toBe(true);
    });

    it("when player makes a strike", function() {
      scorecard.addFrame();
      scorecard.frames[0].knocksPins(10);
      expect(scorecard.isBonusStrike()).toBe(true);
    });

  });

});