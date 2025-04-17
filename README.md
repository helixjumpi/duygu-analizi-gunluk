# Emotion Analysis Diary App

A web application that allows users to write diary entries and analyzes their emotional state using AI-powered sentiment analysis.

## Features

- User authentication and authorization
- Diary entry creation and management
- Real-time emotion analysis using TextBlob
- Emotional state visualization
- Personalized motivational content

## Tech Stack

- Frontend: React.js with Tailwind CSS
- Backend: Node.js with Express.js
- Database: MongoDB
- Emotion Analysis: Python with TextBlob
- Authentication: JWT

## Project Structure

```
diary-app/
├── client/          # React frontend
├── server/          # Node.js backend
└── python-service/  # Python emotion analysis service
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies for each service:

   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd server
   npm install

   # Python Service
   cd python-service
   pip install -r requirements.txt
   ```

3. Set up environment variables (see .env.example files in each directory)

4. Start the services:

   ```bash
   # Start MongoDB
   mongod

   # Start Backend
   cd server
   npm run dev

   # Start Python Service
   cd python-service
   pip install -r requirements.txt
   python app.py

   # Start Frontend
   cd client
   npm install
   npm run dev
   ```

## License

MIT
