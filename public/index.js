// index.js
let setupInput = document.getElementById("setup");
let punchlineInput = document.getElementById("punchline");
let opretButton = document.getElementById('opretButton');
let rydButton = document.getElementById('clear');
let selectSite = document.getElementById('selectSite');


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
    if (respons.status !== 200) // Created
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

async function main() {
    try {
        let jokes = await get('/joke/api/jokes');
        let div = document.getElementById('jokesDiv')
        div.innerHTML = await generateJokesTable(jokes);
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
}
main();

opretButton.onclick = async () => {
    let setup = setupInput.value;
    let punchline = punchlineInput.value;
    if (setup && punchline) {
        try {
            await post("/joke/api/jokes", { setup, punchline });
        } catch (e) {
            console.log(e);
        }
        setupInput.value = '';
        punchlineInput.value = '';
        main();
    }
}

rydButton.onclick = () => {
    setupInput.value = '';
    punchlineInput.value = '';
}

async function getSites() {
    try {
        let result = await get('https://krdo-joke-registry.herokuapp.com/api/services');
        createSelect(result)
    }
    catch (e) {
        console.log(e);
    }
}

function createSelect(result) {
    let siteArray = []
    for (let i = 0; i < result.length; i++) {
        siteArray.push(result[i].address)
        let option = document.createElement('option')
        option.text = siteArray[i]
        selectSite.add(option, i)
    }
}
getSites()