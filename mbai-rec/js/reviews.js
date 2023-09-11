const firstVideo = document.querySelector(".js-first-rev-video");
const secondVideo = document.querySelector(".js-second-rev-video");
const thirdVideo = document.querySelector(".js-third-rev-video");
const fourthVideo = document.querySelector(".js-fourth-rev-video");
const playButton = document.querySelectorAll(".js-play-button");
const videoNames = document.querySelectorAll(".js-video-name");

playButton[0].addEventListener("click", () => {
  playButton[0].style.display = "none";
  videoNames[0].style.display = "none";
  firstVideo.setAttribute("controls", "true");
  firstVideo.style.display = "block";
  firstVideo.play();
});

playButton[1].addEventListener("click", () => {
  playButton[1].style.display = "none";
  videoNames[1].style.display = "none";
  secondVideo.setAttribute("controls", "true");
  secondVideo.style.display = "block";
  secondVideo.play();
});

playButton[2].addEventListener("click", () => {
  playButton[2].style.display = "none";
  videoNames[2].style.display = "none";
  thirdVideo.setAttribute("controls", "true");
  thirdVideo.style.display = "block";
  thirdVideo.play();
});

playButton[3].addEventListener("click", () => {
  playButton[3].style.display = "none";
  videoNames[3].style.display = "none";
  fourthVideo.setAttribute("controls", "true");
  fourthVideo.style.display = "block";
  fourthVideo.play();
});
