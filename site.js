(function(){
  var d = document.documentElement;
  var t = document.getElementById('themeBtn');
  function isLight(){ return d.getAttribute('data-theme') === 'light'; }
  function sync(){ if (t) t.textContent = isLight() ? '☾' : '☀'; }
  if (t) t.addEventListener('click', function(){
    if (isLight()){ d.removeAttribute('data-theme'); try{ localStorage.removeItem('qsTheme'); }catch(e){} }
    else { d.setAttribute('data-theme','light'); try{ localStorage.qsTheme = 'light'; }catch(e){} }
    sync();
  });
  sync();

  var pb = document.getElementById('playBtn');
  if (pb) {
    var audio = new Audio(pb.getAttribute('data-src'));
    var label = pb.textContent;
    function setLabel(playing){ pb.textContent = playing ? 'Pause' : label; }
    pb.addEventListener('click', function(){
      if (audio.paused){ audio.play(); setLabel(true); }
      else { audio.pause(); setLabel(false); }
    });
    audio.addEventListener('ended', function(){ setLabel(false); });
  }
})();
