function validateForm() {  //form validation  if no value entered gives alert
    let x = document.forms["myForm"]["fname"].value;
    if (x== "") {
        alert("Name must be filled out to proceed");
        return false;
    }
}