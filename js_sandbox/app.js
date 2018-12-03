document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  let number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  document.querySelector(".jokes").textContent =
    "Jokes you cannot refuse, comming...";
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let li = "";
      if (response.type === "success") {
        response.value.forEach(joke => {
          li += `<li>${joke.joke}</li>`;
        });
      } else {
        li = "<li>Something is Wrong</li>";
      }
      document.querySelector(".jokes").innerHTML = li;
    }
  };

  xhr.send();
  e.preventDefault();
}
