
document.getElementById("popButton").addEventListener("click", function() {
  // Animate the lid opening
  document.querySelector(".lid").style.top = "0";
  
  // Show the Pongal image and message after the lid opens
  setTimeout(function() {
    document.querySelector(".pongal-image").style.display = "block";
    document.querySelector(".message").style.display = "block";
  }, 500); // Delay message and image appearance after lid animation
});

