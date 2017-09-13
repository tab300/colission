// Entry point of the whole process
button.onclick = function(){
  jumpStart();
	// Disable the button
	this.disabled = true;
}

// Reset the boxes to their original positions
rbutton.onclick = function(){
	// Original positionf of the boxes
  blueBox.style.left = 8 + "px";
  redBox.style.left = 400 + "px";
  // Enable the start up button
	button.disabled = false;
}

// The main function of the process with all the logic of the collision
function jumpStart(){
  var bluePos = blueBox.getBoundingClientRect();
  var redPos = redBox.getBoundingClientRect();

  // Position coordinates for each of the boxes
  blueLeft = bluePos.left;
  redLeft = redPos.left;
  blueWidth = bluePos.width;
  redWidth = redPos.width;

  // Logic for the collision
  function collide(){
    var blueHCenter = blueLeft + blueWidth/2;
    var redHCenter = redLeft + redWidth/2;
    var DiffHCenter = Math.abs(blueHCenter - redHCenter);

    if(DiffHCenter < (blueWidth/2 + redWidth/2)){
      blueBox.style.backgroundColor = "orange";
      redBox.style.backgroundColor = "green";
    }else{
      blueBox.style.backgroundColor = "";
      redBox.style.backgroundColor = "";
    }
  }

  // Function to check and stop the boxes after they have collided
  function checkStop(){
    if(blueLeft - redLeft > 100){
      clearInterval(boxMoveInterval);
    }
  }

  // Function to move boxes toward each other
  function moveBoxes(){
		// Increment of position for blueBox
    blueBox.style.left = blueLeft + "px";
    blueLeft = blueLeft + 2;
		// Increment of position for redBox
    redBox.style.left = redLeft + "px";
    redLeft = redLeft - 2;
		// Collision function
    collide();
		// Check and stop function
    checkStop();
  }
	// Interval timer for the collision process
  var boxMoveInterval = setInterval(moveBoxes, 20);
}
