var idleTimer;



function set_idle_return(timeout) {
  idleTimer = setTimeout(function () {

    var sessionLength = (new Date().getTime() - localStorage.getItem("session_begin"));
    var interactions = localStorage.getItem("interactions");

    try {
        Events.saveEvent("session_end", JSON.stringify({"length": sessionLength, "interactions": interactions}));
      } catch (e) {

      }

    window.location = "index.html";

  }, timeout * 1000);
}


function idle_reset(){
  clearTimeout(idleTimer);
}

set_idle_return(20);

