let habit = [
  "Turn on your favorite song while brushing.",
  "YouTube a video on your iPhone or iPad.",
  "Listen to a podcast or audio book.",
  "Brush your teeth while showering.",
  "Have one toothbrush for the shower and one for the vanity.",
  "An electronic toothbrush with an app that tells you where you're brushing.",
  "Brush with your partner or friend or roommate. Buddy system.",
  "Brush while on the toilet.",
  "Scroll through social media, TikTok, Insta, Twitter, and the usual suspects.",
  "Get different flavored toothpaste to make it more fun.",
  "Manually brush vs using an e-brush.",
  "Set an alarm.",
  "Think about how good it will feel to have clean teeth. Think positive thoughts.",
  "Get active and spontaneous: dance around, hop up and down, stand on one leg, etc.",
  "Make it a ritual. Brush mindfully, slowly, tooth by tooth, section by section, focus on the bristles, etc.",
  "Reward yourself!",
  "Netflix. Catch up on your shows.",
  "Brush with the PokeMon Smile app. Everyone needs a little Pikachu in their lives. 😂",
];

let ideaButton = document.getElementById("ideas-btn");

ideaButton.addEventListener("click", function () {
  let idea = document.querySelector(".ideas");
  idea.textContent = habit[Math.floor(Math.random() * habit.length)];
});

// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const stackTitle = document.querySelector(".stack-title");
const stackLeft = document.querySelector(".stack-left");
const stackRight = document.querySelector(".stack-right");
const handshakeImg = document.querySelector(".handshake-img");
const storiesTitle = document.querySelector(".stories-header-title");
const storiesDesc = document.querySelector(".stories-header-desc");
const quote = document.querySelector(".quotes-section-quote");
const ideasFade = document.querySelectorAll(".ideas-fade");
const ideasBox = document.querySelector(".ideas-box");
const storiesBox = document.querySelectorAll(".stories-box");

const options = {
  threshold: 0.4,
  //   rootMargin: "-200px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry);
    entry.target.classList.toggle("fade-in");
    observer.unobserve(entry.target);
  });
}, options);

observer.observe(stackTitle);
observer.observe(stackLeft);
observer.observe(stackRight);
observer.observe(handshakeImg);
observer.observe(storiesTitle);
observer.observe(storiesDesc);
observer.observe(quote);
observer.observe(ideasBox);

ideasFade.forEach((idea) => {
  observer.observe(idea);
});

storiesBox.forEach((idea) => {
  observer.observe(idea);
});
