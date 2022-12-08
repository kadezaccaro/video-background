const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
    video.style.opacity = 0;
  } else {
    btn.classList.remove("slide");
    video.play();
    video.style.opacity = 1;
  }
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
