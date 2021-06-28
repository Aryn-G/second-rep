const cats = [];

//
const foods = [];

const food1 = [];
const food2 = [];
const food3 = [];
const food4 = [];
const food5 = [];
// const food10 = [];

const holidays = [];

const holi1 = [];
const holi2 = [];
const holi3 = [];
const holi4 = [];
const holi5 = [];
// const holi10 = [];

const usStates = [];

const state1 = [];
const state2 = [];
const state3 = [];
const state4 = [];
const state5 = [];
// const state10 = [];

let cAnswer;
let cQuestion;
let perCorrect;
let currentVal;

const gameFrame = $("#main-game");

function emptyGame() {
  //want to start string transition
  $("#main-game").empty();
}
$(".play").on("click", function () {
  $(".play").empty().append(`<img src="./images/loading.gif"/>`);
  $(".play").prop("disabled", "disabled");
  const thisVal = $(this).val();

  $.ajax({
    //FOOD
    url: "http://jservice.io/api/category?id=49",
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

        if (thisVal == "play") {
          emptyGame();
          console.log(cats);
          for (let i = 0; i < cats.length; i++) {
            newBtn = $(
              `<button class='cat-btn cat' value='${cats[i][1]}'>${cats[i][0]}</button>`
            );
            gameFrame.append(newBtn);
          }
        }
      });
    });
  });
});

$(document).on("click", ".cat", function () {
  //When clicking on a Category
  //want to display buttons from 100 to 500 and 100
  //get this.val and check if it matches with on of the category names
  // foods, holidays, and usState

  const catVal = $(this).val();
  const catText = $(this).text();
  console.log(catVal);
  emptyGame();
  var temp = 100;
  var temp1 = 1;
  gameFrame.append(`<h1>${catText}</h1>`);

  if (catVal == "holidays") {
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
  } else if (catVal == "usStates") {
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
  } else if (catVal == "foods") {
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
});

$(document).on("click", ".num", function () {
  //just learned about eval("var name")
  //but am too lazy to change the rest of the code
  const numVal = $(this).val();
  currentVal = numVal;
  //When button clicked, give the player a random question to answer with that val
  assignQ(numVal);
});

function assignQ(value) {
  if (eval(value).length != 0) {
    const randomNum = Math.floor(Math.random() * eval(value).length);
    emptyGame();

    cQuestion = eval(value)[randomNum][0].question;
    cAnswer = eval(value)[randomNum][0].answer;

    newQuestion = $(`<h1>${cQuestion}</h1>`);
    gameFrame.prepend(newQuestion);
    gameFrame.append(
      `<div id="input-cont">
        <br/>
        <span id="user-span">
          What Is: 
        </span>
        <input class="user-answer" type="text" autofocus></input>
        <button class="cat-btn next">
          Next
        </button>
      </div>`
    );

    eval(value).splice(randomNum, 1);
  } else {
    emptyGame();
    for (let i = 0; i < cats.length; i++) {
      newBtn = $(
        `<button class='cat-btn cat' value='${cats[i][1]}'>${cats[i][0]}</button>`
      );
      gameFrame.append(newBtn);
    }
  }
}

$(document).on("keypress", ".user-answer", function (e) {
  if (e.which == 13) {
    userAnswer = $(".user-answer").val();
    $(".user-answer").val(userAnswer);
    $(".user-answer").prop("disabled", "disabled");
    $(".next").focus();

    perCorrect = similarity(cAnswer, userAnswer);

    console.log(
      "A: " +
        cAnswer +
        " You Put: " +
        userAnswer +
        " Persentage Correct: " +
        perCorrect
    );

    if (perCorrect >= 0.75) {
      console.log("cor");
      $(".user-answer").attr("id", "cor");
      gameFrame.append(
        `<br> <p id="user-span">Press right arrow to continue</p>`
      );
    } else {
      console.log("incor");
      $(".user-answer").attr("id", "incor");
      gameFrame.append(
        `<span id="user-span">Correct Answer is: ${cAnswer}<br> <p>Press right arrow to continue</p></span>`
      );
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
        (longerLength - editDistance(longer, shorter)) /
        parseFloat(longerLength)
      );
    }

    function editDistance(s1, s2) {
      s1 = s1.toLowerCase().replace(/([^a-z0-9])/g);
      s2 = s2.toLowerCase().replace(/([^a-z0-9])/g);

      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i == 0) costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue =
                  Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0) costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }

  }
});

$(document).on("click", ".next", function () {
  assignQ(currentVal);
});
$(document).on("keypress", ".next", function (e) {
  if (e.which == 13) {
    assignQ(currentVal);
  }
});
