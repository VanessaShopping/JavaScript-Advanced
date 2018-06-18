function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    gradientBox.addEventListener('mousemove', function (ev) {
        let percent = Math.trunc(ev.offsetX / (ev.target.clientWidth - 1) * 100);
        document.getElementById('result').textContent = percent + "%";
    });
    gradientBox.addEventListener('mouseout', function (ev) {
       document.getElementById('result').textContent = null;
    });
}