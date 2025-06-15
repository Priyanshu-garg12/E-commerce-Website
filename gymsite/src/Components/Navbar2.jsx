import React from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
    return (
        <>
            <section className="position-fixed z-2 bg-white w-100 mb-5 " style={{ marginTop: '60px' }} data-aos="fade-up">

                <div className="navbar navbar-expand-lg border navbar2 w-100 ">
                    <div className="container-fluid w-100">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-5 d-flex justify-content-around">
                                <li className="nav-item dropdown active fs-6">
                                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Shop By Category
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="./allproducts">Product Category</Link></li>
                                        <li><Link className="dropdown-item" to="./allproducts">Wellness Category</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 fs-6" aria-current="page" to="./products"><i className="fa-solid fa-tag" /><span> </span>
                                        Bestsellers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 fs-6" to="./products"><i className="fa-solid fa-percent" /><span> </span>
                                        Deals</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 fs-6" to="/"><i className="fa-solid fa-square-rss" /> <span> </span>Blogs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 fs-6" to="./allproducts"><i className="fa-solid fa-box" /><span> </span>Bulk
                                        Enquiry</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 fs-6" to="./trackorder"><i className="fa-solid fa-circle-exclamation" /><span></span>
                                        Authenticator</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 fs-6" to="./trackorder"><i className="fa-solid fa-truck-fast" /> <span></span>Track Your
                                        order</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 fs-6" to="./cussupport"><i className="fa-solid fa-headset" /> <span></span>
                                        Customer
                                        Support</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link ms-5 fs-6 me-5" to="./cussupport"><i className="fa-solid fa-address-card" /><span/> About
                                        us</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section><br /><br /><br /><br /><br />

        </>
    )
}

export default Navbar2
