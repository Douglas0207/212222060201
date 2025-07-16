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

<img width="1440" height="900" alt="Screenshot 2025-07-16 at 4 27 39 PM" src="https://github.com/user-attachments/assets/736451df-07a5-4978-ac6e-41495d1f3562" />

<img width="1440" height="900" alt="Screenshot 2025-07-16 at 4 27 43 PM" src="https://github.com/user-attachments/assets/7d2f7105-4f3f-4803-97c0-fb3be2eb7cd0" />

<img width="1440" height="900" alt="Screenshot 2025-07-16 at 4 28 21 PM" src="https://github.com/user-attachments/assets/ed28a98c-679f-44cf-8c0f-d89d52bde040" />

<img width="1440" height="900" alt="Screenshot 2025-07-16 at 4 28 39 PM" src="https://github.com/user-attachments/assets/aeba047a-f103-4dfe-9982-7296f7757839" />


---

## Author

**Robinson Abel Douglas**
Roll No: 212222060201
GitHub: [Douglas0207](https://github.com/Douglas0207)

---

