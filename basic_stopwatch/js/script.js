$start_stop_btn = document.querySelector("#start-stop-btn");
$reset_btn = document.querySelector("#reset-btn");
$display = document.querySelector("#display");


var stopwatch_running = false;
var current_time = 0;

function refresh_ui(){
	$display.innerHTML = current_time + "s"; 
}

$start_stop_btn.addEventListener("click", function(){
	stopwatch_running = !stopwatch_running;
	if(stopwatch_running){
		$start_stop_btn.innerHTML = "Stop";
	}else{
		$start_stop_btn.innerHTML = "Start";
	}
});

$reset_btn.addEventListener("click", function(){
	stopwatch_running = false;
	$start_stop_btn.innerHTML = "Start";
	current_time = 0;
});


setInterval(function(){
	if (stopwatch_running){
		current_time++;
	}
	refresh_ui();
}, 1000);