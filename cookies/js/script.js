
function incrementInteractions(){
		Cookies.set('interactions', Number(Cookies.get('interactions'))+1);
		updateScreen()
}

function resetInteractions(){
		Cookies.set('interactions', '0');
		updateScreen()
}

function updateScreen(){
	$interactionsTxt.textContent = "Interactions: " + Cookies.get("interactions");
}


$interactionsTxt = document.querySelector("#interactionsTxt");

if (Cookies.get('interactions') == undefined){
	console.log("initializing interactions count cookie");
	resetInteractions();
}

updateScreen()

$countBtn = document.querySelector("#countingBtn");
$countBtn.addEventListener('click', incrementInteractions);

$resetBtn = document.querySelector("#resetBtn");
$resetBtn.addEventListener('click', resetInteractions);