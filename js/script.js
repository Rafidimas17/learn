const dataId = document.getElementById("judul");
dataId.style.color = "green";

const dataTag = document.getElementsByTagName("p");
for (i = 0; i < dataTag.length; i++) {
  dataTag[i].style.color = "black";
}

const dataClass = document.getElementsByClassName("p1");
dataClass[0].innerHTML = "Etika Profesi";

const a = document.querySelector("#a");
a.style.backgroundColor = "lightblue";

const p = document.querySelectorAll("li");
for (i = 0; i < p.length; i++) {
  p[i].style.color = "brown";
}

const attribute = document.getElementById("judul");
attribute.setAttribute("name", "Listi");

const remove = document.getElementsByTagName("a");
remove[0].removeAttribute("href");
