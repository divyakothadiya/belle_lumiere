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
    source.src = 'fullscreen_video.mp4';
  }

  video.load(); // Reload the video with the new source
}

window.addEventListener('resize', updateVideoSource);
window.addEventListener('load', updateVideoSource);


document.querySelector('.contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Get form values 
  var name = document.getElementById('name').value; 
  var email = document.getElementById('email').value; 
  var message = document.getElementById('message').value;

  // Send email using emailjs
  emailjs.send('service_3akpmbv', 'template_v967f8w', { 
    name: name, 
    email: email, 
    message: message 
  }, 'Us9MpQC8NAA63vWm4')
  .then(function() {
    console.log('Email successfully sent!');
    
    // Reset the form after successful submission
    document.querySelector('.contact-form').reset();

    // Optional: You can also show a success message to the user
    alert('Thank you for your message. We will get back to you shortly!');
  })
  .catch(function(error) {
    console.error('Error sending email:', error);
    
    // Optional: Display an error message to the user
    alert('There was an issue sending your message. Please try again.');
  });
});