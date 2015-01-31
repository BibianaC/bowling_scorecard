var scorecard = new Scorecard();

$(document).ready(function() {
  
  $('.submit').on('click', function(event) {
    event.preventDefault();
    scorecard.nextFrame();
    scorecard.latestFrame().knocksPins($('#knocked-pins').val());
    $('#total-score').text(scorecard.updateScore());

    if (scorecard.latestFrame() === scorecard.frames[0]) {
      $('#score1').text(scorecard.calcFrameScore(0));
      // if(scorecard.frames[0].rolls === 1) {
      //   $('#roll1').text(scorecard.frames[0].calculateScore());
      // }
      // if(scorecard.frames[0].rolls === 0) {
      //   $('#roll2').text(scorecard.frames[0].calculateScore());
      // }
    }
    if (scorecard.latestFrame() === scorecard.frames[1]) {
      $('#score2').text(scorecard.calcFrameScore(1));
      $('#score1').text(scorecard.calcFrameScore(0));
    }
    if (scorecard.latestFrame() === scorecard.frames[2]) {
      $('#score3').text(scorecard.calcFrameScore(2));
      $('#score2').text(scorecard.calcFrameScore(1));
      $('#score1').text(scorecard.calcFrameScore(0));
    }
    if (scorecard.latestFrame() === scorecard.frames[3]) {
      $('#score4').text(scorecard.calcFrameScore(3));
      $('#score3').text(scorecard.calcFrameScore(2));
      $('#score2').text(scorecard.calcFrameScore(1));
    }
    if (scorecard.latestFrame() === scorecard.frames[4]) {
      $('#score5').text(scorecard.calcFrameScore(4));
      $('#score4').text(scorecard.calcFrameScore(3));
      $('#score3').text(scorecard.calcFrameScore(2));
    }
    if (scorecard.latestFrame() === scorecard.frames[5]) {
      $('#score6').text(scorecard.calcFrameScore(5));
      $('#score5').text(scorecard.calcFrameScore(4));
      $('#score4').text(scorecard.calcFrameScore(3));
    }
    if (scorecard.latestFrame() === scorecard.frames[6]) {
      $('#score7').text(scorecard.calcFrameScore(6));
      $('#score6').text(scorecard.calcFrameScore(5));
      $('#score5').text(scorecard.calcFrameScore(4));
    }
    if (scorecard.latestFrame() === scorecard.frames[7]) {
      $('#score8').text(scorecard.calcFrameScore(7));
      $('#score7').text(scorecard.calcFrameScore(6));
      $('#score6').text(scorecard.calcFrameScore(5));
    }
    if (scorecard.latestFrame() === scorecard.frames[8]) {
      $('#score9').text(scorecard.calcFrameScore(8));
      $('#score8').text(scorecard.calcFrameScore(7));
      $('#score7').text(scorecard.calcFrameScore(6));
    }
    if (scorecard.latestFrame() === scorecard.frames[9]) {
      $('#score10').text(scorecard.calcFrameScore(9));
      $('#score9').text(scorecard.calcFrameScore(8));
      $('#score8').text(scorecard.calcFrameScore(7));
    }
  });
  
});