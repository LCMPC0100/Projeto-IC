// Função para tocar/pausar a música de fundo
function toggleMusic() {
    var audio = document.getElementById("musicaFundo");
    var playPauseIcon = document.getElementById("playPauseIcon");

    if (audio.paused) {
        audio.play();  // Toca a música
        playPauseIcon.textContent = "⏸️";  // Altera o ícone para "pausa"
    } else {
        audio.pause();  // Pausa a música
        playPauseIcon.textContent = "▶️";  // Altera o ícone para "play"
    }
}

// Função para ajustar o volume
function changeVolume(volumeControl) {
    var audio = document.getElementById("musicaFundo");
    audio.volume = volumeControl.value;
}

// Atualiza o tempo atual e a duração da música
function updateTime() {
    var audio = document.getElementById("musicaFundo");
    var currentTimeDisplay = document.getElementById("currentTime");
    var durationDisplay = document.getElementById("duration");

    // Tempo atual
    var currentTime = formatTime(audio.currentTime);
    currentTimeDisplay.textContent = currentTime;

    // Duração total
    var duration = formatTime(audio.duration);
    durationDisplay.textContent = duration;
}

// Formatar tempo no formato MM:SS
