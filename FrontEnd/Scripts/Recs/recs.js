let purpose = document.getElementById("purpose");
let capacity = document.getElementById("capacity");
let speed = document.getElementById("speed");
let videoQuality = document.getElementById("videoQuality");
let pricing = document.getElementById("pricing");
let processor = document.getElementById("processor")
let size = document.getElementById("size")
let storage = document.getElementById("storage")
let ram = document.getElementById("ram")
let graphics = document.getElementById("graphics")

let madeReq;
if (sessionStorage.madeReq || sessionStorage.recProductSearch) {
    sessionStorage.removeItem("madeReq");
    sessionStorage.removeItem("processor");
    sessionStorage.removeItem("size");
    sessionStorage.removeItem("storage");
    sessionStorage.removeItem("ram");
    sessionStorage.removeItem("graphics");
}

function fieldsComplete() {
    if ((purpose) && (capacity) && (speed) && (videoQuality) && (pricing)) {
        return true
    } else {
        window.alert("Please complete all fields")
        return false
    }
}

function processorRec() {
    let x = (+purpose.value + +speed.value + +pricing.value)
    let processor;
    if (x <= 3) {
        processor = "Intel Celeron"
    } if ((x > 3) && (x <= 5)) {
        processor = "Intel Core i3"
    } if ((x > 5) && (x <= 7)) {
        processor = "Intel Core i5"
    } if ((x > 7) && (x <= 9)) {
        processor = "Intel Core i7"
    } if (x === 10) {
        processor = "Intel Core i7-7700HQ"
    } return processor;
}

function sizeRec() {
    let x = (+purpose.value + +videoQuality.value + +pricing.value)
    let size;
    if (x <= 3) {
        size = 12.5
    } if ((x > 3) && (x <= 5)) {
        size = 13.3
    } if ((x > 5) && (x <= 7)) {
        size = 14
    } if ((x > 7) && (x <= 9)) {
        size = 15.6
    } if (x === 10) {
        size = 17.3
    } return size;
}

function storageRec() {
    let x = (+purpose.value + +capacity.value + +pricing.value)
    if (x <= 3) {
        storage = 64
    } if ((x > 3) && (x <= 5)) {
        storage = 128
    } if ((x > 5) && (x <= 7)) {
        storage = 256
    } if ((x > 7) && (x <= 9)) {
        storage = 512
    } if (x === 10) {
        storage = 1024
    } return storage;
}

function ramRec() {
    let x = (+purpose.value + +speed.value + +pricing.value)
    if (x <= 3) {
        ram = 2
    } if ((x > 3) && (x <= 5)) {
        ram = 4
    } if ((x > 5) && (x <= 7)) {
        ram = 6
    } if ((x > 7) && (x <= 9)) {
        ram = 8
    } if (x === 10) {
        ram = 16
    } return ram;
}

function graphicsRec() {
    let x = (+purpose.value + +videoQuality.value + +pricing.value)
    let graphics;
    if (x <= 3) {
        graphics = "Intel HD Graphics 500"
    } if ((x > 3) && (x <= 5)) {
        graphics = "Intel HD Graphics 620"
    } if ((x > 5) && (x <= 7)) {
        graphics = "Intel UHD Graphics 620"
    } if ((x > 7) && (x <= 9)) {
        graphics = "NVIDIA GeForce GTX 1050"
    } if (x === 10) {
        graphics = "NVIDIA GeForce GTX 1060"
    } return graphics;
}

function inputRecs() {
    if (fieldsComplete()) {
        document.getElementById("processor").value = processorRec()
        document.getElementById("size").value = sizeRec() + "\""
        document.getElementById("storage").value = storageRec() + " GB"
        document.getElementById("ram").value = ramRec() + " GB"
        document.getElementById("graphics").value = graphicsRec()
        sessionStorage.setItem("madeReq", "true");
        return sessionStorage.madeReq;
    }
}

function findRecommendedProducts() {
    if (sessionStorage.madeReq) {
        sessionStorage.setItem("processor", processor)
        sessionStorage.setItem("size", size)
        sessionStorage.setItem("storage", storage)
        sessionStorage.setItem("ram", ram)
        sessionStorage.setItem("graphics", graphics)
        sessionStorage.setItem("recProdSearch", "true")
        window.location.href = "Products.html"
    } else {
        window.alert("You need to have submitted a reccomendation request before you can find products")
    }
}