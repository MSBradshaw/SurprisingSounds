$ = jQuery
$( document ).ready(function () {

  var always_noise = false;
  chrome.storage.sync.get(['takeoverEnabled'], function(items) {
      console.log(items.takeoverEnabled);
      if(Math.floor(Math.random() * 100) == 13 || items.takeoverEnabled){
        var sounds = ['sounds/mette-reverse.wav','sounds/mette-man.wav','sounds/mette-drowning.wav','sounds/mette-alien.wav','sounds/mette.wav'];
        var number = Math.floor(Math.random() * sounds.length);
        var audio = new Audio(chrome.extension.getURL(sounds[number]));
        $('body').append('<style>.coverall{width:100%;height:100vh;background:red;position:fixed;z-index:99;opacity:.5;top:0;left:0;bottom:0;right:0;}</style>');
        $('body').append('<div class="coverall"></div>');
        $('.coverall').click(function(){
          mayhem(this);
        });
        mayhem = function(thediv){
          audio.play();
          $(thediv).remove();
        }
      }
  });
})
