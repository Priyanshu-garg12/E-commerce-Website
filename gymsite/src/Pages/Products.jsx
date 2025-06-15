import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

function Products() {
    return (
        <>

            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <div>
                <section className=" container " style={{ position: 'absolute', right: 0 }} data-aos="fade-left">
                    <h1 className=" ps-5 ms-5 fs-2 fw-bold">Best Sellers</h1><br />
                    <div className="bestsellers ps-5 pe-5 row d-flex " data-aos="zoom-out-up">
                        <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                            <img src="src/Images/bestseller1.png" className="w-100" alt />
                            <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                            <p>Wellcore- Pure Micronised Creatine Monohydrate 250g (133 Servings)</p>
                            <b className="d-inline">Rs. 599 </b>
                            <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> 20% off</b><br />
                            <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                            <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                        </div>
                        <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                            <img src="src/Images/bestseller3.png" className="w-100" alt /><br />
                            <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                            <p>Wellcore- Pure Fish Oil Capsules (500 capsules)</p>
                            <b className="d-inline">Rs. 499 </b>
                            <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> 20% off</b><br /><br />
                            <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                            <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                        </div>
                     
                        <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                            <img src="src/Images/bestseller4.png" className="w-100" alt />
                            <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                            <p>Wellcore- Pure Micronised Creatine Monohydrate 400g (80 Servings)</p>
                            <b className="d-inline">Rs. 1299 </b>
                            <p className="d-inline"><s> Rs. 1999</s></p><b className="text-success "> 20% off</b><br />
                            <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                            <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                        </div>
                        <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                            <img src="src/Images/bestseller1.png" className="w-100" alt />
                            <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                            <p>Wellcore- Pure Micronised Creatine Monohydrate 250g (133 Servings)</p>
                            <b className="d-inline">Rs. 599 </b>
                            <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> 20% off</b><br />
                            <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                            <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                        </div>
                        <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                            <img src="src/Images/wheyprotein.png" className="w-100" alt /><br />
                            <h6 style={{ color: '#2eb4ac' }}> 4.3<i className="fa-solid fa-star" /></h6>
                            <p>Wellcore- Pure Whey Protein 2kg (33 Servings)</p>
                            <b className="d-inline">Rs. 899 </b>
                            <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 15% off</b><br /><br />
                            <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                            <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                        </div>
                        <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                            <img src="src/Images/bestseller2.png" className="w-100" alt /><br />
                            <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                            <p>Wellcore- Pure Micronised Creatine Monohydrate 250g (133 Servings)</p>
                            <b className="d-inline">Rs. 899 </b>
                            <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 15% off</b><br /><br />
                            <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                            <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                        </div>
                    </div><br /><br />
                </section><br /><br /><br />
            </div>

        </>
    )
}

export default Products;
