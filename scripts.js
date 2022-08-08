let habit = [
  "Turn on your favorite song while brushing.",
  "YouTube a video on your iPhone or iPad.",
  "Listen to a podcast or audio book.",
  "Brush your teeth while showering.",
  "Have one toothbrush for the shower and one for the vanity.",
  "An electronic toothbrush with an app that tells you where you're brushing.",
  "Have signage taped up as a reminder, a Redditor had mentioned a picture of tooth decay (think black lungs from smoking cigarettes).",
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
  "Fear factor: think about how bad it would be if you got cavities, a receding gum, tooth decay, the cost of having to get and pay for a root canal.",
  "Netflix. Catch up on your shows.",
  "Brush with the PokeMon Smile app. Everyone needs a little Pikachu in their lives. 😂",
];

let ideaButton = document.getElementById("idea-button");

ideaButton.addEventListener("click", function () {
  let idea = document.querySelector(".idea");
  idea.textContent = habit[Math.floor(Math.random() * habit.length)];
});
// ideaButton.addEventListener("click", function () {
//   let idea = document.querySelector(".idea");
//   idea.textContent = habit[Math.floor(Math.random() * habit.length)];
// });
