const cats = [];

//
const foods = [];
const holidays = [];
const usStates = [];

const food1 = [];
const food2 = [];
const food3 = [];
const food4 = [];
const food5 = [];

const holi1 = [];
const holi2 = [];
const holi3 = [];
const holi4 = [];
const holi5 = [];

const state1 = [];
const state2 = [];
const state3 = [];
const state4 = [];
const state5 = [];

let cAnswer;
let cQuestion;
let perCorrect;
let currentVal;
let currentPoint;
let currentParent;

let score = 0;

let prevPage;

const gameFrame = $("#main-game");

function emptyGame(no) {
  //want to start string transition

  $("#main-game").empty();
  if (no != "no") {
    gameFrame.append(`<button class="cat-btn back"></button>`);
  }
}
// gameFrame.toggleClass("anim");
// setTimeout(temp, 2000);
// function temp() {
//   gameFrame.toggleClass("anim");
// }

$(".play").on("click", function () {
  $(".play").empty().append(`<img src="./images/loading.gif"/>`);
  $(".play").prop("disabled", "disabled");
  const thisVal = $(this).val();

  $.ajax({
    //FOOD
    url: "https://jservice.io/api/category?id=49",
    method: "GET",
  }).then(function (res1) {
    const clueArr = res1.clues;
    clueArr.sort((a, b) => a.value - b.value);

    for (let i = 0; i < clueArr.length; i++) {
      if (clueArr[i].value == null) {
        clueArr.splice(i, 1);
        res1.clues_count--;
      } else if (clueArr[i].value == 100) {
        food1.push(clueArr.splice(i, 1));
        res1.clues_count--;
      } else if (clueArr[i].value == 200) {
        food2.push(clueArr.splice(i, 1));
        res1.clues_count--;
      } else if (clueArr[i].value == 300) {
        food3.push(clueArr.splice(i, 1));
        res1.clues_count--;
      } else if (clueArr[i].value == 400) {
        food4.push(clueArr.splice(i, 1));
        res1.clues_count--;
      } else if (clueArr[i].value == 500) {
        food5.push(clueArr.splice(i, 1));
        res1.clues_count--;
      } /*else if (clueArr[i].value == 1000) {
        food10.push(clueArr.splice(i, 1));
        res1.clues_count--;
      }*/
    }

    food1.splice(14, 1);
    foods.push(
      "Foods",
      "foods",
      food1,
      food2,
      food3,
      food4,
      food5
      // food10
    );

    cats.push(foods);

    $.ajax({
      url: "http://jservice.io/api/category?id=622",
      method: "GET",
    }).then(function (res2) {
      const clueArr = res2.clues;
      clueArr.sort((a, b) => a.value - b.value);

      for (let i = 0; i < clueArr.length; i++) {
        if (clueArr[i].value == null) {
          clueArr.splice(i, 1);
          res2.clues_count--;
        } else if (clueArr[i].value == 100) {
          holi1.push(clueArr.splice(i, 1));
          res2.clues_count--;
        } else if (clueArr[i].value == 200) {
          holi2.push(clueArr.splice(i, 1));
          res2.clues_count--;
        } else if (clueArr[i].value == 300) {
          holi3.push(clueArr.splice(i, 1));
          res2.clues_count--;
        } else if (clueArr[i].value == 400) {
          holi4.push(clueArr.splice(i, 1));
          res2.clues_count--;
        } else if (clueArr[i].value == 500) {
          holi5.push(clueArr.splice(i, 1));
          res2.clues_count--;
        } /*else if (clueArr[i].value == 1000) {
          holi10.push(clueArr.splice(i, 1));
          res2.clues_count--;
        }*/
      }
      holidays.push(
        "Holidays and Observances",
        "holidays",
        holi1,
        holi2,
        holi3,
        holi4,
        holi5
        // holi10
      );

      cats.push(holidays);

      $.ajax({
        url: "http://jservice.io/api/category?id=17",
        method: "GET",
      }).then(function (res3) {
        const clueArr = res3.clues;
        clueArr.sort((a, b) => a.value - b.value);

        for (let i = 0; i < clueArr.length; i++) {
          if (clueArr[i].value == null) {
            clueArr.splice(i, 1);
            res3.clues_count--;
          } else if (clueArr[i].value == 100) {
            state1.push(clueArr.splice(i, 1));
            res3.clues_count--;
          } else if (clueArr[i].value == 200) {
            state2.push(clueArr.splice(i, 1));
            res3.clues_count--;
          } else if (clueArr[i].value == 300) {
            state3.push(clueArr.splice(i, 1));
            res3.clues_count--;
          } else if (clueArr[i].value == 400) {
            state4.push(clueArr.splice(i, 1));
            res3.clues_count--;
          } else if (clueArr[i].value == 500) {
            state5.push(clueArr.splice(i, 1));
            res3.clues_count--;
          } /*else if (clueArr[i].value == 1000) {
            state10.push(clueArr.splice(i, 1));
            res3.clues_count--;
          }*/
        }

        usStates.push(
          "US States",
          "usStates",
          state1,
          state2,
          state3,
          state4,
          state5
          // state10
        );

        cats.push(usStates);
        console.log(cats);
        if (thisVal == "play") {
          loadCats();
        }
      });
    });
  });
});
let catVal;
let catText;
$(document).on("click", ".cat", function () {
  //When clicking on a Category
  //want to display buttons from 100 to 500 and 100
  //get this.val and check if it matches with on of the category names
  // foods, holidays, and usState

  catVal = $(this).val();
  catText = $(this).text();
  loadNums(catVal);
  prevPage = "loadCats()";
});


