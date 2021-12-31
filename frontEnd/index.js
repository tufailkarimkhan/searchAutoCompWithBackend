/* here i make variables of Class which i use inside html/css */
const searchInput = document.querySelector(".search");
const searchWrapper = document.querySelector(".wrapper");
const resultWrapper = document.querySelector(".result");

/*For rendering search result   */
function renderResults(results) {
  if (results.length) {
    results.forEach((element) => {
      resultWrapper.innerHTML += `
      <a href="https://${element.domain}" class ="list-link" >
        <li class="list">
          <img class="list-logo" src="${element.logo}" alt="Card image" >
          <span>${element.name} </span>
         </li>
      </a>`;
    });
  }
}

/* Atttaching event to search bar  */
searchInput.addEventListener("keyup", async () => {
  /* Initializing the variables and Elements  */
  resultWrapper.innerHTML = "";
  let input = searchInput.value;
  let requestUrl = `http://localhost:3000/search?query=${input}`;
  console.log(input);
  /* Fetching the result from external API */
  if (input.length) {
    let searchable = await fetch(requestUrl).then((data) => data.json());
    console.log(searchable);
    renderResults(searchable.message);
  }

  /* Toggling the hidden class resultWrapper */
  if (input.length <= 0) {
    resultWrapper.classList.add("hidden");
  } else {
    resultWrapper.classList.remove("hidden");
  }

  /* Attaching onmouseover event to  list */
  const lists = document.querySelectorAll(".list-link");
  lists.forEach((list) => {
    list.addEventListener("onmouseover", () => {
      console.log("hello list");
    });
  });
});
