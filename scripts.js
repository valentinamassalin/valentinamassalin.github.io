// Cambiar navbar al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


  var tag = document.createElement('script');
  tag.src = "https://youtu.be/WD92DDi_R-8";
  document.head.appendChild(tag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytVid', {
      events: {
        'onReady': (e) => e.target.playVideo()
      }
    });
  }

  document.getElementById('activarAudio').addEventListener('click', () => {
    player.unMute();
    player.setVolume(100);
    player.playVideo();
  });