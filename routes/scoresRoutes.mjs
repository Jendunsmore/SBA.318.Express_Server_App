/*

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
    try {
        if (!req.body.playerName || !req.body.score) {
            res.status(400).send('Missing required fields');
            return;
        }

        const newScore = {
            id: scores.length + 1,
            playerName: req.body.playerName,
            score: req.body.score
        };
        scores.push(newScore);
        res.status(201).json(newScore);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// PATCH a score by id
router.patch('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).send('Invalid id');
            return;
        }

        const score = scores.find((s) => s.id === id);
        if (!score) {
            res.status(400).send('Score not found');
            return;
            }

        Object.assign(score, req.body);
        res.json(score);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Export
export default router;

*/
