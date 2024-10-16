// 1. create server.mjs file
// 2. npm init -y - creates package.json
// 3. correct package.json
// 4. npm i express - download express
// 5. import express at top of page
// 6. Initialize express into a variable
// 7. Listen to express(app) at the BOTTOM of the page

// Imports
import bodyParser from 'body-parser';
import fs from 'fs';
import express from 'express';
import costumesRoutes from './routes/costumesRoutes.mjs';

//import scoresRoutes from './routes/scoresRoutes.mjs';
//import triviaRoutes from './routes/triviaRoutes.mjs';


// Initialize Express
const app = express();
const PORT = 3000;

// Middleware to serve static files (e.g., CSS)
app.use(express.static('./styles'));

// Middleware to parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware to log requests
const logRequest = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
};

// Custom middleware for maintenance mode
const maintenanceMode = (req, res, next) => {
    const isInMaintenance = false; // Set to true for maintenance mode
    if (isInMaintenance) {
        res.status(503).send('Sorry, the site is down for maintenance.');
    } else {
        next();
    }
};

// Use of custom middleware: logRequest & maintenanceMode
app.use(logRequest);
app.use(maintenanceMode);

// View engine configuration
app.engine('file', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);

        if (options.allCostumes) {
            let result = '';

            options.allCostumes.forEach((el) => {
                result +=`<h2>Costume: ${el.name}</h2><h3>Type: ${el.type}</h3><br>`;
    });

        /*
            let result = '';
        if (options.allCostumes) {
            options.allCostumes.forEach((el) => {
                result += `<h2>Costume: ${el.name}</h2><h3>Type: ${el.type}</h3><br>`;
            });
        */

        const rendered = content
            .toString()
            .replace('#content#', result)
            .replace('#name#', `${options.name || 'N/A'}`)
            .replace('#type#', `${options.type || 'N/A'}`)
            .replace('#question#', `${options.question || 'N/A'}`)
            .replace('#answer#', `${options.answer || 'N/A'}`)
            .replace('#playerName#', `${options.playerName || 'N/A'}`)
            .replace('#score#', `${options.score || 'N/A'}`);

        return callback(null, rendered);
        }
    });
});

// Template engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Use routes
app.use('/api/costumes', costumesRoutes);
//app.use('/api/scores', scoresRoutes); // Added the scores route
//app.use('/api/trivia', triviaRoutes);

// 404 Error handling middleware
app.use((req, res) => {
    res.status(404).send("Resource not found");
});

// Error-handling middleware for server issues
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong! Please try again later.');
});

// Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
