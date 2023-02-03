const track = document.getElementById("image-track"); /* Select the image track*/

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;/* Listen to mousedown event, and when that happens keep track of the mousedown position, stored as mousedownat */

const handleOnUp = () => { /*  */
  track.dataset.mouseDownAt = "0";  /* Set mousedownat back to 0 to stop the imagetrack from scrolling on its own  */
  track.dataset.prevPercentage = track.dataset.percentage; /* Store the position of the slider when the mouse is released */
}

const handleOnMove = e => { /* Mouse movement */
  if(track.dataset.mouseDownAt === "0") return; /* This function doesnt know when the mouse is down, making the slider move without this line. Mousedownat will be 0 when the mouse isnt pressed, and then return and skip the next lines */
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, /* Get the delta of the mouse by subrtracting the mousedownat position with the mouses x position at the current moment */
        maxDelta = window.innerWidth ; /* Set the max distance for the mouse to move to 1/2 of the width of the window */ 
  
  const percentage = (mouseDelta / maxDelta) * -100, /* Converting the mousedelta to a percentage of the total slider length        NOTE: This is meant to take the x position of the mouse, regardless of where on the screen you click and drag, and the use the length that you dragged to calculate how far the image track has to move.  */
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage, /* Add the current positon to the last positon to stop the slider from reverting to 0 every time you press it */
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100); /* Set the max and min value of the slider to prevent the user from scrolling too far */
  
  track.dataset.percentage = nextPercentage; /* Store the position of the slider to not reset it every time */
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 2600, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) { /* Loop over images */
    image.animate({
      objectPosition: `${100 + nextPercentage}% center` /* Create parralax effect using reframing, by essentially sliding the "frame" of the image*/
    }, { duration: 2600, timingfunction: "ease-in" , fill: "forwards"}); /* Set the duration of the animation, and fill to forwards so that it isnt reset every time.  */
  }
};

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);