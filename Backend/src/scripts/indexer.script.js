require("dotenv").config();
const connectDB = require("../db/connect.db.js");
const Artical = require("../models/Artical.model.js");
const Index = require("../models/Index.model.js");

const tokenize = (text) => {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9\s]/g, " ")
		.split(/\s+/)
		.filter(Boolean);
};

const buildIndex = async () => {
	await connectDB();

	const articles = await Artical.find({}, { title: 1, content: 1 });
	await Index.deleteMany({});

	for (const article of articles) {
		const uniqueWords = new Set([
			...tokenize(article.title || ""),
			...tokenize(article.content || ""),
		]);

		for (const word of uniqueWords) {
			await Index.updateOne(
				{ word },
				{ $addToSet: { articals: article._id } },
				{ upsert: true }
			);
		}
	}

	console.log(`Index built successfully for ${articles.length} articles.`);
	process.exit();
};

buildIndex().catch((error) => {
	console.error("Failed to build index:", error.message || error);
	process.exit(1);
});
