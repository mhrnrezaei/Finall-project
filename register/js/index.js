let def_repass = false;

function authenti() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "" || password == "") {
        alert("Username or Password box Empty !!") 
    } else {
        if (username == "admin" && password == "123456") {
            alert("login was successfully")
            window.location = "../index.html"
        } else {
            alert("Username or Password is wrong !!")
        }
    }

}


function signup() {
    if (def_repass == false) {
        document.getElementById('re-password').style.visibility = "visible"
        document.getElementById('signup-btn').innerHTML = 'SIGN IN'
        document.getElementById('info-acc-sp').style.visibility = 'hidden'
        def_repass = true
    } else {
        document.getElementById('re-password').style.visibility = "hidden"
        document.getElementById('signup-btn').innerHTML = 'SIGN UP'
        document.getElementById('info-acc-sp').style.visibility = 'visible'
        def_repass = false
    }

}