var scorecard = new Scorecard();

$(document).ready(function() {
  
  $('.submit').on('click', function(event) {
    event.preventDefault();
    scorecard.nextFrame();
    scorecard.latestFrame().knocksPins($('#knocked-pins').val());
    $('#total-score').text(scorecard.updateScore());

    if (scorecard.latestFrame() === scorecard.frames[0]) {
      $('#score1').text(scorecard.updateScore());
    }
    if (scorecard.latestFrame() === scorecard.frames[1]) {
      $('#score2').text(scorecard.updateScore());
    }
    if (scorecard.latestFrame() === scorecard.frames[2]) {
      $('#score3').text(scorecard.updateScore());
    }
    if (scorecard.latestFrame() === scorecard.frames[3]) {
      $('#score4').text(scorecard.updateScore());
    }
    if (scorecard.latestFrame() === scorecard.frames[4]) {
      $('#score5').text(scorecard.updateScore());
    }
    if (scorecard.latestFrame() === scorecard.frames[5]) {
      $('#score6').text(scorecard.updateScore());
    }
    if (scorecard.latestFrame() === scorecard.frames[6]) {
      $('#score7').text(scorecard.updateScore());
    }
    if (scorecard.latestFrame() === scorecard.frames[7]) {
      $('#score8').text(scorecard.updateScore());
    }
    if (scorecard.latestFrame() === scorecard.frames[8]) {
      $('#score9').text(scorecard.updateScore());
    }
    if (scorecard.latestFrame() === scorecard.frames[9]) {
      $('#score10').text(scorecard.updateScore());
    }
  });
  
});