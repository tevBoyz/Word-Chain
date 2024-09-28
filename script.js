const wordChains = [
    ["Tooth", "Brush", "Stroke", "Paint", "Color", "Palette", "Knife"],
    ["Traffic", "Light", "House", "Party", "Animal", "Farm", "Truck"],
    ["Fire", "Alarm", "Clock", "Tower", "Bridge", "Gap", "Year"],
    ["Paper", "Plane", "Ticket", "Booth", "Worker", "Bee", "Sting"],
    ["Chicken", "Soup", "Kitchen", "Sink", "Hole", "Punch", "Card"],
    ["Moon", "Light", "Bulb", "Plant", "Pot", "Hole", "Maker"],
    ["Coffee", "Cup", "Holder", "Door", "Knob", "Turn", "Signal"],
    ["Ice", "Cream", "Cone", "Shape", "Shift", "Work", "Out"],
    ["Baby", "Bottle", "Cap", "Gun", "Powder", "Room", "Key"],
    ["Gold", "Medal", "Case", "File", "Folder", "Paper", "Cut"],
    ["School", "Bus", "Stop", "Watch", "Tower", "Bell", "Ring"],
    ["Milk", "Bottle", "Opener", "Window", "Shade", "Tree", "House"],
    ["Sun", "Flower", "Pot", "Holder", "Hand", "Signal", "Post"],
    ["Sand", "Castle", "Rock", "Star", "Light", "Show", "Room"],
    ["Sugar", "Cane", "Field", "Work", "Station", "Wagon", "Train"],
    ["Door", "Mat", "House", "Plant", "Pot", "Cover", "Charge"],
    ["Iron", "Man", "Power", "Plant", "Tree", "House", "Light"],
    ["Table", "Cloth", "Napkin", "Ring", "Box", "Seat", "Belt"],
    ["Stone", "Wall", "Clock", "Tower", "Bridge", "Path", "Way"],
    ["Beach", "Ball", "Game", "Show", "Stop", "Sign", "Board"],
    ["Hair", "Brush", "Stroke", "Engine", "Oil", "Lamp", "Post"],
    ["Chocolate", "Bar", "Stool", "Pigeon", "Hole", "Punch", "Card"],
    ["Gas", "Station", "Master", "Key", "Holder", "Bag", "Pack"],
    ["Sound", "Wave", "Rider", "Horse", "Shoe", "Lace", "Work"],
    ["Tree", "House", "Party", "Line", "Dance", "Floor", "Plan"],
    ["Wind", "Mill", "Stone", "Wall", "Paper", "Cut", "Edge"],
    ["Sky", "Light", "Beam", "Balance", "Sheet", "Music", "Note"],
    ["Mirror", "Ball", "Game", "Night", "Time", "Machine", "Gun"],
    ["Water", "Bottle", "Neck", "Tie", "Rod", "Holder", "Case"],
    ["Traffic", "Jam", "Session", "Drummer", "Band", "Leader", "Board"],
    ["Power", "Line", "Dance", "Floor", "Plan", "Action", "Hero"],
    ["Light", "Switch", "Blade", "Runner", "Line", "Dance", "Partner"],
    ["Music", "Box", "Office", "Chair", "Man", "Hole", "Punch"],
    ["Summer", "Time", "Machine", "Part", "Time", "Travel", "Guide"],
    ["Green", "House", "Plant", "Tree", "House", "Party", "Time"],
    ["Cotton", "Ball", "Room", "Service", "Time", "Machine", "Gun"],
    ["Paint", "Brush", "Stroke", "Engine", "Oil", "Lamp", "Post"],
    ["Electric", "Charge", "Station", "Master", "Key", "Board", "Game"],
    ["Salt", "Water", "Bottle", "Opener", "Window", "Shade", "Tree"],
    ["Leather", "Belt", "Loop", "Hole", "Punch", "Card", "Table"],
    ["Air", "Plane", "Ticket", "Booth", "Worker", "Bee", "Sting"],
    ["Drum", "Stick", "Figure", "Eight", "Ball", "Game", "Night"],
    ["Rock", "Star", "Light", "Beam", "Rider", "Wave", "Sound"],
    ["Ocean", "Wave", "Rider", "Horse", "Shoe", "Lace", "Work"],
    ["River", "Bank", "Note", "Book", "Club", "Sandwich", "Plate"],
    ["Jet", "Stream", "Line", "Dance", "Party", "Time", "Machine"],
    ["School", "Bus", "Stop", "Light", "House", "Party", "Time"],
    ["Door", "Frame", "Work", "Station", "Wagon", "Train", "Track"],
    ["Chair", "Leg", "Room", "Key", "Board", "Game", "Night"],
  ["Phone", "Call", "Center", "Stage", "Light", "House", "Party"],
  ["Car", "Door", "Lock", "Smith", "Shop", "Window", "Display"],
  ["Flower", "Pot", "Holder", "Key", "Ring", "Tone", "Signal"],
  ["Picture", "Frame", "Work", "Station", "Master", "Plan", "Map"],
  ["Credit", "Card", "Game", "Night", "Sky", "Light", "Show"],
  ["Book", "Mark", "Time", "Machine", "Part", "Number", "Line"],
  ["Sun", "Roof", "Top", "Gear", "Shift", "Work", "Load"],
  ["Laptop", "Bag", "Handle", "Bar", "Code", "Reader", "Board"],
  ["Desk", "Drawer", "Key", "Hole", "Punch", "Card", "Slot"],
  ["Fire", "Truck", "Stop", "Sign", "Board", "Game", "Night"],
  ["Water", "Tank", "Engine", "Room", "Service", "Desk", "Lamp"],
  ["Cup", "Holder", "Key", "Board", "Game", "Set", "Match"],
  ["Light", "Bulb", "Holder", "Bag", "Pack", "Leader", "Board"],
  ["Ice", "Cream", "Cone", "Holder", "Bag", "Tag", "Number"],
  ["Wood", "Plank", "Walk", "Way", "Path", "Marker", "Pen"],
  ["Paper", "Cut", "Edge", "Light", "Switch", "Board", "Game"],
  ["Coffee", "Mug", "Shot", "Gun", "Powder", "Keg", "Stand"],
  ["Storm", "Cloud", "Cover", "Charge", "Station", "Wagon", "Train"],
  ["Snow", "Man", "Hole", "Punch", "Bag", "Handle", "Bar"],
  ["Window", "Frame", "Work", "Bench", "Press", "Button", "Line"],
  ["Car", "Engine", "Oil", "Tank", "Top", "Hat", "Stand"],
  ["Fruit", "Basket", "Ball", "Game", "Set", "Match", "Point"],
  ["Plant", "Pot", "Hole", "Punch", "Card", "Game", "Night"],
  ["Battery", "Charger", "Station", "Master", "Plan", "Action", "Figure"],
  ["Movie", "Star", "Light", "Beam", "Balance", "Sheet", "Music"],
  ["Water", "Fountain", "Pen", "Holder", "Key", "Ring", "Tone"],
  ["Tree", "Branch", "Manager", "Office", "Chair", "Leg", "Room"],
  ["Sand", "Dune", "Buggy", "Ride", "Share", "Price", "List"],
  ["Lamp", "Post", "Card", "Game", "Plan", "Action", "Hero"],
  ["Wheel", "Barrow", "Lane", "Marker", "Pen", "Holder", "Bag"],
  ["Stone", "Wall", "Paper", "Cut", "Edge", "Light", "Beam"],
  ["Steel", "Beam", "Rider", "Horse", "Shoe", "Lace", "Work"],
  ["Chair", "Arm", "Wrestling", "Match", "Point", "System", "Failure"],
  ["Guitar", "String", "Theory", "Lesson", "Plan", "Action", "Scene"],
  ["Moon", "Phase", "Shift", "Work", "Load", "Bearing", "Wall"],
  ["Clock", "Face", "Value", "System", "Unit", "Test", "Drive"],
  ["Wine", "Glass", "Blower", "Door", "Handle", "Bar", "Code"],
  ["Bird", "Nest", "Egg", "Shell", "Shock", "Absorber", "Spring"],
  ["Power", "Switch", "Blade", "Runner", "Line", "Dance", "Floor"],
  ["Bicycle", "Wheel", "Chair", "Leg", "Room", "Service", "Desk"],
  ["River", "Bank", "Manager", "Office", "Chair", "Arm", "Rest"],
  ["Train", "Track", "Field", "Worker", "Bee", "Hive", "Mind"],
  ["Night", "Owl", "Nest", "Egg", "Shell", "Shock", "Wave"],
  ["Carpet", "Cleaner", "Room", "Service", "Desk", "Lamp", "Post"],
  ["Coffee", "Bean", "Bag", "Handle", "Bar", "Code", "Reader"],
  ["Glass", "Bottle", "Cap", "Gun", "Powder", "Room", "Service"],
  ["Storm", "Cloud", "Cover", "Story", "Time", "Machine", "Part"],
  ["Boat", "Sail", "Wave", "Rider", "Horse", "Shoe", "Lace"]
  ];
  
