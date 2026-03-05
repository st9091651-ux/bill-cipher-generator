function generate() {
    let text = document.getElementById("textInput").value;
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let count = parseInt(document.getElementById("count").value);

    if (text === "" || isNaN(min) || isNaN(max) || isNaN(count)) {
        alert("Please, enter text");
        return;
    }
    if (min > max) {
        alert("The minimum cannot be greater than the maximum");
        return;
    }
    if (min === max) {
        alert("The minimum and maximum values must be different");
        return;
    }


    let seed = 0;
    for (let i = 0; i < text.length; i++) {
        seed += text.charCodeAt(i) * (i + 1); 
    }

    let result = "";

    for (let i = 0; i < count; i++) {

        seed = Math.abs(Math.sin(seed) * 1000000) | 0; 
        let number = min + (seed % (max - min + 1));
        result += number + " ";
    }

    document.getElementById("result").innerText = result;
}

function clearInputs() { document.getElementById("textInput").value = "";
    document.getElementById("min").value = "";
    document.getElementById("max").value = ""; 
    document.getElementById("count").value = ""; 
    document.getElementById("result").innerText = ""; }

const music = document.getElementById('bgMusic');

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}