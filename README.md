# Gym Supplements E-commerce Website

A full-stack e-commerce website for gym supplements built with MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

### User Authentication
- User registration with email verification
- Secure login with JWT authentication
- Password hashing using bcrypt
- Protected routes for authenticated users

### Shopping Cart
- Add/remove products to cart
- Update product quantities
- View cart total
- Clear cart functionality
- Persistent cart data

### Product Management
- Browse supplements by category
- View product details
- Search functionality
- Filter and sort options

### User Interface
- Responsive design
- Modern and clean UI
- Bootstrap styling
- Interactive navigation
- Loading states and error handling

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Bootstrap for styling
- Vite as build tool
- Axios for API requests

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- nodemailer for email services

## Project Structure

```
project/
├── backend/
│   ├── Controllers/
│   │   ├── Supplement.js
│   │   └── User.js
│   ├── Database/
│   │   └── database.js
│   ├── middleware/
│   │   └── auth.js
│   ├── Models/
│   │   ├── Supplement.js
│   │   └── User.js
│   ├── Routes/
│   │   ├── Supplement.js
│   │   └── User.js
│   ├── index.js
│   └── package.json
│
└── gymsite/
    ├── src/
    │   ├── Components/
    │   │   ├── Footer.jsx
    │   │   ├── Navbar.jsx
    │   │   └── Sidebar.jsx
    │   ├── Pages/
    │   │   ├── Allproducts.jsx
    │   │   ├── Cart.jsx
    │   │   ├── Index.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── VerifyEmail.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── index.html
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create .env file with following variables:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   GMAIL_APP_PASSWORD=your_gmail_app_password
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd gymsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- POST `/api/user/register` - Register new user
- POST `/api/user/login` - Login user
- POST `/api/user/logout` - Logout user
- GET `/api/user/verify-email/:token` - Verify email

### Cart Operations
- POST `/api/user/cart/add/:userId` - Add item to cart
- GET `/api/user/cart/:userId` - Get cart items
- DELETE `/api/user/cart/remove/:userId/:productId` - Remove item from cart
- PUT `/api/user/cart/update/:userId/:productId` - Update cart item quantity
- DELETE `/api/user/cart/clear/:userId` - Clear cart

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Add new product (admin)
- PUT `/api/products/:id` - Update product (admin)
- DELETE `/api/products/:id` - Delete product (admin)

## Environment Variables

Create a .env file in the backend directory with the following variables:

```env
MONGODB_URI=mongodb+srv://your_mongodb_uri
JWT_SECRET=your_jwt_secret
GMAIL_APP_PASSWORD=your_gmail_app_password
NODE_ENV=development
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request


## Authors

- Priyanshu Garg (MERN Developer)

## Acknowledgments

- Bootstrap for UI components
- MongoDB Atlas for database hosting
- Vite for frontend tooling