var currentChain = [];
var playChain = [];
var currentWordIndex = 1;
var currentLetterIndex = 1;
var time = 0;
var timer;
var input;


var inputField = document.querySelector('.wordin');
inputField.addEventListener('keydown', (event)=>{
if(event.key == 'Enter'){
  check();
}

})

var checkButton = document.querySelector('.check');

checkButton.addEventListener('click', ()=>{
  check();
})

function check(){
  input = document.querySelector('.wordin');
  var playerIn = input.value.toLowerCase();
  input.value = '';
  input.focus();

  var currentWord = currentChain[currentWordIndex].toLowerCase();
  
  
  if(playerIn == ''){
    alert("please enter a word")
  }
  else{
    if(currentWord == playerIn){
      if(currentWordIndex == 6){
        playChain[currentWordIndex] = currentChain[currentWordIndex];
        populateDOM(playChain);
        clearInterval(timer);
        timer = null;
        let currentWordContainer = document.querySelector('.word'+(currentWordIndex + 1))
      currentWordContainer.classList.add('nod')
      currentWordContainer.classList.add('green')
      
      setTimeout(() => {
        currentWordContainer.classList.remove("shake");
        currentWordContainer.classList.remove("red");
      }, 500);

        document.getElementById('popup').style.display = 'flex';
        document.querySelector('.timedisplay').innerHTML = 'Time taken to finish: '+ time;
      }
      else{
        playChain[currentWordIndex] = currentChain[currentWordIndex];
        populateDOM(playChain);
        let currentWordContainer = document.querySelector('.word'+(currentWordIndex + 1))
        currentWordContainer.classList.add('nod')
        currentWordContainer.classList.add('green')

        setTimeout(() => {
          currentWordContainer.classList.remove("shake");
          currentWordContainer.classList.remove("red");
        }, 500);

        currentLetterIndex = 1;
        currentWordIndex++;
        
      }
    }
    else{
      let currentWordContainer = document.querySelector('.word'+(currentWordIndex + 1))
      currentWordContainer.classList.add('shake')
      currentWordContainer.classList.add('red')
      
      setTimeout(() => {
        currentWordContainer.classList.remove("shake");
        currentWordContainer.classList.remove("red");
      }, 500);

      if(currentLetterIndex == currentWord.length){
          currentWordIndex++;
          currentLetterIndex = 1;
          let currentWordContainer = document.querySelector('.word'+(currentWordIndex + 1))
      currentWordContainer.classList.add('shake')
      currentWordContainer.classList.add('red')
      }
      
      let temp = currentChain[currentWordIndex];
      let t = currentLetterIndex;
      let res = '';
      while(t>=0){
        res = temp[t] + res;
        t--;
      }
      res = res + ('-'.repeat(temp.length - currentLetterIndex - 1));
      playChain[currentWordIndex] = res;
      populateDOM(playChain);
      currentLetterIndex++;
  
    }
  }
}

function restart(){
  window.location.reload();
}


function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    time++; 
    document.querySelector(".timer").textContent = "Time Elapsed: " + time; 
  }, 1000); // Update every second
}

// Close the popup
document.querySelector('.close-popup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});


  function getRandWordChain(){
    var randIndex = Math.floor(Math.random() * (wordChains.length));
    return wordChains[randIndex];
  }

  function startGame(){
    currentChain = getRandWordChain();
    convertChain(currentChain);
    populateDOM(playChain);
    startTimer();
    console.log(currentChain)
  }

  function populateDOM(chain){
    for(var i = 0;i < chain.length; i++){
      let place = document.querySelector('.word'+(i+1));
      place.innerHTML = chain[i];
    }
  }

  function convertChain(chain){
    playChain.push(chain[0]);
    for(var i =1; i < chain.length;i++){
      var word = chain[i];
      var newWord = word[0] + ('-'.repeat(word.length - 1))
      playChain.push(newWord);
    }
  }

  startGame();