const express = require('express');
const router = express.Router();
const Index = require("../models/Index.model.js");

router.get('/', async (req, res) => {
    /**
     * 1. Get the query parameter 'q' from the request
     * 2. Validate the query parameter
     * 3. Search for the query in the Index collection
     * 4. Populate the articals field with the corresponding artical details
     * 5. Return the search results as a JSON response
     */
    const quary = req.query.q?.toLowerCase().trim();
    if(!quary) {
        return res.status(400).json({message: "Query parameter 'q' is required"});
    }

    try {
        const word = quary.split(" ").filter(Boolean);
        const results = await Index.find({word: { $in: word}}).populate('articals');
        return res.json({results});

        //Crate a artical map to store the artical id and its corresponding details
        const articalMap = {};
        results.forEach(entry => {
            entry.articals.forEach(artical => {
                if( !articalMap[arfical._id]) {
                    articalMap[artical._id] = artical;
                }
            })
        })

        res.json({results: Object.values(articalMap)});

    } catch (error) {
        console.error("Error occurred while processing search query:", error);
        return res.status(500).json({message: "Internal server error"});
    }

})


module.exports = router;

