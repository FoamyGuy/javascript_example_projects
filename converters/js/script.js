$mi_km_mi_input = document.querySelector("#mi-km-mi-input");
$mi_km_km_input = document.querySelector("#mi-km-km-input");

$gal_L_L_input = document.querySelector("#gal-L-L-input");
$gal_L_gal_input = document.querySelector("#gal-L-gal-input");

function km_to_mi(km){
    mi = km / 1.609344;
    return mi;
}
function mi_to_km(mi){
    km = mi * 1.609344;
    return km;
}
function L_to_gal(L){
    gal = L * .26417;
    return gal;
}
function gal_to_L(gal){
    L = gal / .26417;
    return L;
}
$mi_km_km_input.addEventListener('keyup', function(e){
    km_val = parseInt($mi_km_km_input.value, 10);
    console.log(km_val);
    if(isNaN(km_val) == false){
        $mi_km_mi_input.value = km_to_mi(km_val);
    }else{
        $mi_km_mi_input.value = "";
    }
});
$mi_km_mi_input.addEventListener('keyup', function(e){
    mi_val = parseInt($mi_km_mi_input.value,10);
    if(isNaN(mi_val) == false){
        $mi_km_km_input.value = mi_to_km(mi_val);
    }else{
        $mi_km_km_input.value = "";
    }
});

$gal_L_gal_input.addEventListener('keyup', function(e){
    gal_val = parseInt($gal_L_gal_input.value, 10);
    console.log(gal_val);
    if(isNaN(gal_val) == false){
        $gal_L_L_input.value = gal_to_L(gal_val);
    }else{
        $gal_L_L_input.value = "";
    }
});
$gal_L_L_input.addEventListener('keyup', function(e){
    L_val = parseInt($gal_L_L_input.value,10);
    if(isNaN(L_val) == false){
        $gal_L_gal_input.value = L_to_gal(L_val);
    }else{
        $gal_L_gal_input.value = "";
    }
});