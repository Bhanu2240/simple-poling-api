# Simple Polling API

A RESTful Polling API built with **Node.js**, **Express.js**, and **MongoDB**. This application allows users to create polls, vote on poll options, retrieve poll details, and prevents multiple votes from the same IP address.

---

## Features

- Create a new poll
- Get all polls
- Get a poll by ID
- Vote for a poll option
- Prevent multiple votes from the same IP address
- MongoDB Atlas integration
- Proper error handling and input validation

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS

---

## Project Structure

```
.
├── config
│   └── db.js
├── controllers
│   └── poll.controller.js
├── models
│   └── poll.model.js
├── routes
│   └── poll.routes.js
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone <your-github-repository-url>
```

### Navigate to the project

```bash
cd simple-polling-api
```

### Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

## Run the Server

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

---

## API Endpoints

### Create Poll

**POST**

```
/polls
```

Request Body

```json
{
  "question": "Which backend framework do you prefer?",
  "options": [
    "Express",
    "NestJS",
    "Fastify"
  ]
}
```

---

### Get All Polls

**GET**

```
/polls
```

---

### Get Poll By ID

**GET**

```
/polls/:id
```

---

### Vote on a Poll

**POST**

```
/polls/:id/vote
```

Request Body

```json
{
  "optionIndex": 0
}
```

---

## Example Response

```json
{
  "success": true,
  "message": "Vote recorded successfully."
}
```

---

## Bonus Feature

This project prevents multiple votes from the same IP address by storing client IP addresses for each poll and rejecting duplicate voting attempts.

---

## Author

**Bhanu Aitireddy**