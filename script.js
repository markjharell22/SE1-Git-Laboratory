console.log("PrintEase homepage loaded");

const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

welcomeBtn.addEventListener("click", function () {
  message.textContent = "Welcome sa PrintEase! Ready na kami sa printing needs mo.";
});