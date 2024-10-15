// GET all costumes
app.get('/api/costumes', (req, res) => {
    res.json(costumes);
});

// GET a specific costume by ID
app.get('/api/costumes/:id', (req, res) => {
    const costume = costumes.find(c => c.id == req.params.id);
    if (costume) {
        res.json(costume);
    } else {
        res.status(404).send('Costume not found');
    }
});

// POST a new costume (user's creation)
app.post('/api/costumes', (req, res) => {
    const newCostume = {
        id: costumes.length + 1,
        name: req.body.name,
        type: req.body.type
    };
    costumes.push(newCostume);
    res.status(201).json(newCostume);
});

// PATCH to update a costume
app.patch('/api/costumes/:id', (req, res) => {
    const costume = costumes.find(c => c.id == req.params.id);
    if (costume) {
        costume.name = req.body.name || costume.name;
        costume.type = req.body.name || costume.type;
        res.json(costume);
    } else {
        res.status(404).send('Costume not found');
    }
});

// DELETE a costume
app.delete('/api/costumes/:id', (req, res) => {
    const costumeIndex = costumes.findIndex(c => c.id == req.params.id);
    if (costumeIndex > -1) {
        costumes.splice(costumeIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).send('Costume not found');
    }
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong! Please try again later.');
});
