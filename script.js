let score = 0;
let hitval = 0;
let timer = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitval = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitval;
}

function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 160; i++) {
        let rn = Math.floor(Math.random() * 10);

        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    timer = 60;

    let timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            document.querySelector("#pbtm").innerHTML =
                `<h1>Game Over</h1>
                <br>
                <div id="restartbtn" class="box">Restart</div>`;

            document.querySelector("#restartbtn").addEventListener("click", function () {
                restartGame();
            });

            clearInterval(timerint)
        }
    }, 1000);
}


function restartGame() {
    makeBubble();
    getNewHit();
    runTimer();

    score = 0;
    document.querySelector("#scoreval").textContent = score;
}


function startGame() {
    document.querySelector("#pbtm").addEventListener("click", function (dets) {
        let clickednum = Number(dets.target.textContent);

        if (clickednum === hitval) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    });

    getNewHit();
    runTimer();
    makeBubble();
}


document.querySelector("#startbtn").addEventListener("click", function () {
    startGame();
})