import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function VerifyEmail() {
    const { token } = useParams();
    const navigate = useNavigate();
    const [verificationStatus, setVerificationStatus] = useState('Verifying...');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/user/verify-email/${token}`);
                const data = await response.json();

                if (data.success) {
                    setVerificationStatus('Email verified successfully! Redirecting to login...');
                    setTimeout(() => {
                        navigate('/login');
                    }, 3000);
                } else {
                    setVerificationStatus('Verification failed: ' + data.message);
                }
            } catch (error) {
                console.error('Verification error:', error);
                setVerificationStatus('Verification failed. Please try again.');
            }
        };

        if (token) {
            verifyEmail();
        }
    }, [token, navigate]);

    return (
        <>
            <Navbar />
            <div className="container" style={{ marginTop: '120px', marginBottom: '120px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <h2 style={{ color: "#2eb4ac" }}>Email Verification</h2>
                        <div className="alert mt-4" style={{ 
                            backgroundColor: verificationStatus.includes('successfully') ? '#d4edda' : '#f8d7da',
                            color: verificationStatus.includes('successfully') ? '#155724' : '#721c24',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '20px'
                        }}>
                            {verificationStatus}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default VerifyEmail;
