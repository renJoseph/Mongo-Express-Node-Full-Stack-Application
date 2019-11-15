function createComp() {
    fetch('http://localhost:8080/comps/', {
        method: 'POST',
        body: JSON.stringify({
            "compNo": "\"" + compNo.value + "\"",
            "image": "\"" + image.value + "\"",
            "model": "\"" + model.value + "\"",
            "processor": "\"" + processor.value + "\"",
            "size": "\"" + size.value + "\"",
            "storage": "\"" + storage.value + "\"",
            "ram": "\"" + ram.value + "\"",
            "graphics": "\"" + graphics.value + "\"",
            "price": "\"" + price.value + "\""
        }),
        headers: { 'Content-Type': 'application/json' }
    });
}

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

function updateComp() {
fetch('http://localhost:8080/comps/' + compNo, {
    method: 'POST',
        body: JSON.stringify({
            "compNo": "\"" + compNo.value + "\"",
            "image": "\"" + image.value + "\"",
            "model": "\"" + model.value + "\"",
            "processor": "\"" + processor.value + "\"",
            "size": "\"" + size.value + "\"",
            "storage": "\"" + storage.value + "\"",
            "ram": "\"" + ram.value + "\"",
            "graphics": "\"" + graphics.value + "\"",
            "price": "\"" + price.value + "\""
        }),
        headers: { 'Content-Type': 'application/json' }
    });
}

function deleteComp() {
fetch('http://localhost:8080/comps/' + compNo, {
    method: 'DELETE'
})
}