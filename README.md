# URL Shortener with Logging and Authentication

This is a full-stack URL Shortening application built with:

- **Frontend**: React (Vite)
- **Backend**: Express.js (Node.js)
- **Logging**: Custom logging middleware with token-based access

---

## Features

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


### ✅ Copy-paste this block into your `README.md` and it will render perfectly aligned in GitHub.

Let me know when your screenshots are ready, and I can update the image markdown for you too.

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


node getLogToken.cjs


Save the token in `localStorage` as `log_token`.

---

## Output Screenshots

> Screenshots of the working frontend and backend will go here.

### Shortener Page

![Screenshot 2025-07-16 at 4 27 39 PM](https://github.com/user-attachments/assets/c8df6c37-0e8f-4f31-be60-9a53036e26c6)

![Screenshot 2025-07-16 at 4 27 43 PM](https://github.com/user-attachments/assets/a1bf47d4-26fd-42f6-82bb-134375a0bdf0)

![Screenshot 2025-07-16 at 4 28 21 PM](https://github.com/user-attachments/assets/516c5835-4104-4dcb-b914-04668bca9607)

![Screenshot 2025-07-16 at 4 28 39 PM](https://github.com/user-attachments/assets/7e722f2a-b8ef-4843-86c2-6e00af8120b6)

---

## Author

**Robinson Abel Douglas**
Roll No: 212222060201
GitHub: [Douglas0207](https://github.com/Douglas0207)

---

