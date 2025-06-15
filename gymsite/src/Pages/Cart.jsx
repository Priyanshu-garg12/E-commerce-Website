import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const userId = JSON.parse(localStorage.getItem('userId'));
            const response = await fetch(`http://localhost:8000/api/user/cart/${userId}`);
            const data = await response.json();
            if (data.success) {
                setCartItems(data.data);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching cart:', error);
            setLoading(false);
        }
    };

    const removeFromCart = async (productId) => {
        try {
            const userId = JSON.parse(localStorage.getItem('userId'));
            const response = await fetch(`http://localhost:8000/api/user/cart/remove/${userId}/${productId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchCartItems();
            }
        } catch (error) {
            console.error('Error removing item:', error);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h2 className="mb-4">Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <h3>Your cart is empty</h3>
                        <Link to="/" className="btn btn-success mt-3">Continue Shopping</Link>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-lg-8">
                            {cartItems.map((item) => (
                                <div key={item._id} className="card mb-3">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-md-3">
                                                <img src={item.image} alt={item.name} className="img-fluid rounded" />
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">₹{item.price}</p>
                                            </div>
                                            <div className="col-md-3 text-end">
                                                <button 
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => removeFromCart(item._id)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Order Summary</h5>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Subtotal</span>
                                        <span>₹{calculateTotal()}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Shipping</span>
                                        <span>₹40</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-3">
                                        <strong>Total</strong>
                                        <strong>₹{calculateTotal() + 40}</strong>
                                    </div>
                                    <button className="btn btn-success w-100">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Cart;
