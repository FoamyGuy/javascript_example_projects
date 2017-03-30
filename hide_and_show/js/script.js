var $collapse_btn = document.getElementById("collapse-btn");
var $collapsable_div = document.getElementById("collapsable-div");

$collapse_btn.addEventListener("click", function(){
	$collapsable_div.classList.toggle("hidden");
});