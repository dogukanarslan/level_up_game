var level = 0;
var level_screen = document.getElementById('level');
var level_up = document.getElementById('level_up');
var level_down = document.getElementById('level_down');
var start_button = document.getElementById('myButton');
var section_visibility = document.getElementById('main-content');

function levelUp(){
  level++;
  level_screen.innerHTML = level;
}

function levelDown(){
  level--;
  level_screen.innerHTML = level;
}

function startGame(){
  section_visibility.style.display = '';
}

level_up.addEventListener('click', levelUp);
level_down.addEventListener('click',levelDown);
start_button.addEventListener('click', startGame);
