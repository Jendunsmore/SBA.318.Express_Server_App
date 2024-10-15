// Import
import express from 'express';
import { costumes } from '../data/costumes/mjs'; //Import costume data

const router = express.Router();

// Create / Read - GET all costumes
// /api/costumes - POST (Add new costume) & GET (Get all costumes)

router
    .route('/')
    .post((req, res) => {
        // Check if required data is provided
        if (req.body.name && req.body.category && req.body.description) {
            let newCostume = {
                id: costumes.length + 1,  // Generate a new ID based on array length
                name: req.body.name,
                category: req.body.category,
                description: req.body.description
            };

            costumes.push(newCostume);  // Add the new costume to the array

            res.render('showCostume', newCostume);  // Render a view to show the new costume
        } else {
            res.send(`Incorrect Info, all fields are required (name, category, description).`);
        }
    })
    .get((req, res) => {
        let options = {
            allCostumes: costumes,  // Pass all costumes to the view
        };
        res.render('showAllCostumes', options);  // Render a view to display all costumes
    });

// New Costume Form
router.get('/new', (req, res) => {
    res.render('newCostume');  // Render a form to create a new costume
});

// Update / Delete / Show Costume by ID
router
    .route('/:id')
    .patch((req, res) => {
        const costume = costumes.find((c, i) => {
            if (c.id == req.params.id) {
                // Update the costume properties
                for (const key in req.body) {
                    costumes[i][key] = req.body[key];  // Dynamically update based on submitted body
                }
                return true;
            }
        });

        if (costume) {
            res.json(costume);  // Respond with the updated costume data
        } else {
            res.send('Incorrect ID');
        }
    })
    .delete((req, res) => {
        const costumeIndex = costumes.findIndex((c) => c.id == req.params.id);
        if (costumeIndex !== -1) {
            const deletedCostume = costumes.splice(costumeIndex, 1);  // Remove the costume
            res.json(deletedCostume);  // Return the deleted costume details
        } else {
            res.send('Incorrect ID');
        }
    })
    .get((req, res) => {
        const costume = costumes.find((c) => c.id == req.params.id);

        if (costume) {
            let options = {
                id: costume.id,
                name: costume.name,
                category: costume.category,
                description: costume.description,
            };
            res.render('showCostume', options);  // Render a view to display the costume details
        } else {
            res.send('Incorrect ID');
        }
    });

export default router;
