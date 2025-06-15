import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

function Allproducts() {
    function fetchdata(){
        try {
            const backdata = fetch("https://dummyjson.com/products");
            const products = backdata.json();
            console.log(products);
            
            
        } catch (error) {
            console.log(error);
            
        }
    }
    fetchdata();

    return (
        <>
         <Navbar />
            <Sidebar />
            <section className=" container " style={{ position: 'absolute', right: 0 }} data-aos="fade-left">
                <h1 className=" ps-5 ms-5 fs-2 fw-bold">Creatine and fish oil</h1><br />
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
                        <img src="src/Images/bestseller2.png" className="w-100" alt /><br />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Wellcore- Pure Micronised Creatine Monohydrate 250g (133 Servings)</p>
                        <b className="d-inline">Rs. 899 </b>
                        <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 15% off</b><br /><br />
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
                        <img src="src/Images/bestseller2.png" className="w-100" alt /><br />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Wellcore- Pure Micronised Creatine Monohydrate 250g (133 Servings)</p>
                        <b className="d-inline">Rs. 899 </b>
                        <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 15% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                </div><br /><br /><br />
                <h1 className=" ps-5 ms-5 fs-2 fw-bold">Whey Protein</h1><br />
                <div className="bestsellers ps-5 pe-5 row d-flex " data-aos="zoom-out-up">
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/wheyprotein.png" className="w-100" alt /><br />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Wellcore- Pure whey protein (133 Servings)</p>
                        <b className="d-inline">Rs. 899 </b>
                        <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 15% off</b><br /><br />
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
                        <img src="src/Images/wheyprotein.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Wellcore- Pure Whey Protein (133 Servings)</p>
                        <b className="d-inline">Rs. 599 </b>
                        <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> 20% off</b><br /><br />    
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
                </div><br /><br /><br />
                <h1 className=" ps-5 ms-5 fs-2 fw-bold">Our Combos</h1><br />
                <div className="bestsellers ps-5 pe-5 row d-flex " data-aos="zoom-out-up">
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/FC1.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Wellcore- Pure Micronised Creatine Monohydrate With Shaker</p>
                        <b className="d-inline">Rs. 899 </b>
                        <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 14% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/FC2.png" className="w-100" alt /><br />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Shilajit And Pre-workout Combo (capsules and 133gm powder)</p>
                        <b className="d-inline">Rs. 599 </b>
                        <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 40% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/FC3.png" className="w-100" alt /><br />
                        <h6 style={{ color: '#2eb4ac' }}> 4.8 <i className="fa-solid fa-star" /></h6>
                        <p>Fish Oil Capsules And Pre-workout Combo</p>
                        <b className="d-inline">Rs. 599 </b>
                        <p className="d-inline"><s> Rs. 5969</s></p><b className="text-success "> 20% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/FC1.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Wellcore- Pure Micronised Creatine Monohydrate With Shaker</p>
                        <b className="d-inline">Rs. 899 </b>
                        <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 14% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/FC4.png" className="w-100" alt /><br />
                        <h6 style={{ color: '#2eb4ac' }}> 4.8 <i className="fa-solid fa-star" /></h6>
                        <p>Creatine Monohydrate and Fish Oil Combo (100gm creatine)</p>
                        <b className="d-inline">Rs. 999 </b>
                        <p className="d-inline"><s> Rs. 1299</s></p><b className="text-success "> 30% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/FC2.png" className="w-100" alt /><br />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Shilajit And Pre-workout Combo (capsules and 133gm powder)</p>
                        <b className="d-inline">Rs. 599 </b>
                        <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 40% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/FC1.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Wellcore- Pure Micronised Creatine Monohydrate With Shaker</p>
                        <b className="d-inline">Rs. 899 </b>
                        <p className="d-inline"><s> Rs. 999</s></p><b className="text-success "> 14% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                </div><br /><br /><br /><br />
                <h1 className=" ps-5 ms-5 fs-2 fw-bold" id="ketoproducts">Keto products</h1><br />
                <div className="bestsellers ps-5 pe-5 row d-flex " data-aos="zoom-out-up">
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/keto1.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Ketofy- Keto Folor 1KG</p>
                        <b className="d-inline">Rs. 549 </b>
                        <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> 31% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/keto2.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Ketofy- Zero Sugar Sweetner</p>
                        <b className="d-inline">Rs. 209 </b>
                        <p className="d-inline"><s> Rs. 499</s></p><b className="text-success "> 55% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3position-relative">
                        <img src="src/Images/keto3.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Ketofy- Keto Folor (5 x 1KG)</p>
                        <b className="d-inline">Rs. 2399 </b>
                        <p className="d-inline"><s> Rs. 2799</s></p><b className="text-success "> 31% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/keto4.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Ketofy- Zero Sugar Sweetner 400g</p>
                        <b className="d-inline">Rs. 579 </b>
                        <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> 31% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/keto2.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Ketofy- Zero Sugar Sweetner</p>
                        <b className="d-inline">Rs. 209 </b>
                        <p className="d-inline"><s> Rs. 499</s></p><b className="text-success "> 55% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3position-relative">
                        <img src="src/Images/keto3.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Ketofy- Keto Folor (5 x 1KG)</p>
                        <b className="d-inline">Rs. 2399 </b>
                        <p className="d-inline"><s> Rs. 2799</s></p><b className="text-success "> 31% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                    <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-2 col-md-3 position-relative">
                        <img src="src/Images/keto1.png" className="w-100" alt />
                        <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                        <p>Ketofy- Keto Folor 1KG</p>
                        <b className="d-inline">Rs. 549 </b>
                        <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> 31% off</b><br /><br />
                        <button type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                        <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                    </div>
                </div><br />
            </section>



            

        </>
    )
}

export default Allproducts
