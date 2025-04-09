var vid = document.getElementById('scrollVideo');

// Play the video when user scrolls
window.onscroll = function () {
  vid.play();  // Ensure the video plays when user scrolls
};

// Update video current time based on scroll
setInterval(function () {
  vid.currentTime = window.pageYOffset / 400;
}, 40);

// Clone scroll list functionality (this part remains the same)
window.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".scroller");
  const scrollList = scroller.querySelector(".scroll-list");

  const clone = scrollList.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  scroller.appendChild(clone);
});
