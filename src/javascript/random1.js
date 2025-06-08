import randomImg1 from "../assets/randomimg/random1.jpg";
import randomImg2 from "../assets/randomimg/random2.jpg";
import randomImg3 from "../assets/randomimg/random3.jpg";

const imgBox = document.querySelector(".img1-box");

const imgs = [randomImg1, randomImg2, randomImg3];

const todayImg = imgs[Math.floor(Math.random() * imgs.length)];

if (imgBox) {
  imgBox.style.background = `url(${todayImg}) center center / cover no-repeat`;
}
