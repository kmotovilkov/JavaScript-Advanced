function attachGradientEvents() {

    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientIn);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientIn(e) {
        let percent = e.offsetX / (e.target.clientWidth - 1);
        percent = Math.trunc(percent * 100);
        document.getElementById('result').textContent = percent + "%";
    }

    function gradientOut(e) {
        document.getElementById('result').textContent = "";
    }
}