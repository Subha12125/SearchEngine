const Index = require("../models/Index.model.js");
const Artical = require("../models/Artical.model.js");

const tokenize = (text = "") => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean);
};

const QUERY_EXPANSIONS = {
    mern: ["mongo", "mongodb", "express", "react", "node", "nodejs"],
};

const expandWords = (words = []) => {
    const expanded = new Set(words);
    words.forEach((word) => {
        const synonyms = QUERY_EXPANSIONS[word];
        if (Array.isArray(synonyms)) {
            synonyms.forEach((synonym) => expanded.add(synonym));
        }
    });
    return Array.from(expanded);
};

const searchArticles = async (req, res) => {
    const query = req.query.q;
    if (!query || !String(query).trim()) {
        return res.status(400).json({ message: "Query parameter 'q' is required" });
    }

    try {
        const words = expandWords(tokenize(String(query)));
        if (!words.length) {
            return res.json({ results: [] });
        }

        const results = await Index.find({ word: { $in: words } }).populate({
            path: "articals",
            model: Artical,
        });

        const articleMap = {};
        results.forEach((entry) => {
            const articles = Array.isArray(entry.articals) ? entry.articals : [];
            articles.forEach((article) => {
                if (!article || !article._id) {
                    return;
                }

                const articleId = String(article._id);
                if (!articleMap[articleId]) {
                    articleMap[articleId] = article;
                }
            });
        });

        return res.json({ results: Object.values(articleMap) });
    } catch (error) {
        console.error("Error occurred while processing search query:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    searchArticles,
};
