import randomImg4 from "../assets/randomimg/random4.jpg";
import randomImg5 from "../assets/randomimg/random5.jpg";
import randomImg6 from "../assets/randomimg/random6.jpg";

const imgBox2 = document.querySelector(".img2-box");

const imgs = [randomImg4, randomImg5, randomImg6];

const todayImg = imgs[Math.floor(Math.random() * imgs.length)];

if (imgBox2) {
  imgBox2.style.background = `url(${todayImg}) center center / cover no-repeat`;
}
