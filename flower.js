function flower(petalsClass, radius) {
  let petals = Array.from(document.getElementsByClassName(petalsClass));
  let centerX = -50;
  let centerY = 125;
  let angle = 0;
  let step = (2 * Math.PI) / petals.length;
  let i = 0;

  const interval = setInterval(() => {
    if (i === petals.length) {
      clearInterval(interval);
      return;
    }

    let x = centerX + radius * Math.cos(angle);
    let y = centerY + radius * Math.sin(angle);
    angle += step;

    petals[i].style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
    petals[i].style.opacity = 1;
    i++;
  }, 500);
}

flower("big-petal", 90);
flower("small-petal", 86.25);

document.getElementById("middle").scrollIntoView({
  behavior: "smooth",
  block: "center",
  inline: "center",
});
