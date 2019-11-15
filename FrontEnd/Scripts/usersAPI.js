let localData;
let sessionData;
let firstName;
let lastName;
let email;
let password;
let verifyPass;
let subscription;

// Value capture/generation
function setInputValues() {
    if (localData === true) {
        document.getElementById("firstName").value = localFirstName
        document.getElementById("lastName").value = localLastName
        document.getElementById("email").value = localEmail
        document.getElementById("password").value = localPassword
        document.getElementById("verifyPass").value = localPassword
        document.getElementById("subscription").value = localSubscription
    } if (sessionData === true) {
        document.getElementById("firstName").value = sessionFirstName
        document.getElementById("lastName").value = sessionLastName
        document.getElementById("email").value = sessionEmail
        document.getElementById("password").value = sessionPassword
        document.getElementById("verifyPass").value = sessionPassword
        document.getElementById("subscription").value = sessionSubscription
    }
}

function getInputValues() {
    firstName = document.getElementById("firstName")
    lastName = document.getElementById("lastName")
    email = document.getElementById("email")
    password = document.getElementById("password")
    verifyPass = document.getElementById("verifyPass")
    subscription = document.getElementById("subscription")
}

// Verification
function verifyUser() {
    allUsers()
        .then(res => res.json())
        .then(json.Search.forEach(i => {
            if ((i.email === inputEmail) && (i.password === inputPassword)) {
                return true
            }
            return false
        })
        )
}

function passwordsSame() {
    if (inputPassword === inputVerifyPass) {
        return true
    } else {
        return false
    }
}

// Login/Data storage functions
function rememberMeTicked() {
    let
}

function rememberMe() {
    if (rememberMeTicked === true) {
        let localFirstName = localStorage.inputFirstName
        let localLastName = localStorage.inputLastName
        let localEmail = localStorage.inputEmail
        let localPassword = localStorage.inputPassword
        let localSubscription = localStorage.mySubscription
        let y = true
        let localData = localStorage.y
        let sessionData = localStorage.y
    }
}

function openLogInPage() {
    if (sessionData === false) {
        window.location.href = "Signin.html"
    } else {
        window.alert("You are already signed in")
    }
}

function logIn() {
    if (verifyUser() === true) {
        let sessionFirstName = sessionStorage.inputFirstName
        let sessionLastName = sessionStorage.inputLastName
        let sessionEmail = sessionStorage.inputEmail
        let sessionPassword = sessionStorage.inputPassword
        let sessionSubscription = sessionStorage.inputSubscription
        let x = true
        let sessionData = sessionStorage.x
        return true
    } else {
        window.alert("Credentials could not be verified");
        return false
    }
}

function logOut() {
    if (sessionData === true) {
        localStorage.clear();
        sessionStorage.clear();
        sessionData = false;
        localData = false;
        window.alert("Signed out, to remain signed in you will have to reselect 'remember me'")
    } else {
        window.alert("You are already logged out")
    }
}

function openProfile() {
    if (loggedIn === true) {
        window.location.href = "Profile.html"
    }
    else {
        window.alert("You must be logged in to access your profile")
    }
}

// CRUD functionality
function createUser() {
    getInputValues()
    fetch('http://localhost:8080/users/', {
        method: 'POST',
        body: JSON.stringify({
            "firstName": "\"" + firstName.value + "\"",
            "lastName": "\"" + lastName.value + "\"",
            "email": "\"" + email.value + "\"",
            "password": "\"" + password.value + "\"",
            "subscription": "\""+ subscription.value + "\"",
        }),
        headers: { 'Content-Type': 'application/json' }
    }); 
}

function allUsers() {
    fetch('http://localhost:8080/users'), {
        method: 'GET'
    }
}

function findbyID() {
    fetch('http://localhost:8080/users/' + userID), {
        method: 'GET'
    }
}

function updateUser() {
    fetch('http://localhost:8080/users/' + userID, {
        method: 'POST',
        body: JSON.stringify({
            "firstName": "\"" + firstName.value + "\"",
            "lastName": "\"" + lastName.value + "\"",
            "email": "\"" + email.value + "\"",
            "password": "\"" + password.value + "\"",
            "subscription": "\""+ subscription.value + "\"",
        }),
        headers: { 'Content-Type': 'application/json' }
    });
}

function deleteUser() {
    fetch('http://localhost:8080/users/' + userID, {
        method: 'DELETE'
    })
}