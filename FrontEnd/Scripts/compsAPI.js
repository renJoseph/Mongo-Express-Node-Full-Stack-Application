let processor = document.getElementById("processor")
let size = document.getElementById("size")
let storage = document.getElementById("storage")
let ram = document.getElementById("ram")
let graphics = document.getElementById("graphics")
let price = document.getElementById("price")
let priceRange = document.getElementById("priceRange")

if (sessionStorage.recProdSearch) {
    processor.value = (sessionStorage.getItem("processor") || '*')
    size.value = (sessionStorage.size || '*')
    storage.value = (sessionStorage.getItem("storage") || '*')
    ram.value = (sessionStorage.ram || '*')
    graphics.innerHTML = (sessionStorage.getItem("graphics") || '*')
    sessionStorage.removeItem("recProdSearch")
}
// Saved comps crud
function addFave() {
    fetch('http://localhost:8080/users/', {
        method: 'POST',
        body: JSON.stringify({
            "email" : sessionStorage.email,
            "compNo" : compNo.value,
            "image" : image.src,
            "model" : "test",
            "processor" : "test",
            "size" : "test",
            "storage" : "test",
            "ram" : "test",
            "graphics" : "test",
            "price" : "test",
            "priceRange" : "test"
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    window.location.href = "Signin.html"
}

function removeFace() {
    fetch('http://localhost:8080/faves/' + email.value + compNo.value, {
        method: 'DELETE'
    })
}


// Saved products result generation
function savedProducts() {
    fetch('http://localhost:8080/faves/get/' + sessionStorage.email)
        .then(res => res.json())
        .then(json => searchResults(json));
}

function searchResults(json) {
    for (let i of json) {
        createCard(i)
    };
}

function createCard(comp) {
    let column = document.createElement("div");
    column.className = "col-md-4";
    //image
    let image = document.createElement("img");
    image.className = "card mb-3";
    image.src = comp.image;
    column.appendChild(image);
    //text
    let cardBody = document.createElement("div");
    cardBody.className = "card-body"
    column.appendChild(cardBody)
    let cardTitle = document.createElement("h5")
    cardTitle.className = "card-title"
    cardTitle.innerText = comp.model;
    cardBody.appendChild(cardTitle)
    let cardText = document.createElement("p")
    cardText.className = "card-text"
    cardText.innerText =
        "Processor: " + comp.processor +
        "\nSize: " + comp.size +
        "\nStorage: " + comp.storage +
        "\nRAM: " + comp.ram +
        "\nGraphics: " + comp.graphics +
        "\nPrice: " + comp.price;
    cardBody.appendChild(cardText)
    let button1 = document.createElement("a")
    button1.className = "btn btn-primary white-text"
    button1.innerText = "View"
    cardBody.appendChild(button1)
    let button2 = document.createElement("a")
    button2.className = "btn btn-primary white-text"
    button2.innerText = "Remove"
    button2.onclick = removeSave()
    cardBody.appendChild(button2)
    document.getElementById('results-container').append(column);
}

// Search result generation
function userSearch() {
    fetch('http://localhost:8080/comps/get/')
        .then(res => res.json())
        .then(json => searchResults(json));
}

function searchResults(json) {
    for (let i of json) {
        createCard(i)
    };
}

function createCard(comp) {
    let column = document.createElement("div");
    column.className = "col-md-4";
    //image
    let image = document.createElement("img");
    image.className = "card mb-3";
    image.src = comp.image;
    column.appendChild(image);
    //text
    let cardBody = document.createElement("div");
    cardBody.className = "card-body"
    column.appendChild(cardBody)
    let cardTitle = document.createElement("h5")
    cardTitle.className = "card-title"
    cardTitle.innerText = comp.model;
    cardBody.appendChild(cardTitle)
    let cardText = document.createElement("p")
    cardText.className = "card-text"
    cardText.innerText =
        "Processor: " + comp.processor +
        "\nSize: " + comp.size +
        "\nStorage: " + comp.storage +
        "\nRAM: " + comp.ram +
        "\nGraphics: " + comp.graphics +
        "\nPrice: " + comp.price;
    cardBody.appendChild(cardText)
    let button1 = document.createElement("a")
    button1.className = "btn btn-primary white-text"
    button1.innerText = "View"
    cardBody.appendChild(button1)
    let button2 = document.createElement("a")
    button2.className = "btn btn-primary white-text"
    button2.innerText = "Save"
    button2.onclick = save()
    cardBody.appendChild(button2)
    document.getElementById('results-container').append(column);
}

// CRUD
function allComps() {
    fetch('http://localhost:8080/comps'), {
        method: 'GET'
    }
}

function findByCompNo() {
    fetch('http://localhost:8080/comps/' + compNo), {
        method: 'GET'
    }
}