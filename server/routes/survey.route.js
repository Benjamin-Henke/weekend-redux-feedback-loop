const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let newSurvey = req.body;
    console.log(`Adding survey response`, newSurvey);

    // // let sqlQuery = `INSERT into "feedback" 
    //                     ("feeling", "understanding", "support", "comments")
    //                 VALUE 
    //                     ($1, $2, $3, $4)
    //                 `;
    
})

module.exports = router;