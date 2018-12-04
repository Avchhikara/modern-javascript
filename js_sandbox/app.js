document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getAPI);

function getText() {
  fetch("text.txt")
    .then(res => res.text())
    .then(data => (document.querySelector(".output").textContent = data));
}

function getJSON() {
  let out = "";
  fetch("customers.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(val => (out += `<li>${val.name}</li>`));
      document.querySelector(".output").innerHTML = out;
    });
}

function getAPI() {
  let out = "";
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      data.forEach(val => (out += `<li>${val.login}</li>`));
      document.querySelector(".output").innerHTML = out;
    });
}
