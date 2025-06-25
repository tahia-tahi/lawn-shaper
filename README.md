# 🌿 Lawn Shaper – Gardening Made Smart

**Live URL:** [https://lawn-shaper.web.app/](https://lawn-shaper.web.app/)

---

## 👇 Key Features

- 👩‍🌾 **Gardener Profiles:** View detailed profiles with specialties, experience, and location.
- 📸 **Tip Sharing Platform:** Gardeners can share plant care tips with images and descriptions.
- 🧾 **Topic-Based Browsing:** Tips are categorized by topic and difficulty for easy access.
- 📂 **My Tips Dashboard:** Logged-in users can manage and track their submitted tips.

---

## 🧰 Technologies Used

| Tool / Library             | Purpose                                |
|----------------------------|----------------------------------------|
| **React 19**               | Frontend framework                     |
| **Vite**                   | Fast development & build tool          |
| **Tailwind CSS 4**         | Utility-first CSS styling              |
| **Firebase**               | Authentication and hosting             |
| **React Router 7**         | SPA routing                            |
| **React Toastify 11**      | User notifications                     |
| **SweetAlert2**            | Custom alert modals                    |
| **Lottie React**           | Smooth animations                      |
| **React Icons**            | Icon library                           |
| **React CountUp**          | Animated counters                      |
| **React Slideshow Image**  | Image carousels                        |
| **React Awesome Reveal**   | Smooth fade/slide animations           |

---

## ⚙️ Backend API Overview 

Lawn Shaper server is built with **Express.js** and **MongoDB**. It includes multiple routes to support CRUD operations for gardeners, plant tips, and user profiles.

---

### 📌 Base URL

```http
http://localhost:3000/
```

---

### 📂 Tips API

| Method | Endpoint             | Description                                |
|--------|----------------------|--------------------------------------------|
| `GET`  | `/tips`              | Get latest 6 plant care tips               |
| `GET`  | `/tips/my/all`       | Get all tips (admin view or dashboard use) |
| `GET`  | `/tips/:id`          | Get single tip details by ID               |
| `POST` | `/tips`              | Create a new tip                           |
| `PUT`  | `/tips/:id`          | Update a tip by ID                         |
| `PUT`  | `/tips/:id/like`     | Increment like count for a tip             |
| `DELETE` | `/tips/:id`        | Delete a tip by ID                         |

---

### 👨‍🌾 Gardeners API

| Method | Endpoint     | Description                     |
|--------|--------------|---------------------------------|
| `GET`  | `/gardeners` | Get all gardener profiles       |

---

### 👤 Users API

| Method | Endpoint     | Description                     |
|--------|--------------|---------------------------------|
| `GET`  | `/users`     | Get all registered user profiles|
| `POST` | `/users`     | Add a new user profile          |

---

### 🟢 Root Route

| Method | Endpoint | Description                |
|--------|----------|----------------------------|
| `GET`  | `/`      | Confirms server is running |

---

### 🌐 Tech Stack

- **Express.js** – Backend framework
- **MongoDB** – NoSQL Database
- **dotenv** – Environment variable management
- **cors & express.json()** – Middleware for data handling

---

## 💻 How to Run the Server Locally

To run the Lawn Shaper server on your local machine, follow these simple steps.

---

### 🧾 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (or your own MongoDB URI)

---

### 🚀 Installation Steps

1. **Clone the repository:**

```bash
git clone https://github.com/tahia-tahi/lawn-shaper-server.git
```

2. **Navigate to the server folder:**

```bash
cd lawn-shaper-server
```

3. **Install dependencies:**

```bash
npm install
```

4. **Create a `.env` file** in the root directory and add the following variables:

```
PORT=3000
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
```

✅ Replace `your_mongodb_username` and `your_mongodb_password` with your actual MongoDB credentials.

---

5. **Start the server:**

```bash
npm run start
```

If everything is correct, you’ll see:

```
Lawn Shaper server is running on 3000
```

---

✅ Now your backend server is live on your machine and connected to MongoDB.  
You can now test API endpoints using tools like **Postman**, **Thunder Client**, or connect it to your **Lawn Shaper frontend app**.

---

## 🧪 Quick Test Endpoint

To confirm it’s running:

```http
GET http://localhost:3000/
```

You should receive this response:

```json
"Lawn Shaper Server is On"
```

---

## 🚀 Deployment Suggestion

- You can deploy this server using [Render](https://render.com/), [Vercel (for frontend)](https://vercel.com/), or [Railway](https://railway.app/).

## ⚙️ Dev Notes

This project uses Vite with React for a blazing-fast development experience. It supports HMR (Hot Module Replacement) and comes with ESLint support for cleaner code.

### Plugin Options

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react): Uses Babel for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc): Uses SWC for faster compilation

---
