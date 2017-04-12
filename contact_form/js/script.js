$email_input = document.querySelector("#email-input");
// use decendent selector to get a reference to the <form>
// element on the page.
$form = document.querySelector("#form-wrapper form");
$form.reset();
function validate_email(event_obj){
    var entered_email = $email_input.value;
    // indexOf() returns -1 if substring is not found
    if(entered_email.indexOf("@") == -1){
        // .error has a rule in our CSS.
        $email_input.classList.add("error");
    }else{
        $email_input.classList.remove("error");
    }
}

// blur is the event for losing focus
$email_input.addEventListener("blur", validate_email);