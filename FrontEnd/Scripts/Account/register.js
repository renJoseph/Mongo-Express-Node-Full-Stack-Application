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
}