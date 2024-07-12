function randomFace() {
  return Math.floor(Math.random() * 2) + 1;
}

btnRandomize.addEventListener("click", () => {
  if (!isInQueue) {
    isInQueue = true;
    moneyImg.style = "transform: rotateY(270deg)";
    setTimeout(() => {
      moneyImg.style = "transform: rotateY(0deg)";
      let randomNumber = randomFace();
      if (randomNumber == 1) {
        front++;
        frontScore.innerHTML = front;
        moneyImg.src = "./assets/uz.jpg";
      } else if (randomNumber == 2) {
        back++;
        moneyImg.src = "./assets/arxa.jpg";
        backScore.innerHTML = back;
      }
      
      isInQueue = false;
    }, 1000);

    frontScore.innerHTML = front;
    backScore.innerHTML = back;
  }
});
