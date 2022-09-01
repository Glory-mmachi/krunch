const headNav = document.querySelector(".head--container");
const nav = document.querySelector(".headd");
const navHeight = nav.getBoundingClientRect().height;
var slider = document.querySelector(".slider");

// The entire slider container
var itemsCount = 3;
var itemSize = slider.scrollWidth / itemsCount;
var scrollByPixel = 0;

var slider_selector = document.querySelectorAll(".dot");

slider_selector.forEach((item) => {
  item.addEventListener("click", (event) => {
    let slide_id = event.target.value;
    slider.scrollTo(itemSize * (slide_id - 1), 0);
  });
});

//Sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headNavObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headNavObserver.observe(headNav);

const section3Img = document.querySelector(".whole");

const sectImages = document.querySelectorAll(".sec3-img");

section3Img.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("sec3-img")) {
    sectImages.classList.add("overlay");
  }
});
