// Import
import express from 'express';

const router = express.Router();

// Trivia Routes
router.get('/', (req, res) => {
    res.json(triviaQuestions);
});

// POST a new trivia question
app.post('/api/trivia', (req, res) => {
    const newQuestion = {
        id: triviaQuestions.length + 1,
        question: req.body.question,
        answer: req.body.answer,
        difficulty: req.body.difficulty
    };
    console.log(newQuestion)
    triviaQuestions.push(newQuestion);
    res.status(201).json(newQuestion);
});

router.delete('/:id', (req, res) => {
    const index = triviaQuestions.findIndex(q => q.id == req.params.id);
    if (index > -1) {
        triviaQuestions.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Trivia question not found');
    }
});

export default router;





// POST a new trivia question
app.post('/api/trivia', (req, res) => {
    const newQuestion = {
        id: triviaQuestions.length + 1,
        question: req.body.question,
        answer: req.body.answer,
        difficulty: req.body.difficulty
    };
    console.log(newQuestion)
    triviaQuestions.push(newQuestion);
    res.status(201).json(newQuestion);
});

// DELETE a trivia question
app.delete('/api/trivia/:id', (req, res) => {
    const triviaIndex = triviaQuestions.findIndex(q => q.id == req.params.id);
    if (triviaIndex > -1) {
        triviaQuestions.splice(triviaIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Trivia question not found');
    }
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong! Please try again later.');
});
