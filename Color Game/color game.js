var numberOfSquares = 6;

var colors = [];

var pickedColor;

var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for (var index = 0; index < modeButtons.length; index++) {
		modeButtons[index].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");        
			this.classList.add("selected")
			this.textContent === "Easy kid" ? numberOfSquares = 3 : numberOfSquares = 6;        
			reset();
		});
	}
}

function setUpSquares() {
	for(var index = 0; index < squares.length; index++) {
		//add click Listener to tbe square
		squares[index].addEventListener("click", function() {
	
		var clickedColor = this.style.backgroundColor;
	
		if (clickedColor === pickedColor) {
			changeColors(clickedColor);
			//messageDisplay.textContent = "won";
			confirm("you won RGB rockstar");
			resetButton.textContent = "Play again?"
			h1.style.backgroundColor = clickedColor; 
		}
	
		else {
			this.style.backgroundColor = "#232323";
			//messageDisplay.textContent = "loser";
		}
	});
}

 
function changeColors(color) {
    //loop through all squares
    for (var index = 0; index < squares.length; index++) {
        //change each color to match given color  
        squares[index].style.backgroundColor = color;    
    } 
}

function pickdColor(params) {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (var index = 0; index < num; index++) {
        arr.push(randomColor());
    }
    return arr;
}
}

function reset() {
    //generate random colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickdColor();
    //change color Display to macth picked color 
    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "New Colors"

    messageDisplay.textContent = "";
    //change the colors of the square
    for (var index = 0; index < squares.length; index++) {
        if (colors[index]) {
			squares[index].style.display = "block";
            squares[index].style.background = colors[index];
        }

        else {
            squares[index].style.display = "none";    
        }
    }

    h1.style.backgroundColor = "steelblue";   
}

resetButton.addEventListener("click", function() {
    //generate random colors
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickdColor();
    //change color Display to macth picked color 
    colorDisplay.textContent = pickedColor;

    this.textContent = "New Colors"

    messageDisplay.textContent = "";
    //change the colors of the square
    for (var index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = colors[index];
    }
    h1.style.backgroundColor = "steelblue";   
});

colorDisplay.textContent = pickedColor; 

for(var index = 0; index < squares.length; index++) {
    //add click Listener to tbe square
    squares[index].addEventListener("click", function() {

    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
        changeColors(clickedColor);
		//messageDisplay.textContent = "won";
		//confirm("you won RGB rockstar");
        resetButton.textContent = "Play again?"
        h1.style.backgroundColor = clickedColor; 
    }

    else {
        this.style.backgroundColor = "#232323";
        //messageDisplay.textContent = "loser";
	}
	
	});
}
 
function changeColors(color) {
    //loop through all squares
    for (var index = 0; index < squares.length; index++) {
        //change each color to match given color  
        squares[index].style.backgroundColor = color;    
    } 
}

function pickdColor(params) {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (var index = 0; index < num; index++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    //pick a red color  from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green color from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue color from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";   
}