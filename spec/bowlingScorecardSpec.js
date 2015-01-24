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

  // describe("increase score", function() {

  //   it("by the number of pins knocked", function() {
  //     frame.knocksPins(1);
  //     expect(scorecard.score).toEqual(1);
  //   });

  // });

  // describe("decrease frames", function() {

  //   it("when pins are knocked", function() {
  //     frame.knocksPins(1);
  //     expect(scorecard.frames).toEqual(9);
  //   });

  // });

  // describe("strike", function() {

  //   it("knocks 10 pins", function() {
  //     scorecard.strike();
  //     expect(scorecard.pins).toEqual(0);
  //   });

  // });



});