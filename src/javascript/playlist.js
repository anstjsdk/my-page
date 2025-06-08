import inCover from "../assets/cover/in.jpg";
import movieCover from "../assets/cover/movie.jpg";
import toCover from "../assets/cover/to.jpg";
import springCover from "../assets/cover/spring.jpg";
import everythingCover from "../assets/cover/everything.jpg";
import cover1000 from "../assets/cover/1000.jpg";
import homeCover from "../assets/cover/home.jpg";

import inMusic from "../assets/music/in.mp3";
import movieMusic from "../assets/music/movie.mp3";
import toMusic from "../assets/music/to.mp3";
import springMusic from "../assets/music/spring.mp3";
import everythingMusic from "../assets/music/everything.mp3";
import music1000 from "../assets/music/1000.mp3";
import homeMusic from "../assets/music/home.mp3";

const audio = document.getElementById("audio");
const progressBar = document.getElementById("progressBar");
const musicCover = document.querySelector(".music-cover-img");
const title = document.querySelector(".title");
const pauseBtn = document.querySelector(".pause-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const playBtn = document.querySelector(".play-btn");

const tracks = [
  {
    title: "먼 훗날 우리",
    img: inCover,
    src: inMusic,
  },
  {
    title: "MOVIE",
    img: movieCover,
    src: movieMusic,
  },
  {
    title: "나와 내 이웃에게",
    img: toCover,
    src: toMusic,
  },
  {
    title: "봄눈",
    img: springCover,
    src: springMusic,
  },
  {
    title: "everything",
    img: everythingCover,
    src: everythingMusic,
  },
  {
    title: "천년지애",
    img: cover1000,
    src: music1000,
  },
  {
    title: "home-sweet-home",
    img: homeCover,
    src: homeMusic,
  },
];

let currentIndex = 0;

function setTrack(i) {
  musicCover.src = tracks[i].img;
  title.innerText = tracks[i].title;
  audio.src = tracks[i].src;
}

function playTrack(i) {
  currentIndex = i;
  setTrack(i);
  audio.load();
  audio.play();
  updatePlayState(true);
}

function updatePlayState(isPlaying) {
  if (isPlaying) {
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
  } else {
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
  }
}

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  playTrack(currentIndex);
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  playTrack(currentIndex);
};

audio.addEventListener("ended", () => {
  nextBtn.click();
});

audio.addEventListener("loadedmetadata", () => {
  progressBar.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

progressBar.addEventListener("mousedown", function (e) {
  const rect = progressBar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  if (!isNaN(audio.duration)) {
    const newTime = percent * audio.duration;
    audio.currentTime = newTime;
    progressBar.value = newTime;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !event.target.matches("input, textarea")) {
    event.preventDefault();
    togglePlayPause();
  }
});

pauseBtn.addEventListener("click", togglePlayPause);
playBtn.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    updatePlayState(true);
  } else {
    audio.pause();
    updatePlayState(false);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  setTrack(currentIndex);
  updatePlayState(audio && !audio.paused);
});
