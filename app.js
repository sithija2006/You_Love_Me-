// DOM Elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("container");

// Make the "No" button move away when hovered over
noBtn.addEventListener("mouseover", () => {
  // Randomize position
  const randomX = Math.random() * 80; // 0 to 80% of the viewport width
  const randomY = Math.random() * 80; // 0 to 80% of the viewport height
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}%`;
  noBtn.style.top = `${randomY}%`;
});

// Show the message when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  // Change the entire background to white
  document.body.style.backgroundColor = "white";
  
  // Hide the buttons and show the message
  container.innerHTML = "<h1 class='text-1xl font-bold text-pink-600'>     I knew it! I Love You Too!  💖💖💖</h1>";
});
