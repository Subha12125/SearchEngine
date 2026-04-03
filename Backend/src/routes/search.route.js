const express = require('express');
const router = express.Router();

/**
 * @route GET /search
 */
router.get("/search", (req, res)=>{
    try {
        res.send("Search route");
    } catch ( error ) {
        console.log(error);
    }
});

module.exports = router;

