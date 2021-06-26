// $.ajax({
//   url: "http://jservice.io/api/category?id=49",
//   method: "GET",
// }).then(function (res) {
//   console.log(res);
// });

//on play click hide play button
//display category buttons

$(".play").on("click", function () {
  //clear the main-game screen
  //MAYBE later add stinger transtion

  const cats = [];
  const foods = [];
  const food_ones = [];
  const food_twos = [];
  const food_threes = [];
  const food_fours = [];
  const food_fives = [];
  const food_tens = [];
  const gameFrame = $("#main-game");

  const thisVal = $(this).val();

  $.ajax({
    //FOOD
    url: "http://jservice.io/api/category?id=49",
    method: "GET",
  }).then(function (res) {
    const clueArr = res.clues;
    clueArr.sort((a, b) => a.value - b.value);

    for (let i = 0; i < clueArr.length; i++) {
      if (clueArr[i].value == null) {
        clueArr.splice(i, 1);
        res.clues_count--;
      } else if (clueArr[i].value == 100) {
        food_ones.push(clueArr.splice(i, 1));
        res.clues_count--;
      } else if (clueArr[i].value == 200) {
        food_twos.push(clueArr.splice(i, 1));
        res.clues_count--;
      } else if (clueArr[i].value == 300) {
        food_threes.push(clueArr.splice(i, 1));
        res.clues_count--;
      } else if (clueArr[i].value == 400) {
        food_fours.push(clueArr.splice(i, 1));
        res.clues_count--;
      } else if (clueArr[i].value == 500) {
        food_fives.push(clueArr.splice(i, 1));
        res.clues_count--;
      } else if (clueArr[i].value == 1000) {
        food_tens.push(clueArr.splice(i, 1));
        res.clues_count--;
      }
    }
    foods.push(
      "Foods",
      food_ones,
      food_twos,
      food_threes,
      food_fours,
      food_fives,
      food_tens
    );
    cats.push(foods, ["test", 0]);
    console.log(cats);

    if (thisVal == "play") {
      gameFrame.empty();
      console.log("here", cats.length);
      for (let i = 0; i < cats.length; i++) {
        newBtn = $(
          `<button class='cat-btn cat-${cats[i][0].toLowerCase()}'>${cats[i][0]}</button>`
        );
        gameFrame.append(newBtn);
      }
    }
  });
});
