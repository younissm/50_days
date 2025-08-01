const progress = document.getElementById("progress");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  progress.style.width =
    ((currentActive - 1) * 100) / (circles.length - 1) + "%";

  if (currentActive < circles.length) {
    next.disabled = false;
  } else {
    next.disabled = true;
  }
  if (currentActive > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }
}
