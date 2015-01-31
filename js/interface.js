var scorecard = new Scorecard();

$(document).ready(function() {
  
  $('.submit').on('click', function(event) {
    event.preventDefault();
    scorecard.nextFrame();
    scorecard.latestFrame().knocksPins($('#knocked-pins').val());
    $('#total-score').text(scorecard.updateScore());

    if (scorecard.latestFrame() === scorecard.frames[0]) {
      $('#score1').text(scorecard.calcFrameScore(0));
      if(scorecard.frames[0].rolls === 1) {
        $('#roll1').text(scorecard.frames[0].knockedPins(0));
      }
      if(scorecard.frames[0].rolls === 0) {
        $('#roll2').text(scorecard.frames[0].knockedPins(1));
      }
    }
    if (scorecard.latestFrame() === scorecard.frames[1]) {
      $('#score2').text(scorecard.calcFrameScore(1));
      $('#score1').text(scorecard.calcFrameScore(0));
      if(scorecard.frames[1].rolls === 1) {
        $('#roll3').text(scorecard.frames[1].knockedPins(0));
      }
      if(scorecard.frames[1].rolls === 0) {
        $('#roll4').text(scorecard.frames[1].knockedPins(1));
      }
    }
    if (scorecard.latestFrame() === scorecard.frames[2]) {
      $('#score3').text(scorecard.calcFrameScore(2));
      $('#score2').text(scorecard.calcFrameScore(1));
      $('#score1').text(scorecard.calcFrameScore(0));
      if(scorecard.frames[2].rolls === 1) {
        $('#roll5').text(scorecard.frames[2].knockedPins(0));
      }
      if(scorecard.frames[2].rolls === 0) {
        $('#roll6').text(scorecard.frames[2].knockedPins(1));
      }
    }
    if (scorecard.latestFrame() === scorecard.frames[3]) {
      $('#score4').text(scorecard.calcFrameScore(3));
      $('#score3').text(scorecard.calcFrameScore(2));
      $('#score2').text(scorecard.calcFrameScore(1));
      if(scorecard.frames[3].rolls === 1) {
        $('#roll7').text(scorecard.frames[3].knockedPins(0));
      }
      if(scorecard.frames[3].rolls === 0) {
        $('#roll8').text(scorecard.frames[3].knockedPins(1));
      }
    }
    if (scorecard.latestFrame() === scorecard.frames[4]) {
      $('#score5').text(scorecard.calcFrameScore(4));
      $('#score4').text(scorecard.calcFrameScore(3));
      $('#score3').text(scorecard.calcFrameScore(2));
      if(scorecard.frames[4].rolls === 1) {
        $('#roll9').text(scorecard.frames[4].knockedPins(0));
      }
      if(scorecard.frames[4].rolls === 0) {
        $('#roll10').text(scorecard.frames[4].knockedPins(1));
      }
    }
    if (scorecard.latestFrame() === scorecard.frames[5]) {
      $('#score6').text(scorecard.calcFrameScore(5));
      $('#score5').text(scorecard.calcFrameScore(4));
      $('#score4').text(scorecard.calcFrameScore(3));
      if(scorecard.frames[5].rolls === 1) {
        $('#roll11').text(scorecard.frames[5].knockedPins(0));
      }
      if(scorecard.frames[5].rolls === 0) {
        $('#roll12').text(scorecard.frames[5].knockedPins(1));
      }
    }
    if (scorecard.latestFrame() === scorecard.frames[6]) {
      $('#score7').text(scorecard.calcFrameScore(6));
      $('#score6').text(scorecard.calcFrameScore(5));
      $('#score5').text(scorecard.calcFrameScore(4));
      if(scorecard.frames[6].rolls === 1) {
        $('#roll13').text(scorecard.frames[6].knockedPins(0));
      }
      if(scorecard.frames[6].rolls === 0) {
        $('#roll14').text(scorecard.frames[6].knockedPins(1));
      }
    }
    if (scorecard.latestFrame() === scorecard.frames[7]) {
      $('#score8').text(scorecard.calcFrameScore(7));
      $('#score7').text(scorecard.calcFrameScore(6));
      $('#score6').text(scorecard.calcFrameScore(5));
      if(scorecard.frames[7].rolls === 1) {
        $('#roll15').text(scorecard.frames[7].knockedPins(0));
      }
      if(scorecard.frames[7].rolls === 0) {
        $('#roll16').text(scorecard.frames[7].knockedPins(1));
      }
    }
    if (scorecard.latestFrame() === scorecard.frames[8]) {
      $('#score9').text(scorecard.calcFrameScore(8));
      $('#score8').text(scorecard.calcFrameScore(7));
      $('#score7').text(scorecard.calcFrameScore(6));
      if(scorecard.frames[8].rolls === 1) {
        $('#roll17').text(scorecard.frames[8].knockedPins(0));
      }
      if(scorecard.frames[8].rolls === 0) {
        $('#roll18').text(scorecard.frames[8].knockedPins(1));
      }
    }
    if (scorecard.latestFrame() === scorecard.frames[9]) {
      $('#score10').text(scorecard.calcFrameScore(9));
      $('#score9').text(scorecard.calcFrameScore(8));
      $('#score8').text(scorecard.calcFrameScore(7));
      if(scorecard.frames[9].rolls === 1) {
        $('#roll19').text(scorecard.frames[9].knockedPins(0));
      }
      if(scorecard.frames[9].rolls === 0) {
        $('#roll20').text(scorecard.frames[9].knockedPins(1));
      }
    }
  });
  
});