// Import
import express, {Router} from 'express';
import {scores} from '../data/data.mjs';

const router = Router();

// GET all scores
router.get('/api/scores', (req, res) => {
    console.log(`Received GET request to ${req.url}`);
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

// PATCH a score by id
router.patch('/:id', (req, res) => {
    const score = scores.find((s, i) => {  // Find the score by id
        if (s.id == req.params.id) {  // update score's properties, dynamically
            for (const key in req.body) {
                scores[i][key] = req.body[key];
            }
        }
    });
    if (score) {
        res.json(score);
    } else {
        res.status(404).send('Score not found');
    }
});

// Export
export default router;
