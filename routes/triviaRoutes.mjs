// GET all trivia questions
app.get{'/api/trivia', (req, res) => {
    res.json(triviaQuestions);
}};

// GET trivia by difficulty (query parameters)
app.get('api/trivia/filter', (req, res) => {
    const difficulty = req.query.difficulty;
    const filteredQuestions = triviaQuestions.filter(q => q.difficulty === difficulty);
    res.json(filteredQuestions);
});

// POST a new trivia question
app.post('/api/trivia', (req, res) => {
    const newQuestion = {
        id: triviaQuestions.length + 1,
        question: req.body.question,
        answer: req.body.answer,
        difficulty: req.body.difficulty
    };
    triviaQuestions.push(newQuestion);
    res.status(201).json(newQuestion);
});

// DELETE a trivia question
app.delete('/api/trivia/:id', (req, res) => {
    const triviaIndex = triviaQuestions.findIndex(q => q.id == req.params.id);
    if (triviaIndex > -1) {
        triviaQuestions.splice(triviaIndex, 1);
        res.sendStatus(204);
    }else {
        res.status(404).send('Trivia question not found');
    }
});

