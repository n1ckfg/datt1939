//SCOREBOARD (COOKIES)
function update_SCOREBOARD(num) {
  let SCOREBOARD = document.getElementById("SCOREBOARD_" + num);
  let points = window.localStorage.getItem("points");
  SCOREBOARD.innerHTML = points;
  window.localStorage.setItem("points", points);
}
function addpoints(points_won) {
  /*USE NEGATIVE POINTS TO LOSE POINTS*/
  let points = window.localStorage.getItem("points");
  points = parseInt(points) + points_won;
  window.localStorage.setItem("points", points);
}
function reset_points(original_points) {
  let points = window.localStorage.getItem("points");
  points = original_points;
  window.localStorage.setItem("points", points);
}

//---------------------------------------------------------------------------------------------------------------
//BASIC FUNCTIONS

function check_if_item_is_in_list(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == item) {
      return true;
    }
  }
  return false;
}

///GIVES YOU A RANDOM NUMBER FROM NUM1 TO NUM2
function random_number(num1, num2) {
  return Math.floor(Math.random() * (num2 + 1 - num1) + num1);
}

function checks_list_to_find_word_that_starts_with_the_last_letter_of_word(
  list,
  item
) {
  ///FOR EACH ELEMENT IN LIST,
  for (let i = 0; i < list.length; i++) {
    ///CHECK IF THE FIRST LETTER OF ELEMENT IS EQUAL TO LAST LETTER OF ITEM
    if (list[i].charAt(0) == item.charAt(item.length - 1)) {
      return list[i];
    }
  } ///WE GOT A WORD
  return -1;
} ///NO WORD EXIST

function remove(list, element) {
  ///REMOVES GIVEN ELEMENT FROM LIST
  ///OR RECREATES THE LIST WITHOUT THAT ELEMENT
  var new_list = [];
  for (var index in list) {
    if (list[index] != element) {
      new_list.push(list[index]);
    }
  }
  return new_list;
}

//LINK WITH PASSWORD
var flag1 = false; ///IF FLAG1 IS FALSE, THEN ITS LOCKED. ELSE OPEN
function password_link(link, password, unlocked, statement) {
  ///IF UNLOCKED, THEN SENDS YOU TO THE LINK
  if (unlocked == true) {
    location.replace(link);
  } else {
    ///ELSE, TYPE IN THE CORRECT PASSWORD TO GET IT UNLOCKED
    var entered_password = prompt(statement);
    if (password == entered_password) {
      flag1 = true;
      return true;
    } else {
      return false;
    }
  }
}
//ONCLICK TEXT REPLACER
function replace_text(text, name) {
  document.getElementById(name).innerHTML = text;
}

