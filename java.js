var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'left', 'right', 'right'];

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

//The background gif seems to only work when the page is first loaded up. Otherwise, it only switches to a white screen.
function activateCheats() {
  document.body.style.backgroundImage = "url('http://www.noroomforbedbugs.com/bug_crawls_on_screen.gif')";
    
  var audio = new Audio('audio/crazy.mp3');
  audio.play();

  alert("YOU GOT IT!");
}
            