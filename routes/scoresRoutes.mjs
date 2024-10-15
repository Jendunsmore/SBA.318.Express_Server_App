// Import
import express from 'express';

const router = express.Router();

// GET all scores
app.get('/api/scores', (req, res) => {
    res.json(scores);
});

// POST a new score
router.post('/', (req, res) => {
    const newScore = {
        id: scores.length + 1,
        playerName: req.body.playerName,
        score: req.body.score
    };
    scores.push(newScore);
    res.status(201).json(newScore);
});

export default router;
