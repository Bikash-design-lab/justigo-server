# 🛡️ Justigo Backend Server

This backend powers the **Justigo Crime Reporting and Tracking System**, developed using **Node.js**, **Express**, and **MongoDB**. It offers a RESTful API to manage users, case reports, witnesses, and more.

---

## 🚀 Features

- 🔐 JWT-based Authentication & Role Authorization (Citizen, Lawyer, Admin)
- 📁 Crime Case Management & Progress Tracking
- 🧾 Witness Details Management
- 📬 Real-time Email Alerts & Password Resets (via NodeMailer)
- 🧊 Password Encryption using Bcrypt

---

## 🏗️ Tech Stack

| Area          | Technology         |
| ------------- | ------------------ |
| Runtime       | Node.js            |
| Framework     | Express.js         |
| Database      | MongoDB (Mongoose) |
| Auth          | JSON Web Tokens    |
| Encryption    | bcrypt             |
| Email Service | NodeMailer         |

---

## 📁 Project Structure

```
justigo-server/
├── config/             # Database & environment config
├── controllers/        # Business logic handlers
├── middleware/         # JWT & role-based access control
├── models/             # Mongoose schemas
├── routes/             # Express route handlers
├── utils/              # Utilities (e.g., NodeMailer)
├── .env                # Environment variables
└── index.js            # Entry point
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/justigo-server.git
cd justigo-server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_primary_jwt_secret_key        # for access tokens
JWT_SECRET_2=your_refresh_jwt_secret_key      # for refresh tokens
EMAIL_USER=your_email@example.com             # for sending emails
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:3000              # frontend URL
```

> 🛑 **DO NOT commit this file to version control.**

### 4. Start the Server

```bash
npm run dev
```

Server runs at: `http://localhost:3000`

---

## 📬 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| POST   | `/api/user/signup` | Register a new user   |
| POST   | `/api/user/signin` | Login and get a token |

### 🚨 Crime Report Routes

| Method | Endpoint                         | Description                     |
| ------ | -------------------------------- | ------------------------------- |
| GET    | `/api/crimeReport/healthy`       | Health check                    |
| GET    | `/api/crimeReport/all`           | Get all crime reports (by role) |
| POST   | `/api/crimeReport/registerCrime` | Register a new crime            |
| PUT    | `/api/crimeReport/updateReport`  | Update progress of a crime case |

### 👁️ Witness Routes

| Method | Endpoint                         | Description              |
| ------ | -------------------------------- | ------------------------ |
| GET    | `/api/witness/healthy`           | Health check             |
| GET    | `/api/witness/all/:id`           | Get witnesses for a case |
| POST   | `/api/witness/addWitness/:id`    | Add a witness to a case  |
| PUT    | `/api/witness/updateWitness/:id` | Update witness details   |
| DELETE | `/api/witness/deleteWitness/:id` | Delete witness from case |

---

## 🔒 Security Measures

- Password hashing using `bcrypt`
- Token-based authentication with JWT
- Environment variables for secrets
- Secure email password reset with expiry
- Role-based route protection using middleware

---

## 📡 Deployment

For hosting (e.g., on **Render**):

1. Push your code to GitHub.
2. Connect the repo on [render.com](https://render.com).
3. Set the environment variables in the Render dashboard under **Environment > Add Environment Variable**.

---

## 👨‍💻 Contribution

This project is built by a passionate 3-member team during a collaborative project sprint. Contributions are welcome!

---

## 📄 License

This project is licensed under the **MIT License**.

---
