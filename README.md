# 🔍 SearchEngine-Trial

A simple **Node.js + MongoDB based search engine** that uses an **inverted index** approach to efficiently search articles.

---

## 🚀 Features

* 🔎 Fast keyword-based search
* 🧠 Custom tokenizer (lowercase + clean text)
* 📚 Inverted indexing (word → articles)
* ⚡ Optimized retrieval using MongoDB
* 🔄 Duplicate removal in results
* 🧩 Modular structure (models, controllers, DB)

---

## 🏗️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB + Mongoose
* **Environment:** dotenv

---

## 📂 Project Structure

```
SearchEngine-Trial/
│
├── db/
│   └── connect.db.js        # MongoDB connection
│
├── models/
│   ├── Artical.model.js     # Article schema
│   └── Index.model.js       # Inverted index schema
│
├── controllers/
│   └── search.controller.js # Search logic
│
├── scripts/
│   └── buildIndex.js        # Index builder script
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ How It Works

### 1️⃣ Indexing (buildIndex.js)

* Reads all articles from DB
* Tokenizes title + content
* Stores unique words
* Creates inverted index:

```json
{
  "word": "ai",
  "articals": ["articleId1", "articleId2"]
}
```

---

### 2️⃣ Searching

* User sends query:

```
/search?q=ai future
```

* Steps:

  * Tokenize query
  * Find matching words in Index collection
  * Fetch related articles
  * Remove duplicates
  * Return results

---

## 🧪 Example

### Query:

```
ai future
```

### Process:

```
["ai", "future"] → search index → fetch articles
```

### Response:

```json
{
  "results": [
    { "title": "AI is the future", "content": "..." }
  ]
}
```

---

## 🛠️ Installation

```bash
git clone https://github.com/Subha12125/SearchEngine-Trial.git
cd SearchEngine-Trial
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## ▶️ Run Project

### Start Server

```bash
npm start
```

### Build Index

```bash
node scripts/buildIndex.js
```

---

## ⚡ API Endpoint

### Search Articles

```
GET /search?q=your_query
```

---

## 📈 Future Improvements

* ✅ Ranking (TF-IDF / relevance scoring)
* ✅ AND / OR search filtering
* ✅ Fuzzy search (typo handling)
* ✅ Pagination
* ✅ Stop words removal
* ✅ Stemming (running → run)

---

## 🧠 Learning Concept

This project demonstrates:

* Inverted Index (used in Google search)
* Tokenization
* Search optimization
* MongoDB relations with `.populate()`

---

## 🤝 Contributing

Pull requests are welcome! Feel free to improve performance or add features.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Subhabrata Paul**
