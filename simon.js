let gameSeq = [];
let userSeq = [];
let gameStart = false;
let level = 0;
let color = ["red", "yellow", "green", "blue"];
let h2 = document.querySelector('h2');
let currScore = 0;

// to store highest score
let highest = document.querySelector('.high');


document.addEventListener("keypress", function () {
    if (gameStart == false) {
        console.log("Game start");
        gameStart = true;
        levelup();
    }

})


function btnflash(btncol) {
    btncol.classList.add('flash');
    setTimeout(function () {
        btncol.classList.remove('flash')
    }, 250);

}

function levelup() {
    highest.innerText = "";
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let ranNum = Math.floor(Math.random() * 4);
    console.log(ranNum);
    let col = color[ranNum];
    let ranCol = document.querySelector(`.${col}`);
    gameSeq.push(col);
    console.log(gameSeq);
    btnflash(ranCol);




}
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {

            setTimeout(levelup, 1000);
        }

    }
    else {
        // console.log("wrong");
        h2.innerHTML = `Game over !! <br> Press any key for restart`;
        currScore = level * 2;

        // highest.innerText = `Highest score is ${currScore}`;
        score(currScore);
        document.querySelector('body').classList.add('setbg')
        document.querySelector('body').classList.add('redalert');

        setTimeout(() => {
            document.querySelector('body').classList.remove('redalert');
            document.querySelector('body').classList.remove('setbg')
        }, 100);



        gameReset();
    }
}

function btnPress() {
    let btn = this;
    let btncol = this.getAttribute("id");
    //console.log(btn);
    userFlash(btn);
    userSeq.push(btncol);
    checkAns(userSeq.length - 1);
}
function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(function () {
        btn.classList.remove('userFlash')
    }, 220);

}

let allBtn = document.querySelectorAll('.btn');

for (btn of allBtn) {
    btn.addEventListener("click", btnPress)

}
function gameReset() {
    gameStart = false;
    userSeq = [];
    gameSeq = [];
    level = 0;

}
let highScore = 0;
function score(currScore) {

    if (currScore >= highScore) {

        highScore = currScore;
        console.log(highScore);
        highest.innerHTML = `<u>Congratulation !!</u>  <br> Your new score is <b>${currScore}</b>`
    }
    else {
        highest.innerHTML = ` Your score is <b>${level}</b>`;
    }
}
