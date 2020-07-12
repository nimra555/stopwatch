let min = 0;
let sec = 0;
let m_sec = 0;

let getMin = document.getElementById("min");
let getSec = document.getElementById("sec");
let getMsec = document.getElementById("msec");
let pause;
let startPause = false;

function timer() {
    m_sec++;
    if (m_sec < 10) {
        getMsec.innerHTML = "0" + m_sec;
    }
    else {
        getMsec.innerHTML = m_sec;
    }
    if (m_sec >= 100) {
        sec++;
        m_sec = 0;
        if (sec < 10) {
            getSec.innerHTML = "0" + sec;
        }
        else {
            getSec.innerHTML = sec;
        }
    }
    else if (sec >= 60) {
        min++;
        sec = 0;
        if (min < 10) {
            getMin.innerHTML = "0" + min;
        }
        else {
            getMin.innerHTML = min;
        }
    }
}
function start() {
    if (!startPause) {
        pause = setInterval(timer, 10);
        startPause.disabled = true;
    }
}

function pauseBtn() {
    clearInterval(pause);
}

function reset() {
    m_sec = 00;
    sec = 00;
    min = 00;
    getMin.innerHTML = "0" + min;
    getSec.innerHTML = "0" + sec;
    getMsec.innerHTML = "0" + m_sec;
    pause;
}


