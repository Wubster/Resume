var allowedKeys = {
  50: '2',
  51: '3',
  53: '5',
  56: '8',
  57: '9',
};

var konamiCode = ['3', '8', '5', '3', '3', '3', '8', '2', '9', '2'];

var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate message and surprises
    if (konamiCodePosition == konamiCode.length)
      activateCheats();
  } else
    konamiCodePosition = 0;
});

function activateCheats() {
//Audio plays usually
  var audio = new Audio('audio/callmemaybe.mp3');
  audio.play();

  alert("Call Me Maybe?");
}
            