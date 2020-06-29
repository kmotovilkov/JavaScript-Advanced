function stopwatch() {
    let seconds = 0;
    let intervalId;
    let minutes = 0;
    let timeDiv = document.getElementById('time');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');

    function formatOutput(value) {
        let text = value.toString();
        if (value < 10) {
            text = '0' + text
        }
        return text;
    }

    function setTime(minutes, seconds) {
        timeDiv.innerText = `${formatOutput(minutes)}:${formatOutput(seconds)}`;
    }

    function startButton(event) {
        startBtn.setAttribute('disabled', true);
        stopBtn.removeAttribute('disabled');

        intervalId = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            setTime(minutes, seconds);
        }, 1000);
        minutes = 0;
        seconds = 0;
        setTime(minutes, seconds);
    }

    function stopButton(event) {
        stopBtn.setAttribute('disabled', true);
        startBtn.removeAttribute('disabled');
        clearInterval(intervalId);
    }

    startBtn.addEventListener('click', startButton);
    stopBtn.addEventListener('click', stopButton);
}