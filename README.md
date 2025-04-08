# Real Estate Application

A modern real estate web application with user authentication, property listings, and an AI-powered chatbot.

## Features

- User authentication (login/register)
- Property listing and search
- Detailed property views
- AI-powered chatbot for real estate assistance
- Responsive design using Material-UI

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- OpenAI API key

## Setup

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/real-estate
   JWT_SECRET=your-secret-key
   OPENAI_API_KEY=your-openai-api-key
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Register a new account or login with existing credentials
2. Browse available properties
3. Use the search functionality to find specific properties
4. View property details by clicking on a property card
5. Access the AI chatbot for real estate assistance

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Properties
- GET `/api/properties` - Get all properties
- GET `/api/properties/:id` - Get property details
- POST `/api/properties` - Create new property (protected)
- PUT `/api/properties/:id` - Update property (protected)
- DELETE `/api/properties/:id` - Delete property (protected)

### Chat
- POST `/api/chat` - Send message to AI chatbot (protected)

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- OpenAI API

### Frontend
- React
- Material-UI
- React Router
- Axios
- Context API for state management

## License

MIT 