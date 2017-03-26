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

ga('create', 'UA-89391134-1', {'storage': 'none'});
ga('set', 'checkProtocolTask', null);
ga('send', 'pageview', {'title': 'Prize', 'page': '/prize'});

$(document).ready(function () {
  try {
    Events.saveEvent("pageview", JSON.stringify({'page': 'prize'}));
  } catch (e) {
    // No events unless running in player
  }
  localStorage.setItem("interactions", parseInt(localStorage.getItem("interactions")) + 1);

  $(".prize-submit-btn").click(function () {
    console.log("click");
    try {
      Events.saveEvent("form_submit", JSON.stringify({
        'name': $("#name-in").val(),
        'email': $("#email-in").val(),
        'dob': $("#dob-in").val(),
        'zip': $("zip-in").val()
      }));
    } catch (e) {
      // No events unless running in player
    }
    
    window.location="thankyou.html"
  })
});

idle_reset();
set_idle_return(60);