// jokes.js
const controller = require("../controller/controller");
const express = require('express');
const router = express.Router();

router
    .get('/', async (request, response) => {
        try {
            let jokes = await controller.getJokes();
            response.send(jokes);
        } catch (e) {
            sendStatus(e, response);
        }
    })
<<<<<<< HEAD

=======
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
    .post('/', async (request, response) => {
        try {
            let { setup, punchline } = request.body;
            await controller.createJoke(setup, punchline);
<<<<<<< HEAD

        } catch (e) {
            sendStatus(e, response);
        }
        response.sendStatus(201);
    }
    );
=======
            response.send({ message: 'Joke saved!' });
        } catch (e) {
            sendStatus(e, response);
        }
        response.sendStatus(201)
    });
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0

function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;

<<<<<<< HEAD
async function createjokefunc() {
    await controller.createJoke('Alle børnene slap ud af fængslet', 'Undtaget Peter, han nåede kun 500 meter')
}

=======
// async function createjokefunc(){
//     await controller.createJoke('Hvorfor var blondinen glad for, at samle et puzzlespil på 6 måneder?', 'Fordi der stod 2-4 år')
//     await controller.createJoke('Alle børnene løb over marken undtagen Bo', 'Han blev voldtaget af en ko')
//     await controller.createJoke('Alle børnene kom sikkert over havet undtagen Jannik', 'Han to Titanic')
//     await controller.createJoke('Hvorfor stiller århusianerne altid mælken ud på badeværelset?', 'Fordi at den ikke kan holde sig')
//     await controller.createJoke('Hvad kalder man en århusianer med spredte baller?', 'Et cykelstativ!')
//     await controller.createJoke('Hvad er pink og rød og sølv og kravler ind i vægge?', 'En baby med gafler i øjnene.')
// }
>>>>>>> bbe6c17ed1676b332e942f490cbf4a586c8f9aa0
// createjokefunc() 