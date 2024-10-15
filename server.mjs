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

// Custom middleware to simulate a page when in maintenance mode (?)
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


// Body parser- form submission
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// template engine
app.set('view engine', 'file');
app.set('views', './views');


// Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
