const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.code === "ArrowUp") {
    jump();
  }
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 500);
  }
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 70 && cactusLeft > 30 && dinoTop >= 140) {
    alert("💀 Game Over!");
    location.reload();
  }
}, 10);
