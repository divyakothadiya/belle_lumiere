const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 2, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// Scroll event listener for header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function updateVideoSource() {
  const video = document.getElementById('responsive-video');
  const source = document.getElementById('video-source');
  const width = window.innerWidth;

  if (width <= 768) {
    source.src = 'mobile_vd.mp4';
  } else {
    source.src = 'laptop_vd.mp4';
  }

  video.load(); // Reload the video with the new source
}

window.addEventListener('resize', updateVideoSource);
window.addEventListener('load', updateVideoSource);