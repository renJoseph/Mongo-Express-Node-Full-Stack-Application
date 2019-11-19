function setValues() {
    let loggedIn;
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let verifyPass = document.getElementById("verifyPass")
    let subscription = document.getElementById("subscription")
    let sfn = sessionStorage.firstName
    let sln = sessionStorage.lastName
    let sem = sessionStorage.email
    let ssb = sessionStorage.subscription
}

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
    if (sessionStorage.firstName) { document.getElementById("firstName").value = sessionStorage.firstName }
    if (sessionStorage.lastName) { document.getElementById("lastName").value = sessionStorage.lastName }
    if (sessionStorage.email) { document.getElementById("email").value = sessionStorage.email }
    if (sessionStorage.subscription) { document.getElementById("subscription").value = sessionStorage.subscription }
}

function setLoginFormValues() {
    if (rememberMe) {
        email.value = localStorage.email
        password.value = localStorage.password
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
        sessionStorage.email = document.getElementById("email").value
        window.location.href = "Profile.html"
    } else {
        window.alert("Could not verify credentials")
    }
}

function logOut() {
    if (sessionStorage.loggedIn) {
        localStorage.clear();
        sessionStorage.clear();
        window.alert("Signed out")
        window.location.href = "Landing Page.html"
    } else {
        window.alert("You are already logged out")
    }
}

// CRUD functionality
async function createUser() {
    let response = await fetch('http://localhost:8080/users/create', {
        method: 'POST',
        body: JSON.stringify({
            "firstName": firstName.value,
            "lastName": lastName.value,
            "email": email.value,
            "password": password.value,
            "subscription": subscription.value,
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then()
    if (response.ok) {
        localStorage.firstName, firstName.value
        localStorage.lastName = lastName.value
        localStorage.email = email.value
        localStorage.password = password.value
        localStorage.subscription = subscription.value
        window.alert("Successfully registered")
        window.location.href = "Signin.html"
    } else {
        window.alert("Registration failed, please try again")
    }
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

async function updateUser() {
    let response = await fetch('http://localhost:8080/users/update/' + email.value, {
        method: 'POST',
        body: JSON.stringify({
            "firstName": firstName.value,
            "lastName": lastName.value,
            "email": email.value,
            "password": password.value,
            "subscription": subscription.value,
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then()
    if (response.ok) {
        sessionStorage.setItem("firstName", firstName.value)
        sessionStorage.setItem("lastName", lastName.value)
        sessionStorage.setItem("email", email.value)
        sessionStorage.setItem("password", password.value)
        sessionStorage.setItem("subscription", subscription.value)
        window.alert("Update Successful")
        window.location.href = "#"
    } else {
        window.alert("Failed to update")
    }
}

async function deleteUser() {
    let response = await fetch('http://localhost:8080/users/' + email.value, {
        method: 'DELETE'
    }).then()
    if (response.ok) {
        window.alert("Account deleted")
        logOut()
        window.location.href = "Landing Page.html"
    } else {
        window.alert("Failed to delete")
    }
}