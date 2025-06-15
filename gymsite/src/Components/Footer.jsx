import React from 'react'

function Footer() {
    return (
        <>
            <footer className="footer bg-body-secondary p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="fw-bold" style={{ color: '#2eb4ac' }}>wellcore™</h2>
                            <p>MAXIMIZING HUMAN POTENTIAL</p>
                            <p>Got questions? Reach Out To Us:</p>
                            <p><a className="text-decoration-none text-black" href="tel:+919319157249">+91-9319157249</a></p>
                            <p><a className="text-decoration-none text-black" href="mailto:support@wellversed.in">support@wellcore.in</a></p>
                            <h6 className="fw-bold">Contact Information</h6>
                            <p>Wellversed Health Private Limited 771, Udyog Vihar Phase-5, Gurgaon, Haryana - 122008</p>
                            <p>Operational Hours: 10AM-7PM, Monday-Sunday</p>
                        </div>
                        <div className="col-md-4">
                            <h6 className="fw-bold">Policies</h6>
                            <p><a className="text-black text-decoration-none" href="#">Privacy Policy</a></p>
                            <p><a className="text-black text-decoration-none" href="#">Refund Policy</a></p>
                            <p><a className="text-black text-decoration-none" href="#">Shipping Policy</a></p>
                            <p><a className="text-black text-decoration-none" href="#">Become a Partner</a></p>
                            <p><a className="text-black text-decoration-none" href="#">Authorized Online Sellers</a></p>
                            <p><a className="text-black text-decoration-none" href="#">About Us</a></p>
                        </div>
                        <div className="col-md-4">
                            <h6 className="fw-bold">Follow us</h6>
                            <div className="social-icons">
                                <a href="#" className="fs-3 text-success m-2"><i className=" fa-brands fa-instagram" /></a>
                                <a href="#" className="fs-3 text-success m-2"><i className=" fa-brands fa-facebook" /></a>
                                <a href="#" className="fs-3 text-success m-2"><i className=" fa-brands fa-twitter" /></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="text-center">Copyright © 2025 Wellcore.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
