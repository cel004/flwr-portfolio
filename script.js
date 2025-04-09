var vid = document.getElementById('scrollVideo');

window.onscroll = function () {
  vid.play();
};

setInterval(function () {
  vid.currentTime = window.pageYOffset / 400;
}, 40);

window.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".scroller");
  const scrollList = scroller.querySelector(".scroll-list");

  const clone = scrollList.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  scroller.appendChild(clone);
});
