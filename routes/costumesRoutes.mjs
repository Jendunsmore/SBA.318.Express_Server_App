// Import
import express from 'express';

const router = express.Router();

// GET all costumes
router.get('/', (req, res) => {
    res.json(costumes);
});

// POST a new costume (user's creation)
router.post('/', (req, res) => {
    const newCostume = {
        id: costumes.length + 1,
        name: req.body.name,
        type: req.body.type
    };
    costumes.push(newCostume);
    res.status(201).json(newCostume);
});

// PATCH to update a costume
router.patch('/:id', (req, res) => {
    const costume = costumes.find(c => c.id == req.params.id);
    if (costume) {
        costume.name = req.body.name || costume.name;
        costume.type = req.body.type || costume.type;
        res.json(costume);
    } else {
        res.status(404).send('Costume not found');
    }
});

// DELETE a costume
router.delete('/:id', (req, res) => {
    const index = costumes.findIndex(c => c.id == req.params.id);
    if (index > -1) {
        costumes.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Costume not found');
    }
});

export default router;