//---------------------------------------------------------------------------------------------------------------
//ANIMAL GAME
function animal_game() {
  ///LIST OF ANIMALS; ORDER OF ANIMALS MATTER- ROBOT FAVOURS LEFT MOST
  var animals = [
    "alligator",
    "ant",
    "bat",
    "butterfly",
    "cat",
    "cow",
    "crocodile",
    "donkey",
    "elephant",
    "eagle",
    "frog",
    "goat",
    "horse",
    "iguana",
    "jaguar",
    "jellyfish",
    "kiwi",
    "koala",
    "lama",
    "lion",
    "monkey",
    "mouse",
    "newt",
    "ox",
    "octpus",
    "otrich",
    "otter",
    "owl",
    "parrot",
    "pony",
    "rabbit",
    "raccoon",
    "rat",
    "rino",
    "scripion",
    "seal",
    "sheep",
    "sloth",
    "snake",
    "tiger",
    "toad",
    "turtle",
    "whale",
    "wolf",
    "yak",
    "zebra",
    "fox",
    "kangaroo"
  ];

  let animal1 = animals[random_number(0, animals.length - 1)]; ///THE ROBOTS STARTING ANIMAL
  ///THE GAMES GOES ON A CYCLE OF REPEATED TURNS UNTIL SOMEONE WINS
  while (true) {
    alert(animal1);
    animals = remove(animals, animal1); ///REMOVE USED ANIMAL FROM LIST
    var animal2 = prompt(
      "Name of an animal that starts with " +
        animal1.charAt(animal1.length - 1) +
        ": "
    ).toLowerCase(); ///TAKES IN YOU ANIMAL
    ///AND CHECKS IF THE ANIMALS STARTING WITH THE ENDING LETTER OF THE ROBOT'S ANIMAL
    if (
      animal1.charAt(animal1.length - 1) != animal2.charAt(0) ||
      check_if_item_is_in_list(animals, animal2) != true
    ) {
      return false;
    } ///YOU LOST
    animals = remove(animals, animal2); ///REMOVE USED ANIMAL FROM LIST
    ///ROBOT GIVES YOU HIS ANIMAL THAT STARTS WITH THE ENDING LETTER OF YOUR ANIMAL
    animal1 = checks_list_to_find_word_that_starts_with_the_last_letter_of_word(
      animals,
      animal2
    );
    if (animal1 == -1) {
      return true;
    } ///YOU WON
  }
}
//---------------------------------------------------------------------------------------------------------------
//4 5 no 6 Game
function FourFiveNoSix_game() {
  var robot_d1 = random_number(2, 6);
  var robot_d2 = random_number(2, 6);
  var user_d1 = random_number(1, 6);
  var user_d2 = random_number(1, 6);
  document.getElementById("die_1_die_shape").innerHTML = robot_d1;
  document.getElementById("die_2_die_shape").innerHTML = robot_d2;
  document.getElementById("die_3_die_shape").innerHTML = user_d1;
  document.getElementById("die_4_die_shape").innerHTML = user_d2;

  let robot_dice = [robot_d1, robot_d2].sort();
  let user_dice = [user_d1, user_d2].sort();
  let cost = 500;

  if (robot_dice[0] == 4 && robot_dice[1] == 5) {
    addpoints(-cost);
    update_SCOREBOARD(3);
    return false;
  } else if (user_dice[0] == 4 && user_dice[1] == 5) {
    addpoints(cost);
    update_SCOREBOARD(3);
    return true;
  } else if (
    (robot_dice[0] == robot_dice[1] && user_dice[0] == user_dice[1]) ||
    (robot_dice[0] != robot_dice[1] && user_dice[0] != user_dice[1])
  ) {
    if (robot_dice[1] > user_dice[1]) {
      addpoints(-cost);
      update_SCOREBOARD(3);
      return false;
    } else if (robot_dice[1] < user_dice[1]) {
      addpoints(cost);
      update_SCOREBOARD(3);
      return true;
    }
  } else if (robot_dice[0] == robot_dice[1] && user_dice[0] != user_dice[1]) {
    addpoints(-cost);
    update_SCOREBOARD(3);
    return false;
  } else if (robot_dice[0] != robot_dice[1] && user_dice[0] == user_dice[1]) {
    addpoints(cost);
    update_SCOREBOARD(3);
    return true;
  }
}
//---------------------------------------------------------------------------------------------------------------
//RANDOM STATEMENTS (FOR TRUE, FALSE, UNDEFINE, NONE)
var statements_1 = [
  ["OH SNAP, YOU WON!", "NO WAY YOU WON"],
  ["HA, I'M VICTORIOUS", "YOU SUCK"],
  ["DRAW? YOU WANT TO PLAY AGAIN?", "HMM...WHAT EVER"],
  [""]
];
function random_statements(condiction, statements) {
  if (condiction == true) {
    return statements[0][random_number(0, statements[0].length - 1)];
  } else if (condiction == false) {
    return statements[1][random_number(0, statements[1].length - 1)];
  } else if (condiction == "none") {
    return statements[3][random_number(0, statements[3].length - 1)];
  } else {
    return statements[2][random_number(0, statements[2].length - 1)];
  }
}
//---------------------------------------------------------------------------------------------------------------
//BACKGROUND MUSIC
var backgroundmusic = document.getElementById("BGmusic");
var normal_volume = 0.1;
backgroundmusic.volume = normal_volume;

function mute_volume() {
  backgroundmusic.volume = 0;
}

function unmute_volume() {
  backgroundmusic.volume = normal_volume;
}

function mute_or_unmute() {
  if (backgroundmusic.volume == normal_volume) {
    mute_volume();
  } else {
    unmute_volume();
  }
}
//---------------------------------------------------------------------------------------------------------------
//CHARACTER MOVEMENT
var objImage = null;
var speed = 5
function init() {
  objImage = document.getElementById("character");
  objImage.style.position = "absolute";
  objImage.style.left = "200px";
  objImage.style.bottom = "0px";
}
function moveLeft() {
  if(objImage.style.left>=0+"px"){
    objImage.style.left = parseInt(objImage.style.left) - speed + "px";
  }
  /*if(objImage.style.left==1000+'px'){
    password_link('AREA_1.html','',true,'')
  }*/
}
function moveUp() {
  if(objImage.style.top>=0+"px"){
    objImage.style.top = parseInt(objImage.style.top) - speed + "px";
  }
}
function moveRight() {
  if(true/*objImage.style.lef<=screen.width+"px"*/){
    objImage.style.left = parseInt(objImage.style.left) + speed + "px";
  }
}
function moveDown() {
  if(objImage.style.bottom>=0+"px"){
    objImage.style.top = parseInt(objImage.style.top) + speed + "px";
  }
}
function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveUp();
      break;
    case 39: //right arrow key
      moveRight();
      break;
    case 40: //down arrow key
      moveDown();
      break;
  }
}

let cloudcontainer = document.getElementById("cloudcontainer");

function matchCloudContainer() { 
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
  console.log(w + " " + h);
  cloudcontainer.style="width:" + w + "px; height: " + h + "px;";
}

window.onload = function() {
  init();
  matchCloudContainer();
};

window.addEventListener("resize", matchCloudContainer);