




let btn = document.getElementById("btnSubmit");


btn.addEventListener("click", function (e) {

    e.preventDefault()
    let usernameVal = document.getElementById("inputUsername").value;
    let emailVal = document.getElementById("inputEmail").value;
    let passwordVal = document.getElementById("inputPassword").value;
    let confirmPassVal = document.getElementById("inputConfirmPassword").value;
    let alertElement = document.getElementById("alert");

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


    // validating username

    if (usernameVal && usernameVal.length < 4) {
        alertElement.innerHTML = `<div class="alert alert-danger text-center" role="alert">
             Username Length must be atleast 3 character
         </div>`

        return;
    } else {
        alertElement.innerHTML = ""
    }



    // validating email

    if (emailRegex.test(emailVal)) {

        alertElement.innerHTML = ""

    } else {

        alertElement.innerHTML = `<div class="alert alert-danger text-center" role="alert">
        Invalid Email Address!
    </div>`

        return;
    }


    // validating passwords

    if (passwordVal !== confirmPassVal) {

        alertElement.innerHTML = `<div class="alert alert-danger text-center" role="alert">
        Passwords do not Match!
    </div>`

        return;

    } else if (!passwordRegex.test(passwordVal)) {

        alertElement.innerHTML = `<div class="alert alert-danger text-center" role="alert">
        Invalid Password!
    </div>`

        return;

    } else {
        alertElement.innerHTML = ""
    }


    alertElement.innerHTML = `<div class="alert alert-success text-center" role="alert">
    Signed up Successfully!
</div>`


})