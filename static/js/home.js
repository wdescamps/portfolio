$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat about_me<br/>" +
      "><span class='caret'>$</span> Job: Cognitive/Musical/Sports/Quirky  Data Explorer<br/> ^100" +
      "><span class='caret'>$</span> Skills: Asking question. Creating Links. Finding fun answers<br/> ^100" +
      "><span class='caret'>$</span> Interests: Neuropsychology, Space exploration, Bike-packing, Surfing, Volleyball, Coaching...<br/> ^300" +
      "><span class='caret'>$</span> Scroll down to see what i'm currently exploring <br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
