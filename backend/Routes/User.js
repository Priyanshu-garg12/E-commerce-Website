const express = require('express');
const router = express.Router();
const { 
    registeruser, 
    loginuser, 
    verifyEmail, 
    addToCart, 
    removeFromCart, 
    getCart,
    updateCartItemQuantity,
    clearCart,
    logoutuser
} = require('../Controllers/User');
const { verifyToken } = require('../middleware/auth');

// Auth routes
router.post('/register', registeruser);
router.post('/login', loginuser);
router.post('/logout', logoutuser);
router.get('/verify-email/:token', verifyEmail);

// Cart routes
router.post('/cart/add/:userId', verifyToken, addToCart);
router.get('/cart/:userId', verifyToken, getCart);
router.delete('/cart/remove/:userId/:productId', verifyToken, removeFromCart);
router.put('/cart/update/:userId/:productId', verifyToken, updateCartItemQuantity);
router.delete('/cart/clear/:userId', verifyToken, clearCart);

module.exports = router;