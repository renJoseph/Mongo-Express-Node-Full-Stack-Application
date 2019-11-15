let localData;
let sessionData;
let loggedIn;
let firstName;
let lastName;
let email;
let password;
let verifyPass;
let subscription;

// Value capture/generation
function saveLocalStorageToSession() {
    if (localData) {
        sessionFirstName = localFirstName
        sessionLastName = localLastName
        sessionEmail = localEmail
        sessionPassword = localPassword
        sessionSubscription = localSubscription
        let sessionData = true
    }
}

function setProfileFormValues() {
    if (sessionData) {
        document.getElementById("firstName").value = sessionFirstName
        document.getElementById("lastName").value = sessionLastName
        document.getElementById("email").value = sessionEmail
        document.getElementById("password").value = sessionPassword
        document.getElementById("verifyPass").value = sessionPassword
        document.getElementById("subscription").value = sessionSubscription
    }
}

function setLoginFormValues() {
    if (localData) {
        document.getElementById("email").value = localEmail
        document.getElementById("password").value = localPassword
    } if (sessionData) {
        document.getElementById("email").value = localEmail
        document.getElementById("password").value = localPassword
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

function formVerification() {
    getInputValues()
    if ((firstName) && (lastName) && (email) && (password) && (verifyPass) && (password.value === verifyPass.value)) {
        let formComplete;
    } else {
        window.alert("Form inputs were invalid")
    }
}

// Data persistence
function rememberMeTicked() {
    if (document.getElementById(checkbox).value === checked) {
        return true
    } else {
        return false
    }
}

function rememberValues() {
    if (rememberMeTicked) {
        let localFirstName = localStorage.inputFirstName
        let localLastName = localStorage.inputLastName
        let localEmail = localStorage.inputEmail
        let localPassword = localStorage.inputPassword
        let localSubscription = localStorage.mySubscription
        let y = true
        let localData = localStorage.y
    }
}

// Login related page opens
function registerPage() {
    if (sessionData === false) {
        window.location.href = "Register.html"
    } else {
        window.alert("You must log out if you wish to create a new account")
    }
}


function openLogInPage() {
    if (sessionData === false) {
        window.location.href = "Signin.html"
    } else {
        window.alert("You are already signed in")
    }
}

function openProfile() {
    if (loggedIn) {
        window.location.href = "Profile.html"
    }
    else {
        window.alert("You must be logged in to access your profile")
    }
}

// Login/out functions
function autoLogIn() {
    if (hasSessionData) {

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
        let hasSessionData = sessionStorage.x
        return true
    } else {
        window.alert("Credentials could not be verified");
        return false
    }
}

function logOut() {
    if (hasSessionData) {
        localStorage.clear();
        sessionStorage.clear();
        x = false
        loggedIn = sessionData.x;
        window.alert("Signed out, to remain signed in you will have to reselect 'remember me'")
        return loggedIn 
    } else {
        window.alert("You are already logged out")
    }
}

// CRUD functionality
function createUser() {
    if (formComplete) {
        getInputValues()
        storeLocalValues()
        fetch('http://localhost:8080/users/', {
            method: 'POST',
            body: JSON.stringify({
                "firstName": "\"" + firstName.value + "\"",
                "lastName": "\"" + lastName.value + "\"",
                "email": "\"" + email.value + "\"",
                "password": "\"" + password.value + "\"",
                "subscription": "\"" + subscription.value + "\"",
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

function allUsers() {
    fetch('http://localhost:8080/users'), {
        method: 'GET'
    }
}

function findByEmail() {
    fetch('http://localhost:8080/users/' + email), {
        method: 'GET'
    }
}

function updateUser() {
    fetch('http://localhost:8080/users/' + email, {
        method: 'POST',
        body: JSON.stringify({
            "firstName": "\"" + firstName.value + "\"",
            "lastName": "\"" + lastName.value + "\"",
            "email": "\"" + email.value + "\"",
            "password": "\"" + password.value + "\"",
            "subscription": "\"" + subscription.value + "\"",
        }),
        headers: { 'Content-Type': 'application/json' }
    });
}

function deleteUser() {
    fetch('http://localhost:8080/users/' + email, {
        method: 'DELETE'
    })
}