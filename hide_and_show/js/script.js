// get a reference to the button element
var $collapse_btn = document.getElementById("collapse-btn");

// get a reference to the collapsable div elemnt
var $collapsable_div = document.getElementById("collapsable-div");

// set a click listener on the collapse button
$collapse_btn.addEventListener("click", function(){
    // if the label is currently "Hide"
	if($collapse_btn.innerHTML == "Hide"){
        // Set it to "Expand"
		$collapse_btn.innerHTML = "Expand"
        
	}else{ // else the label was "Expand"
        // set it to "Hide"
		$collapse_btn.innerHTML = "Hide";
	}
	
    //toggle the hidden class which has a CSS rule to set display: None
	$collapsable_div.classList.toggle("hidden");
});