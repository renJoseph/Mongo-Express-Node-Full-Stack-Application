let local;
let session;
let loggedIn;
let verified;
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let verifyPass = document.getElementById("verifyPass")
let subscription = document.getElementById("subscription")

// Value capture/generation
function saveLocalStorageToSession() {
    if (local) {
        sessionStorage.firstName = localStorage.firstName;
        sessionStorage.lastName = localStorage.lastName;
        sessionStorage.email = localStorage.email;
        sessionStorage.password = localStorage.password;
        sessionStorage.subscription = localStorage.subscription;
    }
}

function setProfileFormValues() {
    if (loggedIn) {
        firstName.value = sessionStorage.firstName
        lastName.value = sessionStorage.lastName
        email.value = sessionStorage.email
        password.value = sessionStorage.password
        subscription.value = sessionStorage.subscription
    }
}

function setLoginFormValues() {
    if (rememberMe) {
        email.value = localStorage.email
        password.value = localStorage.password
    }
}

async function verifyUser() {
    const response = await fetch('http://localhost:8080/users/get/' + email.value + "/" + password.value);
    if (response.status === 200) {
        window.alert("Woo")
        return true
    } else {
        window.alert("sad")
        return false
    }
}

function formVerification() {
    getInputValues()
    let veri;
    if ((firstName) && (lastName) && (email) && (password) && (verifyPass) && (password.value === verifyPass.value)) {
        veri = true
        return veri;
    } else {
        window.alert("Form inputs were invalid")
        veri = false
        return veri;
    }
}

// Data persistence
function rememberMeTicked() {
    if (document.getElementById("checkbox").value === checked) {
        return true
    } else {
        return false
    }
}

function rememberValues() {
    localStorage.firstName = document.getElementById("firstName").value;
    localStorage.lastName = document.getElementById("lastName").value;
    localStorage.email = document.getElementById("email").value;
    localStorage.password = document.getElementById("password").value;
    localStorage.subscription = document.getElementById("subscription").value;
    localStorage.rememberMe = true
}

// Login related page opens
function registerPage() {
    if (!sessionStorage.loggedIn) {
        window.location.href = "Register.html"
    } else {
        window.alert("You must log out if you wish to create a new account")
    }
}


function openLogInPage() {
    if (!sessionStorage.loggedIn) {
        window.location.href = "Signin.html"
    } else {
        window.alert("You are already signed in")
    }
}

function openProfile() {
    if (sessionStorage.loggedIn) {
        window.location.href = "Profile.html"
    }
    else {
        window.alert("You must be logged in to access your profile")
    }
}

function openSaved() {
    if (sessionStorage.loggedIn) {
        window.location.href = "Saved Products.html"
    }
    else {
        window.alert("You must be logged in to access your saved products")
    }
    
}

// Login/out functions
function autoLogIn() {
    if (localStorage.rememberMe) {
        saveLocalStorageToSession();
        sessionStorage.loggedIn = true;
    }
}

async function verifyUser() {
    let response = await fetch('http://localhost:8080/users/get/' + email.value + "/" + password.value)
        .then()
    if (response.ok) {
        window.alert("Successfully logged in");
        sessionStorage.loggedIn = true;
        return true;
    } else {
        window.alert("Could not verify credentials")
        return false
    }
}

function logOut() {
    if (loggedIn) {
        localStorage.clear();
        sessionStorage.clear();
        sessionStorage.loggedIn = false;
        window.alert("Signed out")
    } else {
        window.alert("You are already logged out")
    }
}

// CRUD functionality
function createUser() {
    fetch('http://localhost:8080/users/', {
        method: 'POST',
        body: JSON.stringify({
            "firstName": firstName.value,
            "lastName": lastName.value,
            "email": email.value,
            "password": password.value,
            "subscription": subscription.value,
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.href = "Signin.html"
}

function allUsers() {
    fetch('http://localhost:8080/users'), {
        method: 'GET'
    }
}

function findByEmail() {
    fetch('http://localhost:8080/users/' + email.value), {
        method: 'GET'
    }
}

function updateUser() {
    fetch('http://localhost:8080/users/update/' + email.value, {
        method: 'POST',
        body: JSON.stringify({
            "firstName": firstName.value,
            "lastName": lastName.value,
            "email": email.value,
            "password": password.value,
            "subscription": subscription.value,
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.href = "#"
    window.alert("Update Successful")
}

function deleteUser() {
    fetch('http://localhost:8080/users/' + email.value, {
        method: 'DELETE'
    })
}