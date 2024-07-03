function displayPoem(Response) {
  new Typewriter("#poem", {
    strings: Response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "54a0b1t705328c1ff5aabef7485od2a3";
  let context =
    "You are a creative AI writer. You write 4 line answers in HTML format eg. <p> Your answer</p>. Sign the end of the poem within <strong>'Yours Sincerely'</strong> Not the beginning";
  let prompt =
    "User instructions: Always Rengenerate a new short and unique poem about ${instructionsInput.value}";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating your poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
