var roll = document.getElementById("roll");
var sides = {
0: "\u{2680}",
1: "\u{2681}",
2: "\u{2682}",
3: "\u{2683}",
4: "\u{2684}",
5: "\u{2685}",
};

roll.addEventListener("click", function() {
var firstNumber = Math.floor(Math.random() * 6);
var secondNumber = Math.floor(Math.random() * 6);

//first dice
var dice1 = document.getElementById("dice1");
dice1.innerHTML = sides[firstNumber];

//second dice
var dice2 = document.getElementById("dice2");
dice2.innerHTML = sides[secondNumber];
});
