const emojiEl = document.querySelectorAll(".emoji");
const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".container");

var emojicontent = ""; // this variable is for storing name of the emoji

emojiEl.forEach((emojiEl) => {
  emojiEl.addEventListener("click", (even) => {
    removeActive();
    emojiEl.classList.add("active");
    emojicontent = even.target.innerText || even.target.parentNode.innerText;
  });
});

function removeActive() {
  emojiEl.forEach((emojiEl) => {
    emojiEl.classList.remove("active");
  });
}

btnEl.addEventListener("click", () => {
  containerEl.innerHTML = `<strong> Thank you!</strong>
  <br> 
  <br> 
  <strong>Feedback: ${emojicontent}</strong>
  <p>We'll use your feedback to improve our customer support.</p>
  `;
});
