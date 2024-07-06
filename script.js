var bgs = document.querySelectorAll(".bg");
var descs = document.querySelectorAll(".desc");
const slider = document.querySelector(".imgs");
const imgs = Array.from(slider.children);
let imgIndex = 0;
function updateSlider() {
  imgs.forEach((image) => {
    image.classList.remove("active", "next", "prev", "inactive");
  });
  descs.forEach((desc) => {
    desc.classList.remove("active");
  });
  imgs[imgIndex].classList.add("active");
  if (imgIndex - 1 >= 0) {
    imgs[imgIndex - 1].classList.add("prev");
  } else {
    imgs[imgs.length - 1].classList.add("prev");
  }
  if (imgIndex + 1 < imgs.length) {
    imgs[imgIndex + 1].classList.add("next");
  } else {
    imgs[0].classList.add("next");
  }
  imgs.forEach((image, index) => {
    if (
      index !== imgIndex &&
      index !== (imgIndex - 1 + imgs.length) % imgs.length &&
      index !== (imgIndex + 1) % imgs.length
    ) {
      image.classList.add("inactive");
    }
  });
  bgs.forEach((bg) => {
    bg.style.opacity = 0;
  });
  if (imgs[imgIndex].classList.contains("active")) {
    bgs[imgIndex].style.opacity = 1;
  }
  if (imgs[imgIndex].classList.contains("active")) {
    descs[imgIndex].classList.add("active");
  }
  imgIndex = (imgIndex + 1) % imgs.length;
}
updateSlider();
setInterval(updateSlider, 5000);

// ==========menu ==========
const menu = document.querySelector(".side-menu");

function openmenu() {
  menu.style.right = "0";
  console.log("ll");
}
function closemenu() {
  menu.style.right = "-300px";
}
// info showing
const info1 = document.querySelectorAll(".info");
const info2 = document.querySelectorAll(".info2");
const card = document.querySelectorAll(".card");


function showinfo(index) {
  card.forEach((card1) => {
    card1.classList.remove("active");
  });  info1.forEach((info) => {
    info.style.display = "block";
  });
  info2.forEach((info3) => {
    info3.style.display = "none";
  });
  info1[index - 1].style.display = "none";
  info2[index - 1].style.display = "block";
  card[index - 1].classList.add("active");
  card.forEach((card1) => {
    if (card1.classList.contains("active")) {
      card1.style.display = 'flex';
    }else{
      card1.style.display = 'none';
    }
  });
}
