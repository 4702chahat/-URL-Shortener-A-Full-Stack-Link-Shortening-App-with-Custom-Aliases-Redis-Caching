## 🚀 URL Shortener Pro — A Full-Stack Link Shortening App with Custom Aliases & Redis Caching

🔗 Transform long, messy URLs into clean, shareable short links — built with **Node.js**, **Express**, **MongoDB Atlas**, **Redis**, and a modern **frontend UI**!

### 🌟 Features

* 🔧 **Custom Alias**: Let users create their own branded short links.
* ⚡ **Redis Caching**: Speed up redirections with in-memory caching.
* 🧠 **Duplicate Detection**: Prevents multiple entries for the same long URL.
* 🌈 **Responsive Frontend**: Built from scratch using HTML/CSS & animations.
* 🔐 **MongoDB Atlas**: Secure and scalable cloud DB.

---

### 🛠️ Tech Stack

| Layer      | Tech                     |
| ---------- | ------------------------ |
| Backend    | Node.js, Express.js      |
| Database   | MongoDB Atlas (Mongoose) |
| Caching    | Redis Cloud              |
| Frontend   | HTML, CSS, Vanilla JS    |
| Deployment | Localhost / Docker-ready |

---

### 💡 How It Works

1. **Paste a long URL** into the input box.
2. *(Optional)* Provide a custom alias.
3. Click **Shorten**.
4. Get a beautiful, clickable short URL — with copy button & link preview.

> Example:
> `https://example.com/blog/2023/article-17329` → `http://localhost:5000/myalias`

---

### 📂 Folder Structure

```
├── models/         # Mongoose schema
├── routes/         # Express routes (GET /:code, POST /shorten)
├── utils/          # Redis client
├── public/         # HTML, CSS, JS frontend
├── server.js       # Main entrypoint
├── .env            # Env config
```

---

### 🚧 What's Next?

* 📊 Add **URL click analytics**
* 📆 Support **expiry times**
* 🔑 Add **authentication (JWT)** to manage links
* ☁️ Deploy on **Render / Vercel / Railway**

---

### 🤝 Ideal For

✅ Freshers (0–1 yr experience) looking to:

* Showcase backend/frontend skills
* Work with Redis & MongoDB in the cloud
* Build a real-world, deployable project

---
