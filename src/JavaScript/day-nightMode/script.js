var darkmode = localStorage.getItem("night");
var btn = document.getElementById("btn");
var body = document.getElementById("bg");

const nightMode = () => {
  document.body.classList.add("night");

  localStorage.setItem("night", "enabled");
};

const dayMode = () => {
  document.body.classList.remove("night");

  localStorage.setItem("night", "null");
};

if (darkmode === "enabled") {
  nightMode();
}

btn.addEventListener("click", () => {
  darkmode = localStorage.getItem("night");

  if (darkmode !== "enabled") {
    nightMode();
  } else {
    dayMode();
  }
});
// var nightMode = () => {
//   localStorage.setItem(nightMode, bg.classList.toggle("night"));
// };

// btn.addEventListener("click", nightMode);
