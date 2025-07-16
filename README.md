# URL Shortener with Logging and Authentication

This is a full-stack URL Shortening application built with:

- **Frontend**: React (Vite)
- **Backend**: Express.js (Node.js)
- **Database**: MongoDB
- **Auth**: JWT (JSON Web Token)
- **Logging**: Custom logging middleware with token-based access

---

## Features

- Users can register and receive a JWT token.
- Authenticated users can shorten any valid URL.
- Optional custom short code and expiry time.
- Logs every frontend and backend API interaction.
- Displays shortened URL along with expiry, click count, and redirection.

---

## Tech Stack

| Layer      | Technology     |
|------------|----------------|
| Frontend   | React (Vite)   |
| Backend    | Node.js, Express |
| Database   | MongoDB (via Mongoose) |
| Auth       | JWT            |
| Logging    | Custom Middleware with Logging Server |
| Styling    | Plain CSS      |

---

## Folder Structure

---


212222060201/
│
├── backend/
│   ├── index.js
│   ├── routes/
│   └── controllers/
│
├── url-shortener-client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── main.jsx
│
├── Logging-Middleware/
│   ├── log.ts
│   └── getLogToken.cjs


---

## How to Use

### 1. Clone the repo

git clone https://github.com/Douglas0207/212222060201.git
cd 212222060201


### 2. Setup the Backend

cd backend
npm install
node index.js

Make sure your `.env` file has the correct MongoDB URI and PORT (e.g., 5056).

### 3. Setup the Frontend

cd url-shortener-client
npm install
npm run dev

Visit `http://localhost:5173`

### 4. Setup Logging Token

Get your logging token using:

```bash
node getLogToken.cjs
```

Save the token in `localStorage` as `log_token`.

---

## Output Screenshots

> Screenshots of the working frontend and backend will go here.

### ✅ Register Page

![Register](screenshots/register.png)

### ✅ Shortener Page

![Shorten URL](screenshots/shorten.png)

### ✅ Backend Console Logs

![Backend](screenshots/backend.png)

---

## Author

**Robinson Abel Douglas**
Roll No: 212222060201
GitHub: [Douglas0207](https://github.com/Douglas0207)

---

## License

This project is built for educational purposes.

```

---

### To Use:
- Save this as `README.md` in the root of your project.
- Create a `screenshots/` folder and add your images (e.g., `register.png`, `shorten.png`, `backend.png`).

Let me know if you also want a `.gitignore` or `package.json` cleanup!
```
