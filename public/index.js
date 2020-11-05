// index.js
<<<<<<< HEAD
=======
let setupInput = document.getElementById("setup");
let punchlineInput = document.getElementById("punchline");
let opretButton = document.getElementById('opretButton');
let rydButton = document.getElementById('clear');
let selectSite = document.getElementById('selectSite');

let othersitesObjects = []

>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
<<<<<<< HEAD
    if (respons.status !== 201) // Created
=======
    if (respons.status !== 200) // Created
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
        throw new Error(respons.status);
    return await respons.json();
}

async function getText(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
}

async function generateJokesTable(jokes) {
    let template = await getText('/index.hbs');
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({ jokes });
}

async function main(url) {
    try {
        let jokes = await get(url);
<<<<<<< HEAD
        let div = document.getElementById('jokesdiv')
=======
        let div = document.getElementById('jokesDiv')
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
        div.innerHTML = await generateJokesTable(jokes);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}
main('/api/jokes');

<<<<<<< HEAD
let opretButton = document.getElementById('opretButton')
let setupfield = document.getElementById('setup')
let punchInField = document.getElementById('punchline')
let rydButton = document.getElementById('clear')


opretButton.onclick = async () => {
    if(setupfield.value && punchInField.value){
    try {
        await post("/api/jokes", { setup: setupfield.value , punchline: punchInField.value });
    } catch (e) {
    }
setupfield.value = "";
punchInField.value = "";
main();
=======
opretButton.onclick = async () => {
    if (setupInput.value && punchlineInput.value) {
        try {
            await post("/api/jokes", { setup: setupInput.value, punchline: punchlineInput.value });
        } catch (e) {
        }
        setupInput.value = '';
        punchlineInput.value = '';
        main('/api/jokes');
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
    }
}

rydButton.onclick = () => {
<<<<<<< HEAD
    setupfield.value = ''
    punchInField.value = ''
}

let selectSite = document.getElementById('selectSite')

let othersitesObjects = []

selectSite.onchange = async () => {

=======
    setupInput.value = '';
    punchlineInput.value = '';
}

selectSite.onchange = async () => {
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
    try{
        let id;
        for (site of othersitesObjects) {
            if (site.name === selectSite.value) {
                id = site._id
            }
         }
        let jokes = await get("/api/otherjokes/" + id)
        let div = document.getElementById('jokesdiv')
        div.innerHTML = await generateJokesTable(jokes);
    }
<<<<<<< HEAD
    catch(e){
        
    }
    

=======
    catch(e){    
    }
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
}

async function getSites() {
    try {
        let result = await get('/api/othersites');
        othersitesObjects = result
        createSelect(result)
    }
    catch (e) {
        console.log(e);
    }
}

function createSelect(result) {
    let siteArray = []
    for (let i = 0; i < result.length; i++) {
        siteArray.push(result[i].name)
        let option = document.createElement('option')
        option.text = siteArray[i]
        selectSite.add(option, i)
    }
<<<<<<< HEAD

}
getSites()


=======
}
getSites()
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