$(document).on("click", ".num", function () {
  //just learned about eval("var name")
  //but am too lazy to change the rest of the code
  const numVal = $(this).val();
  const point = $(this).text();
  const parent = $(this).attr("parent");
  currentParent = parent;
  currentPoint = point;
  currentVal = numVal;

  prevPage = "loadNums(catVal)";
  //When button clicked, give the player a random question to answer with that val
  assignQ(numVal, point, parent);
});

function assignQ(value, point, par) {
  if (eval(value).length != 0) {
    const randomNum = Math.floor(Math.random() * eval(value).length);
    emptyGame();

    $(".score").text("Score: " + score);

    cQuestion = eval(value)[randomNum][0].question;
    cAnswer = eval(value)[randomNum][0].answer;

    newQuestion = $(`<h1>${cQuestion}</h1>`);
    gameFrame.append(newQuestion);
    gameFrame.append(
      ` 
        <br />
        <br />
        <span id="user-span">
          What Is: 
        </span>
        <div id="input-cont">
          <br />
          <input class="user-answer" type="text" point="${point}" autofocus></input>
          <button class="cat-btn next"></button>
      </div>`
    );
    $(".user-answer").focus();

    
  } else {
    //delete the array using attr parent
    loadCats();
  }
}
let submited = 0;
$(document).on("keypress", ".user-answer", function (e) {
  if (e.which == 13 && submited == 0) {
    submit();
  }
});

$(document).on("click", ".next", function () {
  if (submited == 1) {
    assignQ(currentVal, currentPoint, currentParent);
    submited = 0;
  } else {
    submit();
  }
});
$(document).on("keypress", ".next", function (e) {
  if (e.which == 13 && submited == 1) {
    assignQ(currentVal, currentPoint, currentParent);
    submited = 0;
  }
});
$(document).on("click", ".back", function () {
  eval(prevPage);
});
$(document).on("keypress", ".back", function (e) {
  if (e.which == 13) {
    eval(prevPage);
  }
});

function checkForEmpty() {
  if (
    food1.length == 0 &&
    food2.length == 0 &&
    food3.length == 0 &&
    food4.length == 0 &&
    food5.length == 0 &&
    holi1.length == 0 &&
    holi2.length == 0 &&
    holi3.length == 0 &&
    holi4.length == 0 &&
    holi5.length == 0 &&
    state1.length == 0 &&
    state2.length == 0 &&
    state3.length == 0 &&
    state4.length == 0 &&
    state5.length == 0
  ) {
    noMoreCats();
  }
}

