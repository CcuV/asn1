let grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
  49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

function validateGrade (g) {
  g = Number(g);
  if (g > 100 || g < 0) {
    return false;
  } else {
    return true;
  }
}

let letterGrades = [];
let letterRows = document.querySelectorAll('.left .row');
let letterResults = document.querySelectorAll('.top .num');

function initLetterGrades () {
  letterGrades = [];
  letterRows.forEach(function (row) {
    letterGrades.push({
      name: row.querySelector('.type').textContent,
      value: Number(row.querySelector('input').value)
    });
  });
  console.log(letterGrades);
  drawResult();
}

initLetterGrades();

document.getElementById('new').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (validateGrade(e.target.value)) {
      grades.push(Number(e.target.value));
      e.target.value = '';
      drawResult();
    } else {
      window.alert('Please input a score > 0 and < 100');
    }
  }
});

document.querySelectorAll('.left .row input').forEach(function (input, index) {
  input.addEventListener('change', function (e) {
    let num = Number(e.target.value);

    if (index > 0 && num >= letterGrades[index - 1].value) {
      window.alert('Input value should not bigger or equal than value of ' + letterGrades[index - 1].name);
      e.target.value = letterGrades[index].value.toFixed(2);
    } else if (index !== letterGrades.length - 1 && num <= letterGrades[index + 1].value) {
      window.alert('Input value should not smaller or equal than value of ' + letterGrades[index + 1].name);
      e.target.value = letterGrades[index].value.toFixed(2);
    } else if (validateGrade(e.target.value)) {
      initLetterGrades();
    } else {
      window.alert('Please input a score > 0 and < 100');
      e.target.value = letterGrades[index].value.toFixed(2);
    }
  });
});

function drawResult () {
  letterGrades.forEach(function (g) {
    g.count = 0;
  });
  grades.forEach(function (g) {
    for (let grade of letterGrades) {
      if (grade.name === 'Max') {
        // ignore Max
        continue;
      }
      if (g >= grade.value) {
        grade.count++;
        return;
      }
    }
  });

  letterResults.forEach(function (result, index) {
    result.style.width = letterGrades[index + 1].count * 50 + 'px';
  });
}
