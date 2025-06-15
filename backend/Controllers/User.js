const Usermodel = require("../Models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const JWT_SECRET = 'Abc1245'; // Move this to environment variables in production
const COOKIE_EXPIRE = 30; // Cookie expiration in days

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "priyanshugarg615@gmail.com",
        // You need to generate an "App Password" from your Google Account:
        // 1. Go to Google Account settings
        // 2. Security
        // 3. 2-Step Verification
        // 4. App passwords (at the bottom)
        // 5. Generate a new app password for "Mail"
        pass: process.env.GMAIL_APP_PASSWORD || "your_app_password_here"
    },
    tls: {
        rejectUnauthorized: false
    }
});


// const token = jwt.sign({ id: Usermodel._id }, JWT_SECRET, { expiresIn: '1h' });

// const options = {
//     expires: new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
//     httpOnly: true,
// };
const registeruser = async (req, res) => {
    try {
        const { name, email, password, mobile } = req.body;

        // Input validation
        if (!name || !email || !password || !mobile) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format"
            });
        }

        // Password validation (min 6 chars, at least 1 number, 1 uppercase)
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long and contain at least one number and one uppercase letter"
            });
        }

        // Mobile number validation (10 digits)
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(mobile)) {
            return res.status(400).json({
                success: false,
                message: "Mobile number must be 10 digits"
            });
        }
        
        // Check if user exists
        const existingUser = await Usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);        // Create new user
        const newUser = await Usermodel.create({
            name,
            email,
            password: hashedPassword,
            mobile,
            isVerified: true  // Auto-verify for testing
        });        // Generate JWT token
        const token = jwt.sign(
            { id: newUser._id }, 
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Create verification URL
        const verificationUrl = `http://localhost:5173/verify-email/${token}`;

        // Email verification setup
        const mailOptions = {
            from: '"Gym Supplements" <priyanshugarg615@gmail.com>',
            to: email,
            subject: "Please verify your email",
            html: `
                <h2>Welcome to Gym Supplements!</h2>
                <p>Please click the link below to verify your email address:</p>
                <a href="${verificationUrl}" style="padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">
                    Verify Email
                </a>
                <p>This link will expire in 1 hour.</p>
            `
        };

        // Cookie options
        const options = {
            expires: new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        };        // Try to send verification email if configured
        try {
            if (process.env.GMAIL_APP_PASSWORD) {
                await transport.sendMail(mailOptions);
            }
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Continue with registration even if email fails
        }

        // Send response
        res.status(201)
            .cookie("token", token, options)
            .json({
                success: true,
                message: "Registration successful! Please check your email to verify your account.",
                data: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                    isVerified: newUser.isVerified
                }
            });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            success: false,
            message: "Registration failed. Please try again.",
            error: error.message
        });
    }
};

// Add email verification endpoint
const verifyEmail = async (req, res) => {
    try {
        const { token } = req.params;

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Find and update user
        const user = await Usermodel.findByIdAndUpdate(
            decoded.id,
            { isVerified: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            message: "Email verified successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                isVerified: user.isVerified
            }
        });

    } catch (error) {
        res.json({
            success: false,
            message: "Invalid or expired verification token"
        });
    }
};





// // Middleware to verify JWT token
// const verifyToken = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;

//         if (!token) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Please login to access this resource"
//             });
//         }

//         const decoded = jwt.verify(token, JWT_SECRET);
//         req.user = await Usermodel.findById(decoded.id);

//     } catch (error) {
//         return res.status(401).json({
//             success: false,
//             message: "Invalid or expired token"
//         });
//     }
// };

// Modified loginuser function to include cookie
const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await Usermodel.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email doesn't exist",
            });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password",
            });
        }

        // Generate token
        const token = jwt.sign(
            { id: existingUser._id },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        // Cookie options
        const options = {
            expires: new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        };

        res.status(200)
            .cookie("token", token, options)
            .json({
                success: true,
                message: "Login Successful",
                data: {
                    id: existingUser._id,
                    name: existingUser.name,
                    email: existingUser.email,
                    isVerified: existingUser.isVerified
                },
                token
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Modified logoutuser function
const logoutuser = async (req, res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        });

        res.status(200).json({
            success: true,
            message: "Logged Out Successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Protected route example using verifyToken middleware
const addToCart = async (req, res) => {
    try {
        const { userId } = req.params;
        const product = req.body;

        const user = await Usermodel.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Check if product already exists in cart
        const existingProduct = user.cart.find(item => 
            item.productId.toString() === product._id
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            user.cart.push({
                productId: product._id,
                quantity: 1,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                discount: product.discount
            });
        }

        await user.save();

        res.json({
            success: true,
            message: "Product added to cart successfully",
            data: user.cart
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getCart = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await Usermodel.findById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            data: user.cart
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.params;
        const user = await Usermodel.findById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        user.cart = user.cart.filter(item => 
            item.productId.toString() !== productId
        );

        await user.save();

        res.json({
            success: true,
            message: "Product removed from cart",
            data: user.cart
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateCartItemQuantity = async (req, res) => {
    try {
        const { userId, productId } = req.params;
        const { quantity } = req.body;

        if (!quantity || quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Invalid quantity"
            });
        }

        const user = await Usermodel.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const cartItem = user.cart.find(item => 
            item.productId.toString() === productId
        );

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Product not found in cart"
            });
        }

        cartItem.quantity = quantity;
        await user.save();

        res.json({
            success: true,
            message: "Cart item quantity updated",
            data: user.cart
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const clearCart = async (req, res) => {
    try {
        const { userId } = req.params;
        
        const user = await Usermodel.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        user.cart = [];
        await user.save();

        res.json({
            success: true,
            message: "Cart cleared successfully",
            data: user.cart
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    registeruser,
    loginuser,
    verifyEmail,
    addToCart,
    getCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    logoutuser
};