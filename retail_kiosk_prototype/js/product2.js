(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-89391134-1', {'storage':'none'});
ga('set', 'checkProtocolTask', null);
ga('send', 'pageview', {'title':'Product2','page':'/product2'});


$(document).ready(function(){
  try {
      Events.saveEvent("pageview", JSON.stringify({'page': 'product2'}));
    } catch (e) {
    
  }
    
    localStorage.setItem("interactions", parseInt(localStorage.getItem("interactions")) + 1);
});

var vid = document.getElementById('video-player');


function hide_all() {
    $(".features").css("display", "none");
    $(".overview").css("display", "none");
    $(".video").css("display", "none");

    $("#nav-overview").removeClass("selected");
    $("#nav-features").removeClass("selected");
    $("#nav-video").removeClass("selected");

    vid.pause();
    idle_reset();
    set_idle_return(40);
    localStorage.setItem("interactions", parseInt(localStorage.getItem("interactions")) + 1);

}

$("#nav-overview").click(function () {
    hide_all();
    $(".overview").css("display", "block");
    $(this).addClass("selected");

});

$("#nav-features").click(function () {
    hide_all();
    $(".features").css("display", "block");
    $(this).addClass("selected");
});

$("#nav-video").click(function () {
    hide_all();
    $(".video").css("display", "block");
    vid.currentTime = 0;
    vid.play();
    $(this).addClass("selected");
});
