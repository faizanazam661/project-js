// Login Function
function login() {
    var username = document.getElementById('fname').value;
    localStorage.setItem('fname', username);
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var mail = "admin@user.com";
    var pass = 123456;
    // If username is not entered or not correct
    if (!username || username.length < 3) {
        Toastify({
            text: "Enter Your Full Name",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
            },
            onClick: function () { }
        }).showToast();
        return;
    }
    // If email is not entered
    if (!email) {
        Toastify({
            text: "Enter Your Email",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
            },
            onClick: function () { }
        }).showToast();
        return;
    }
    // If password is not entered
    if (!password) {
        Toastify({
            text: "Enter Your Password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
            },
            onClick: function () { }
        }).showToast();
        return;
    }
    // Password and email is checking condition
    if (password == pass && email == mail) {
        window.location.href = "home.html";
    }
    else {
        Toastify({
            text: "Please Enter Correct Email or Password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(174,25,158,0.7791491596638656) 100%);",
            },
            onClick: function () { }
        }).showToast();
        return;
    }
}