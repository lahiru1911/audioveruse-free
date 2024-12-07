const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const slowBtn = document.getElementById('slowBtn');
const normalBtn = document.getElementById('normalBtn');
const fastBtn = document.getElementById('fastBtn');

// File input handling (works offline)
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    audioPlayer.src = fileURL;
    audioPlayer.play();
  } else {
    alert("Please select an audio file.");
  }
});

// Playback controls
playBtn.addEventListener('click', () => audioPlayer.play());
pauseBtn.addEventListener('click', () => audioPlayer.pause());
stopBtn.addEventListener('click', () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
});

// Speed controls
slowBtn.addEventListener('click', () => (audioPlayer.playbackRate = 0.75));
normalBtn.addEventListener('click', () => (audioPlayer.playbackRate = 1));
fastBtn.addEventListener('click', () => (audioPlayer.playbackRate = 1.5));

// Offline handling (show alert if offline)
window.addEventListener('offline', () => alert("You're offline. Load an audio file from your device."));
