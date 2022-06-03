var grades = [
  65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.0, 81.43, 86.22, 88.33,
  9.03, 49.93, 52.34, 53.11, 50.1, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54,
  90.0, 71.11, 80.01,
];
renderHistogram();
document.querySelector("input").addEventListener("keypress", (value) => {
  console.log(value);
  if (value.code === "Enter") {
    if (!isNaN(Number(value.target.value))) {
      grades.push(value.target.value);
      renderHistogram();
    }
  }
});

function renderHistogram() {
  Array.from(document.querySelectorAll(".histogram-item")).forEach(
    (item) => (item.innerHTML = "")
  );
  grades.forEach((item) => {
    if (item < 50) {
      document.querySelector(".histogram-item-0").innerHTML += "O";
    } else if (item >= 50 && item < 55) {
      document.querySelector(".histogram-item-50").innerHTML += "O";
    } else if (item >= 55 && item < 60) {
      document.querySelector(".histogram-item-55").innerHTML += "O";
    } else if (item >= 60 && item < 65) {
      document.querySelector(".histogram-item-60").innerHTML += "O";
    } else if (item >= 65 && item < 70) {
      document.querySelector(".histogram-item-65").innerHTML += "O";
    } else if (item >= 70 && item < 75) {
      document.querySelector(".histogram-item-70").innerHTML += "O";
    } else if (item >= 75 && item < 80) {
      document.querySelector(".histogram-item-75").innerHTML += "O";
    } else if (item >= 80 && item < 85) {
      document.querySelector(".histogram-item-80").innerHTML += "O";
    } else if (item >= 85 && item < 90) {
      document.querySelector(".histogram-item-85").innerHTML += "O";
    } else if (item >= 90 && item < 95) {
      document.querySelector(".histogram-item-90").innerHTML += "O";
    } else if (item >= 95 && item < 100) {
      document.querySelector(".histogram-item-95").innerHTML += "O";
    }
  });
}
