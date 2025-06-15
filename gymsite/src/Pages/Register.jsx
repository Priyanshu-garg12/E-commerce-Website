import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convert mobile to number
            const requestData = {
                ...formData,
                mobile: Number(formData.mobile)
            };

            const response = await fetch('http://localhost:8000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            const data = await response.json();
            if (data.success) {
                alert(data.message);
                navigate('/login');
            } else {
                alert(data.message || 'Registration failed. Please check your details and try again.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Please check your internet connection and try again.');
        }
    };

    return (
        <>
            <Navbar />
            <div className='w-100 h-100 d-flex justify-content-center align-items-center' style={{ marginTop: '120px', marginBottom: '120px' }}>
                <form className='w-25 border p-5' onSubmit={handleSubmit}>
                    <h1 className='mb-5 fw-bold' style={{ color: "#2eb4ac" }}>REGISTER</h1>
                    
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-light" style={{ backgroundColor: "#2eb4ac" }}>
                        Register
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Register;
