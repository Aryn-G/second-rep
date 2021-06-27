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

const gameFrame = $("#main-game");


function emptyGame() {
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
      temp += 100;
      temp1++;
      gameFrame.append(newNumBtn);
    }
  } else if (catVal == "usStates") {
    for (let i = 2; i < usStates.length; i++) {
      newNumBtn = $(
        `<button class='cat-btn num' value='state${temp1}' parent="usState">${temp}</button>`
      );
      temp += 100;
      temp1++;
      gameFrame.append(newNumBtn);
    }
  } else if (catVal == "foods") {
    for (let i = 2; i < foods.length; i++) {
      newNumBtn = $(
        `<button class='cat-btn num' value='food${temp1}' parent="foods">${temp}</button>`
      );
      temp += 100;
      temp1++;
      gameFrame.append(newNumBtn);
    }
  }
});

$(document).on("click", ".num", function () {
  //just learned about eval("var name")
  //but am too lazy to change the rest of the code

  //When button clicked, give the player a random question to answer with that val
  const numVal = $(this).val();
  emptyGame();
  console.log(
    Math.floor(Math.random() * eval(numVal).length)[0].question
  )
});
