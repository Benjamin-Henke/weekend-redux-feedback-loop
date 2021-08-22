const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let newSurvey = req.body;
    console.log(`Adding survey response`, newSurvey);

    let sqlQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlQuery, newSurvey)
    .then((response) => {
        res.sendStatus(200)
    })
    .catch((error) => {
        console.log('Error adding survey response', error);
        res.sendStatus(500);
    })
}) // end router.post

module.exports = router;