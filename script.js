console.log("Printing Services Management homepage loaded");

const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  }
  return "Good evening";
}

welcomeBtn.addEventListener("click", function () {
  message.textContent = getGreeting() + "! Welcome sa Printing Services Management. Ready na kami sa printing needs mo.";
});