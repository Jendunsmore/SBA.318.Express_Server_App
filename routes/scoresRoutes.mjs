// GET all scores
app.get('/api/scores', (req, res) => {
    res.json(scores);
});

// POST a new score
app.post('/api/scores', (req, res) => {
    const newScore = {
        id: scores.length + 1,
        playerName: req.body.playerName,
        score: req.body.score
    };
    scores.push(newScore);
    res.status(201).json(newScore);
});

// PATCH to update a score
app.patch('/api/scores/:id', (req, res) => {
    const score = scores.find(s => s.id == req.params.id);
    if (score) {
        score.playerName = req.body.playerName || score.playerName;
        score.score = req.body.score || score.score;
        res.json(score);
    } else {
        res.status(404).send('Score not found');
    }
});

// DELETE a score
app.delete('/api/scores/:id', (req, res) => {
    const scoreIndex = scores.findIndex(s => s.id == req.params.id);
    if (scoreIndex > -1) {
        scores.splice(scoreIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Score not found');
    }
});
