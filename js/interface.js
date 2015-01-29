var scorecard = new Scorecard();

$(document).ready(function() {
  
  $('.submit').on('click', function(event) {
    event.preventDefault();
    scorecard.nextFrame();
    scorecard.latestFrame().knocksPins($('#knocked-pins').val());
    $('#total-score').text(scorecard.updateScore());
  });
  
});