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
