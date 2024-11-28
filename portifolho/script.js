
function toggleMusic() {
    var audio = document.getElementById("musicaFundo");
    var playPauseIcon = document.getElementById("playPauseIcon");
    

    if (audio.paused) {
        audio.play();  
        playPauseIcon.textContent = "⏸️";  
    } 
    else {
        audio.pause();  
        playPauseIcon.textContent = "▶️";  
    }
}


function changeVolume(volumeControl) {
    var audio = document.getElementById("musicaFundo");
    audio.volume = volumeControl.value;
}


function updateTime() {
        var audio = document.getElementById("musicaFundo");
        var currentTimeDisplay = document.getElementById("currentTime");
        var durationDisplay = document.getElementById("duration");

    
    var currentTime = formatTime(audio.currentTime);
    currentTimeDisplay.textContent = currentTime;

    
    
    
        var duration = formatTime(audio.duration);
    durationDisplay.textContent = duration;
}

// Formatar tempo no formato MM:SS
