import React, { useEffect } from "react";
import { Link } from "react-router-dom"

function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        alert("Logout successful")
        setIsAuthenticated(false);
    }
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
    }, [isAuthenticated]);
    const token = localStorage.getItem("token");
    return (
        <section className="position-fixed z-2 bg-white w-100 mb-5 border-bottom" >
            <nav className="navbar navbar-expand-lg navbar1">
                <div className="container-fluid">
                    <Link to="/">
                        <img
                            src="src/Images/brandlogo.png"
                            style={{ width: "fit-content", height: "49px", marginLeft: "50px", marginRight: "200px" }}
                            alt="Brand Logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2 shadow"
                                style={{ width: "500px" }}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn" style={{ backgroundColor: "#2eb4ac" }} type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                            <li className="nav-item">
                                <a className="nav-link active fs-5 ms-5" aria-current="page" href="#">
                                    <i className="fa-regular fa-heart"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fs-5 ms-4" href="#">
                                    <i className="fa-solid fa-user"></i> Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">
                                    <i className="fas fa-shopping-cart"></i> Cart
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link active fs-5 ms-4" aria-disabled="true">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </a>
                            </li>
                        </ul>                        {
                            isAuthenticated ? (
                                <button onClick={handleLogout} className="btn btn-light me-5 text-white" style={{ backgroundColor: "red" }}>Logout</button>
                            ) : (
                                <div>
                                    <Link to="/register">
                                        <button className="btn btn-light me-2" style={{ backgroundColor: "#2eb4ac" }}>Register</button>
                                    </Link>
                                    <Link to="/login">
                                        <button className="btn btn-light me-5" style={{ backgroundColor: "#2eb4ac" }}>Login</button>
                                    </Link>
                                </div>
                            )
                        }

                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
