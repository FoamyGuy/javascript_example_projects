var $collapse_btn = document.getElementById("collapse-btn");
var $collapsable_div = document.getElementById("collapsable-div");

$collapse_btn.addEventListener("click", function(){
	if($collapse_btn.innerHTML == "Hide"){
		$collapse_btn.innerHTML = "Expand"
	}else{
		$collapse_btn.innerHTML = "Hide";
	}
	
	$collapsable_div.classList.toggle("hidden");
});