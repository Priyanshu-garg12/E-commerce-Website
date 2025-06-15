import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <div>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white border-end" style={{ width: 300, position: 'fixed', top: '5%', left: 0, bottom: 0 }} data-aos="fade-right">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            <Link to="/products" className="list-group-item list-group-item-action py-2 ripple sidebarbtn1" aria-current="true">
                                <i className="fa-solid fs-3 fa-tag mb-2 me-3" /><span className="fw-bold">Bestsellers</span>
                            </Link>
                            <Link to="/allproducts" className=" sidebarbtn2 list-group-item list-group-item-action py-2 ripple ">
                                <i className="fa-solid fs-3 fa-globe  mb-2 me-3" /><span className="fw-bold">All Products</span>
                            </Link>
                            <Link to="/trackorder" className="list-group-item list-group-item-action py-2 ripple"><i className="fa-solid fs-3 fa-truck-fast mb-2 me-3" /><span className="fw-bold">Track your
                                Order</span></Link>
                            <Link to="/cussupport" className="list-group-item list-group-item-action py-2 ripple"><i className="fa-solid fs-3 fa-headphones-simple  mb-2 me-3" /><span className="fw-bold">Customer
                                Support</span></Link>
                        </div>
                    </div>
                </nav><br /><br /><br />
            </div>

        </>
    )
}

export default Sidebar;
