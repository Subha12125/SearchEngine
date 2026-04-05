require("dotenv").config();
const connectDB = require("../db/connect.db.js");
const Article = require("../models/Artical.model.js");

const articles = [
  { title: "Introduction to Node.js", category: "backend",
    content: "Node.js is a runtime built on Chrome V8 engine. It allows JavaScript to run on the server side. Node.js uses an event-driven non-blocking I/O model." },
  { title: "Express.js Basics", category: "backend",
    content: "Express is a minimal web framework for Node.js. It provides routing middleware and HTTP utilities. You can build REST APIs quickly with Express." },
  { title: "MongoDB Guide", category: "database",
    content: "MongoDB is a NoSQL database that stores data as JSON documents. It is flexible and scalable. Mongoose is an ODM library for MongoDB in Node.js." },
  { title: "React Introduction", category: "frontend",
    content: "React is a JavaScript library for building user interfaces. It uses a component-based architecture. React uses a virtual DOM for fast rendering." },
  { title: "REST API Design", category: "backend",
    content: "REST APIs use HTTP methods like GET POST PUT DELETE. Resources are represented as URLs. JSON is the most common format for API responses." },
  { title: "JavaScript Async Await", category: "javascript",
    content: "Async await is syntactic sugar over Promises in JavaScript. It makes asynchronous code look synchronous. Error handling uses try catch blocks." },
  { title: "CSS Flexbox Guide", category: "frontend",
    content: "Flexbox is a CSS layout model for arranging elements. It provides alignment and distribution of space. Use flex-direction justify-content and align-items." },
  { title: "Git and GitHub Basics", category: "tools",
    content: "Git is a version control system for tracking code changes. GitHub is a platform for hosting Git repositories. Common commands are commit push pull and merge." },
  { title: "SQL vs NoSQL", category: "database",
    content: "SQL databases are relational and use structured tables. NoSQL databases are flexible and store unstructured data. Choose based on your data model and scale." },
  { title: "How Search Engines Work", category: "backend",
    content: "Search engines crawl web pages and build an inverted index. Queries are matched against the index to find relevant documents. TF-IDF is used to rank results." },
];

const seed = async () => {
  await connectDB();
  await Article.deleteMany();
  await Article.insertMany(articles);
  console.log("10 articles seeded successfully!");
  process.exit();
};

seed();