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
import costumeRoutes from './routes/costumeRoutes.mjs';
import triviaRoutes from './routes/triviaRoutes.mjs';

// Use routes
app.use('/api/costumes', costumeRoutes);
app.use('/api/trivia', triviaRoutes);

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

        // Check if rendering all costumes, trivia, or scores
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

// template engine
app.set('view engine', 'file');
app.set('views', './views');

// Costume Routes
app.get('/api/costumes', (req, res) => {
    res.json(costumes);
});

app.post('/api/costumes', (req, res) => {
    const newCostume = {
        id: costumes.length + 1,
        name: req.body.name,
        type: req.body.type
    };
    costumes.push(newCostume);
    res.status(201).json(newCostume);
});

app.patch('/api/costumes/:id', (req, res) => {
    const costume = costumes.find(c => c.id == req.params.id);
    if (costume) {
        costume.name = req.body.name || costume.name;
        costume.type = req.body.type || costume.type;
        res.json(costume);
    } else {
        res.status(404).send('Costume not found');
    }
});

app.delete('/api/costumes/:id', (req, res) => {
    const index = costumes.findIndex(c => c.id == req.params.id);
    if (index > -1) {
        costumes.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Costume not found');
    }
});

// Trivia Routes
app.get('/api/trivia', (req, res) => {
    res.json(triviaQuestions);
});

app.post('/api/trivia', (req, res) => {
    const newTrivia = {
        id: triviaQuestions.length + 1,
        question: req.body.question,
        answer: req.body.answer,
        difficulty: req.body.difficulty
    };
    triviaQuestions.push(newTrivia);
    res.status(201).json(newTrivia);
});

app.delete('/api/trivia/:id', (req, res) => {
    const index = triviaQuestions.findIndex(q => q.id == req.params.id);
    if (index > -1) {
        triviaQuestions.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Trivia question not found');
    }
});

// Score Routes
app.get('/api/scores', (req, res) => {
    res.json(scores);
});

app.post('/api/scores', (req, res) => {
    const newScore = {
        id: scores.length + 1,
        playerName: req.body.playerName,
        score: req.body.score
    };
    scores.push(newScore);
    res.status(201).json(newScore);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong! Please try again later.');
});

// Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