function loadCats() {
  emptyGame("no");
  $(".score").text("Score: " + score);
  checkForEmpty();
  for (let i = 0; i < cats.length; i++) {
    if (cats[i].length != 2) {
      let empty = 0;
      for (let j = 2; j < cats[i].length; j++) {
        if (cats[i][j].length == 0) {
          empty++;
        }
      }
      if (empty != 5) {
        newBtn = $(
          `<button class='cat-btn cat' value='${cats[i][1]}'>${cats[i][0]}</button>`
        );
        gameFrame.append(newBtn);
      }
    }
  }
}

function noMoreCats() {
  $(".score").text("");
  // hide the text
  emptyGame("no");
  gameFrame.append("<h1> You finished! \n Final Score: " + score + "</h1>");
}

function submit() {
  userAnswer = $(".user-answer").val();
  $(".user-answer").val(userAnswer);
  $(".user-answer").prop("disabled", "disabled");
  $(".next").focus();
  eval(currentVal).splice(randomNum, 1);

  perCorrect = similarity(cAnswer, userAnswer);

  console.log(
    "A: " +
      cAnswer +
      " You Put: " +
      userAnswer +
      " Persentage Correct: " +
      perCorrect
  );
  if (
    cAnswer
      .toLowerCase()
      .replace(/(\((.*?)\))/g, "")
      .replace(/(\<(.*?)\>)/g, "").length > 6
  ) {
    if (perCorrect >= 0.692) {
      $(".user-answer").attr("id", "cor");
      score += eval($(".user-answer").attr("point"));
      $(".score").text("Score: " + score);
    } else {
      $(".user-answer").attr("id", "incor");
      score -= eval($(".user-answer").attr("point"));
      $(".score").text("Score: " + score);
      gameFrame.append(
        `<span id="user-span">Correct Answer is: ${cAnswer}<br></span>`
      );
    }
  } else {
    if (perCorrect >= 0.8) {
      $(".user-answer").attr("id", "cor");
      score += eval($(".user-answer").attr("point"));
      $(".score").text("Score: " + score);
    } else {
      $(".user-answer").attr("id", "incor");
      score -= eval($(".user-answer").attr("point"));
      $(".score").text("Score: " + score);
      gameFrame.append(
        `<span id="user-span">Correct Answer is: ${cAnswer}<br></span>`
      );
    }
  }

  function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (
      (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
    );
  }

  function editDistance(s1, s2) {
    s1 = s1.toLowerCase().replace(/(\((.*?)\))/g, "");
    s1 = s1.replace(/(\<(.*?)\>)/g, "");
    s2 = s2.toLowerCase().replace(/(\((.*?)\))/g, "");
    s2 = s2.replace(/(\<(.*?)\>)/g, "");

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0) costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }
  submited = 1;
}

function loadNums(val) {
  emptyGame();
  gameFrame.append(`<h1>${catText}</h1>`);
  prevPage = "loadCats()"
  var temp = 100;
  var temp1 = 1;
  
  if (val == "holidays") {
    for (let i = 2; i < holidays.length; i++) {
      newNumBtn = $(
        `<button class='cat-btn num' value='holi${temp1}' parent="holidays">${temp}</button>`
      );
      if (eval(`holi${temp1}`).length != 0) {
        gameFrame.append(newNumBtn);
      }
      temp += 100;
      temp1++;
    }
  } else if (val == "usStates") {
    for (let i = 2; i < usStates.length; i++) {
      newNumBtn = $(
        `<button class='cat-btn num' value='state${temp1}' parent="usState">${temp}</button>`
      );
      if (eval(`state${temp1}`).length != 0) {
        gameFrame.append(newNumBtn);
      }
      temp += 100;
      temp1++;
    }
  } else if (val == "foods") {
    for (let i = 2; i < foods.length; i++) {
      newNumBtn = $(
        `<button class='cat-btn num' value='food${temp1}' parent="foods">${temp}</button>`
      );
      if (eval(`food${temp1}`).length != 0) {
        gameFrame.append(newNumBtn);
      }
      temp += 100;
      temp1++;
    }
  }
}
