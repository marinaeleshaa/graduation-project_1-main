
// document.addEventListener("DOMContentLoaded", function() {
//     const counterElement = document.getElementById("about");
//     let count = 0;
//     const counterInterval = setInterval(() => {
//       count++;
//       counterElement.textContent = count;
//       counterElement.style.transform = "translateY(0)";
//       if (count === 20) {
//         clearInterval(counterInterval);
//       }
//     }, 100);
//   });
  





let counter = 0;
let scrollStarted = false;

window.addEventListener('scroll', function() {
  if (!scrollStarted) {
    scrollStarted = true;
    startCounter();
  }
});

function startCounter() {
  const counterElement = document.getElementById('about');
  
  function updateCounter() {
    counter++;
    counterElement.textContent = counter;
    if (counter === 20) {
      stopCounter();
    }
  }
  
  const scrollInterval = setInterval(updateCounter, 100); // Adjust speed as needed
  
  function stopCounter() {
    clearInterval(scrollInterval);
  }
}
