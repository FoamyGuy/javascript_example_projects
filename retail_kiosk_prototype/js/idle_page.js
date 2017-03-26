backgrounds = ["bg1.png", "bg2.png", "bg3.png"];

var cur_bg = 0;


$(".background").css('background-image', 'url(img/' + backgrounds[cur_bg] + ')');



setInterval(function () {
  $(".background").css('background-image', 'url(img/' + backgrounds[cur_bg] + ')');
  cur_bg += 1;
  if (cur_bg > backgrounds.length) {
    cur_bg = 0;
  }
}, 3000);

$(".start-btn").click(function(){
  localStorage.setItem("interactions", 1);
});


