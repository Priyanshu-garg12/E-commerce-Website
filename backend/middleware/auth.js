const jwt = require('jsonwebtoken');
const Usermodel = require('../Models/User');

const JWT_SECRET = 'Abc1245'; // Move this to environment variables in production

const verifyToken = async (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization')?.replace('Bearer ', '') || req.cookies.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Please login to access this resource"
            });
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Add user to request
        req.user = await Usermodel.findById(decoded.id);
        
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

module.exports = { verifyToken };
