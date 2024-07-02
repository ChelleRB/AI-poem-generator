function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Your answer herrrrr",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
