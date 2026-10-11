document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');

  main.innerHTML = `
    <h2>CloudStream TV</h2>
    <p>WebOS video playback test</p>
    <video id="player" controls autoplay
      style="width:100%;max-height:65vh;background:#000">
    </video>
    <p id="status">Ready</p>
    <button id="test">Play test video</button>
  `;

  document.getElementById('test').onclick = () => {
    const video = document.getElementById('player');
    video.src = 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    video.play().then(() => {
      document.getElementById('status').textContent = 'Playing';
    }).catch(() => {
      document.getElementById('status').textContent =
        'Playback failed. Check TV network or codec support.';
    });
  };
});
