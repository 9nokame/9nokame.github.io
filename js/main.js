gsap.registerPlugin(ScrollTrigger);

// Contact us button confetti
const btn = document.querySelector(".contact-button");
btn.addEventListener("mouseenter", () => {
  party.confetti(btn);
});

// Mouse spotlight
document.addEventListener("mousemove", (e) => {
  gsap.to(".spotlight", {
    x: e.clientX - 75,
    y: e.clientY - 75,
    duration: 0.2,
    ease: "power2.out",
  });
});

// Fade in on load
gsap.from("body", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

// Floating logo
gsap.to(".logo", {
  y: 5,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "sine.inOut",
});

// Parallax background
gsap.to(".landing", {
  backgroundPosition: "center 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".landing",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});

// Intro text scroll up
gsap.to(".intro-text", {
  y: -500,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".landing",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});

// Scroll trigger animation
gsap.from(".features .feat", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 85%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.from(".services .col .srv .text", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 85%",
  },
  x: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.from(".portfolio", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
  x: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.from(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%",
  },
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power2.out",
});

document.querySelectorAll(".magnet").forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", function () {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  });
});
