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
// This line tells Express to serve static files from the './styles' folder
// for any URLs that start with '/styles'. So, for example, if a client
// requests '/styles/style.css', Express will serve the file at
// './styles/style.css' without needing to write a special route for it.
app.use(express.static('styles'));

// Middleware to parse incoming JSON and form data
app.use(bodyParser.json({extended:true}));
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
// This function will be called by Express to render a view
// filePath is the path to the template file
// options is an object containing any variables we want to pass to the template
// callback is a function to call when we're done rendering the view
app.engine('ejs', (filePath, options, callback) => {
    // Read the template file
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err); // If there's an error, pass it to the callback

        // If we're rendering a page that shows all costumes
        if (options.allCostumes) {
            let result = ''; // Initialize an empty string

            // Loop over all costumes and create a string of HTML for each one
            options.allCostumes.forEach((el) => {
                result += `
                    <h2>Costume: ${el.name}</h2>
                    <h3>Category: ${el.category}</h3>
                    <h3>Description: ${el.description}<br>
                `;
            });

            // Replace the '#content#' placeholder in the template with our HTML string
            const rendered = content.toString().replace('#content#', result);
            return callback(null, rendered); // Pass the rendered HTML to the callback
        } else {
            // If we're not rendering a list of all costumes, replace placeholders in the template
            // with values from the options object
            const rendered = content
                .toString()
                .replaceAll('#name#', `${options.name}`)
                .replace('#category#', `${options.category}`)
                .replace('#description#', `${options.description}`)
                .replace('#id#', options.id);
            return callback(null, rendered); // Pass the rendered HTML to the callback
        }
    });
});

// Template engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Use routes
app.use('/api/costumes', costumesRoutes);


// Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
