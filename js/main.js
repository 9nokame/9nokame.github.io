gsap.registerPlugin(ScrollTrigger);

// BUTTON INTERACTIONS

const contactBtn = document.querySelector(".contact-button");

contactBtn.addEventListener("mouseenter", () => {
  party.confetti(contactBtn);
});

contactBtn.addEventListener("click", (e) => {
  createRipple(e);
});

// SPOTLIGHT MOUSE EFFECT

document.addEventListener("mousemove", (e) => {
  gsap.to(".spotlight", {
    x: e.clientX - 75,
    y: e.clientY - 75,
    duration: 0.2,
    ease: "power2.out",
  });
});

// BASIC ANIMATIONS

gsap.from("body", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

gsap.to(".logo", {
  y: 5,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "sine.inOut",
});

// SCROLL-BASED ANIMATIONS

const scrollFadeIn = (selector, options = {}) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play reverse play reverse", // replay when scrolling
      ...options.trigger,
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    ...options.anim,
  });
};

scrollFadeIn(".features .feat");
scrollFadeIn(".services .col .srv .text", {
  anim: { y: 20, opacity: 0, scale: 1 },
});
scrollFadeIn(".portfolio", {
  trigger: { start: "top 80%" },
});
scrollFadeIn(".about", {
  anim: { x: 0 },
});
scrollFadeIn(".contact", {
  anim: { y: 30, duration: 1.2 },
});

// PARALLAX EFFECTS

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

// MAGNET BUTTON

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
