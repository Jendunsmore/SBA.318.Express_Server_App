// 1. create server.mjs file
// 2. npm init -y - creates package.json
// 3. correct package.json
// 4. npm i express - download express
// 5. import express at top of page
// 6. Initialize express into a variable
// 7. Listen to express(app) at the BOTTOM of the page

// Imports
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';


// Initialize Express
const app = express();
let PORT = 3000;


// Middleware to serve static files
app.use(express.static('./styles'));

// Custom middleware to log requests
const logRequest = (req, res, next) => {
    console.log(`$req.method} request for ${req.url}`);
    next();
};

// Custom middleware for maintenance mode
const maintenanceMode = (req, res, next) => {
    const isInMaintenance = false; // set to true to enable maintenance mode
    if (isInMaintenance) {
        res.status(503).send('Sorry, the site is down for maintenance.');
    } else {
        next();
    }
};

// Use of custom middleware: logRequest & maintenanceMode
app.use(logRequest);
app.use(maintenanceMode);

// view engine
app.engine('file', (filepath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);

        // Check if rendering all soctumes, trivia, or scores
        if (options.allCostumes) {
            let results = '';
            options.allCostumes.forEach(el => {
                result += `<h2>Costume: ${el.name}</h2><h3>Type: ${el.type}</h3><br>`;
            });
            const rendered = content.toString().replace('#content#', result);
            return callback(null, rendered);

        } else if (options.allTrivia) {
            let result = '';
            options.allTrivia.forEach(el => {
                result += `<h2>Question: ${el.question}</h2><h3>Answer: ${el.answer}</h3><br>`;
            });
            const rendered = content.toString().replace('#content#', result);
            return callback(null, rendered);

        } else if (options.allScores) {
            let result = '';
            options.allScores.forEach(el => {
                result += `<h2>Player: ${el.playerName}</h2><h3>Score: ${el.score}</h3><br>`;
            });
            const rendered = content.toString().replace('#content#', result);
            return callback(null, rendered);
        }

        // Fallback for single item views
        const rendered = content
            .toString()
            .replaceAll('#name#', `${options.name || 'N/A'}`)
            .replace('#type#', `${options.type || 'N/A'}`)
            .replace('#question#', `${options.question || 'N/A'}`)
            .replace('#answer#', `${options.answer || 'N/A'}`)
            .replace('#playerName#', `${options.playerName || 'N/A'}`)
            .replace('#score#', `${options.score || 'N/A'}`);

        return callback(null, rendered);
    });
});




// Body parser- form submission
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json());

// template engine
app.set('view engine', 'file');
app.set('views', './views');


// Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
