# Food Delivery Website

A full-stack food delivery application built on the **MERN stack** (MongoDB, Express.js, React, Node.js). This project allows users to browse restaurants, add food items to their cart, and place orders seamlessly.

## Features

- **User Authentication**
  - Secure registration and login functionality.
  - Authentication using JSON Web Tokens (JWT).

- **Restaurant and Menu Management**
  - Browse a list of restaurants with their menus.
  - Search functionality for restaurants or food items.

- **Cart and Orders**
  - Add food items to the cart and manage quantities.
  - Place orders and track order status.

- **Payment Integration**
  - Integration with popular payment gateways.

- **Admin Panel**
  - Manage restaurants, menus, and orders.

- **Responsive Design**
  - Fully responsive UI for both desktop and mobile users.

## Technology Stack

- **Frontend**: React.js with React Router for navigation and Axios for API calls.
- **Backend**: Node.js with Express.js framework.
- **Database**: MongoDB for data storage.
- **Authentication**: JSON Web Tokens (JWT).
- **Styling**: CSS/SCSS or Tailwind CSS (specify if any framework is used).

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yathinreddi/food-delivery-website.git
   cd food-delivery-website
   ```

2. **Install dependencies**:
   - Install backend dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Install frontend dependencies:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory with the following keys:
     ```env
     PORT=5000
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     PAYMENT_GATEWAY_KEY=your-payment-gateway-key
     ```

4. **Run the application**:
   - Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend application:
     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
food-delivery-website/
│
├── backend/
│   ├── controllers/      # Business logic for API routes
│   ├── models/           # Database schemas
│   ├── routes/           # API route definitions
│   ├── middleware/       # Custom middleware (e.g., auth)
│   └── server.js         # Entry point for the backend
│
├── frontend/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── utils/        # Helper functions
│   │   └── App.js        # Main React app
│   └── package.json
│
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact [yathinreddi](https://github.com/yathinreddi).
