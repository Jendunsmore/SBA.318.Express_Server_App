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
