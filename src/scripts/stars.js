const WIDTH = document.body.offsetWidth;
const HEIGHT = document.body.offsetHeight;
const STARS = 200;
const cont = document.getElementById("stars.main");
function randomPosition() {
  return {
    x: Math.random() * WIDTH,
    y: Math.random() * HEIGHT,
  };
}

function addStar({ x, y }) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.animationDuration = 4 + Math.random() * 20 + "s";
  if (Math.round(Math.random() * 1) === 1) {
    star.style.left = x + "px";
  } else {
    star.style.right = x + "px";
  }
  star.style.top = y + "px";
  cont.appendChild(star);
}

for (let x = 0; x < STARS; x++) {
  addStar(randomPosition());
}
