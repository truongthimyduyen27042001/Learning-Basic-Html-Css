console.log("truong my duyen");
const text = document.getElementById("textSplit");
const listWords = document.getElementById("words");
console.log(text);
text.addEventListener("keyup", function () {
  const words = text.value.split(",");
  setListWords(words);
});

function setListWords(words) {
  listWords.innerHTML = "";
  for (var i = 0; i < words.length; i++) {
    const word = document.createElement("div");
    word.classList.add("word");
    word.innerText = words[i];
    if (words[i] !== "") {
      listWords.appendChild(word);
    }
  }
}
