import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Navbar2 from '../Components/Navbar2';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Index() {
  const [products, setProducts] = React.useState([]);

  // api calling
  async function fetchdatafrombackend() {
    try {
      const response = await fetch("http://localhost:8000/api/products/get_allsupp");
      const data = await response.json();
      console.log(data.data)
      setProducts(data.data);


    } catch (error) {
      console.log("Error fetching data", error.message);
    }


  }

  useEffect(() => {
    fetchdatafrombackend();
  }, [])

  // Hanlde add to cart
  const addToCart = async (product) => {
    console.log(product)
    const userId = JSON.parse(localStorage.getItem('userId'));
    try {
      const response = await fetch(`http://localhost:8000/api/user/addtocart/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding to cart", error.message);
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      {/* carousel started */}
      <div>
        <section style={{ height: 'fit-content' }} data-aos="zoom-in">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={2000}>
                <img src="src/Images/c.png" className="d-block w-100 " alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <img src="src/Images/c2.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <img src="src/Images/c3.png" className="d-block w-100  " alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section><br /><br /><br /><br /><br />
      </div>
      {/* carousel ended */}
      {/* bestseller started */}
      <div>
        <section className="ps-5 pe-5" data-aos="fade-up" data-aos-duration={1500}>
          <h1 className=" ps-5 ms-5 fs-2 fw-bold">Best Sellers</h1><br />
          <div className="bestsellers ps-5 pe-5 row d-flex justify-content-center">
            {products && products.filter(products=>products.category === "combo").map((product, index) => {
              return (
                <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-4 position-relative" data-aos="fade-up" data-aos-duration={1000}>
                  <img src={product.image} alt={product.name} className="w-100" />
                  <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                  <p>{product.name}</p>
                  <b className="d-inline">Rs. {product.price} </b>
                  <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> {product.discount}% off</b><br />
                  <button onClick={() => addToCart(product)} type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                  <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                </div>
              )
            })

            }
          </div><br />
          <div className="w-100 text-center">
            <Link to="/allproducts"> <button className="btn btn-success m-3 " style={{ backgroundColor: '#2eb4ac', border: 'none' }}> See More
              Products</button></Link>
          </div>
        </section><br /><br />

        <div className="bg-body-tertiary" style={{ width: '100%', height: 12, boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.374)' }} />
        <br /><br /><br /><br />
      </div>

      {/* bestsellers ended */}
      {/* combos started */}
      <div>
        <section className="ps-5 pe-5" data-aos="fade-up" data-aos-duration={1500}>
          <h1 className=" ps-5 ms-5 fs-2 fw-bold">Our Combos</h1><br />
          <div className="bestsellers ps-5 pe-5 row d-flex justify-content-center">
            {products.filter(products => products.category === "combo").map((product, index) => {
              return (
                <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-4 position-relative" data-aos="fade-up" data-aos-duration={1000}>
                  <img src={product.image} alt={product.name} className="w-100" />
                  <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                  <p>{product.name}</p>
                  <b className="d-inline">Rs. {product.price} </b>
                  <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> {product.discount}% off</b><br />
                  <button onClick={() => addToCart(product)} type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                  <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                </div>
              )
            })


            }
          </div><br />
          <div className="w-100 text-center">
            <Link to="/allproducts"> <button className="btn btn-success m-3 " style={{ backgroundColor: '#2eb4ac', border: 'none' }}> See More
              Products</button></Link>
          </div>
        </section><br /><br />

        <div className="bg-body-tertiary" style={{ width: '100%', height: 12, boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.374)' }} />
        <br /><br /><br /><br />
      </div>
      {/* combos ended */}
      {/* categories started */}

      <div>
        <section id="combo" className="ps-5 pe-5">
          <h1 className=" ps-5 ms-5 fs-2 fw-bold">Shop By Category</h1><br />
          <div className="bestsellers ps-5 pe-5 row d-flex justify-content-center">
            <div className=" category1 bestsellercard border shadow text-center   rounded p-3  m-4 col-6 col-lg-4 position-relative" style={{ height: '300px' }} data-aos="fade-up" data-aos-duration={1300}>
              <h1 className='categorytext text'>Protein</h1>
            </div>
            <div className=" category2 bestsellercard border shadow text-center  rounded p-3  m-4 col-6 col-lg-4 position-relative" style={{ height: '300px' }} data-aos="fade-up" data-aos-duration={1600}>
              <h1 className='categorytext text'>Creatine</h1>
            </div>
            <div className=" category3 bestsellercard border shadow text-center  rounded p-3  m-4 col-6 col-lg-4 position-relative" style={{ height: '300px' }} data-aos="fade-up" data-aos-duration={1900}>
              <h1 className='categorytext text-dark'>Fish Oil</h1>
            </div>
          </div><br />

        </section ><br /><br />

        <div className="bg-light" style={{ width: '100%', height: 10, boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.374)' }} />
        <br /><br /><br /><br />
      </div >




      {/* carousel 2 started */}
      <div>
        <section style={{ height: 'fit-content', width: '100%' }} data-aos="zoom-in">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ cursor: 'pointer' }}>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={2000}>
                <img src="src/Images/carousel2img2.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <img src="src/Images/carousel2img1.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section><br /><br /><br />
        <div className="bg-body-tertiary" style={{ width: '100%', height: 12, boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.374)' }} />
        <br /><br /><br /><br />
      </div>
      {/* carousel 2 ended */}
      {/* keto started */}
      <div>
        <section className="ps-5 pe-5" data-aos="fade-up" data-aos-duration={1500}>
          <h1 className=" ps-5 ms-5 fs-2 fw-bold">Keto products</h1><br />
          <div className="bestsellers ps-5 pe-5 row d-flex justify-content-center" >
            {products.filter(products => products.category === "keto").map((product, index) => {
              return (
                <div className="bestsellercard border shadow  rounded p-3  m-4 col-6 col-lg-4 position-relative" data-aos="fade-up" data-aos-duration={1000}>
                  <img src={product.image} alt={product.name} className="w-100" />
                  <h6 style={{ color: '#2eb4ac' }}> 4.9 <i className="fa-solid fa-star" /></h6>
                  <p>{product.name}</p>
                  <b className="d-inline">Rs. {product.price} </b>
                  <p className="d-inline"><s> Rs. 799</s></p><b className="text-success "> {product.discount}% off</b><br />
                  <button onClick={() => addToCart(product)} type="button" className="btn btn-outline-success w-100">Add to Cart</button>
                  <i className="fa-regular fa-heart fs-4 bestsellercardheartlogo" />
                </div>
              )
            })


            }
          </div><br />
          <div className="w-100 text-center">
            <Link to="/allproducts"> <button className="btn btn-success m-3 " style={{ backgroundColor: '#2eb4ac', border: 'none' }}> See More
              Products</button></Link>
          </div>
        </section><br /><br />

        <div className="bg-body-tertiary" style={{ width: '100%', height: 12, boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.374)' }} />
        <br /><br /><br /><br />
      </div>
      {/* keto ended */}
      {/* authorisors started */}

      <div>
        <section className="authorisedsellers" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
          <div className="container">
            <h1>Authorised Online Sellers <i className="fa-solid fa-square-check" style={{ color: '#2eb4ac' }} /></h1><br />
            <div className="content " style={{ backgroundColor: '#e4f9fd', height: 'max-content' }}>
              <img src="src/Images/authori1.png" style={{ width: '24.5%' }} />
              <img src="src/Images/authori2.png" style={{ width: '24.5%' }} />
              <img src="src/Images/authori3.png" style={{ width: '24.5%' }} />
              <img src="src/Images/authori4.png" style={{ width: '24.5%' }} />
            </div>
          </div>
        </section><br /><br /><br />
        <div className="bg-body-tertiary" style={{ width: '100%', height: 12, boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.374)' }} />
        <br /><br />
      </div>
      {/* authorizors ended */}
      {/* testimonals started */}
      <div>
        <section id="testimonals" className="container" style={{ paddingTop: 70, paddingBottom: 100 }}>
          <h1>Testimonals</h1><br />
          <div id="carouselExampleAutoplaying" className="carousel slide aria-controls" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item  " data-bs-interval={2000}>
                <img src="src/images/blackimage.png" className="d-block mt-5" alt="..." style={{ height: 610, width: '100%', filter: 'brightness(100%)' }} />
                <div className="carousel-caption d-none d-md-block">
                  <img src="src/images/testi1.png" className=" m-3" />
                  <h5 className="text-black">AMIT KUMAR</h5>
                  <p className="text-secondary">National Level Power Lifter <br /></p>
                  <p style={{ color: 'gold' }}><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                  <p className="text-black"><i className="fa-solid fa-quote-left text-success fs-4" />Powered by
                    scientifically formulated ingredients, Wellcore ensures maximum performance, faster
                    muscle growth, and sustained energy for intense workouts. <i className="fa-solid fa-quote-right text-success fs-4"> </i> </p>
                </div>
              </div>
              <div className="carousel-item " data-bs-interval={2000}>
                <img src="src/images/blackimage.png" className="d-block w-100 mt-5" alt="..." style={{ height: 610, width: '100%', filter: 'brightness(100%)' }} />
                <div className="carousel-caption d-none d-md-block">
                  <img src="src/images/testi2.png" className="m-3" />
                  <h5 className="text-black">NEHAL SINGH</h5>
                  <p className="text-secondary">Bodybuilder <br /></p>
                  <p style={{ color: 'gold' }}><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                  <p className="text-black"><i className="fa-solid fa-quote-left text-success fs-4" />Wellcore
                    brings you premium-quality supplements designed to amplify strength, endurance, and
                    muscle recovery, helping you push beyond your limits. <i className="fa-solid fa-quote-right text-success fs-4"> </i> </p>
                </div>
              </div>
              <div className="carousel-item active " data-bs-interval={2000}>
                <img src="src/images/blackimage.png" className="d-block w-100 mt-5" alt="..." style={{ height: 610, width: '100%', filter: 'brightness(100%)' }} />
                <div className="carousel-caption d-none d-md-block">
                  <img src="src/images/testi3.png" className="m-3" />
                  <h5 className="text-black">RAJAT DALAL</h5>
                  <p className="text-secondary">Extreme Power Lifter <br /></p>
                  <p style={{ color: 'gold' }}><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></p>
                  <p className="text-black"><i className="fa-solid fa-quote-left text-success fs-4" /> From
                    high-quality whey protein to powerful pre-workouts, Wellcore is the ultimate fitness
                    companion, trusted by athletes and fitness enthusiasts alike.<i className="fa-solid fa-quote-right text-success fs-4"> </i> </p>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div><br />
        </section>
        <div className="bg-body-tertiary" style={{ width: '100%', height: 12, boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.374)' }} />
        <br /><br /><br />
      </div>
      {/* testimonals ended */}

      <div>
        <div className="container mt-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <h2 className="fw-bold">Best Bodybuilding &amp; Gym Supplements Online</h2>
          <p className="mt-3 text-secondary"> Consuming proper dietary requirements is critical for maintaining optimal
            health, growth, and function throughout life Our body gets energy from the food we eat and the drinks we
            consume. The misapplication of any vital nutrients in the body can be problematic for healthy
            individuals and aging adults. </p>
          <p id="extratext" ></p>
          <button id="read-more" className="fw-bold text-decoration-none btn btn-outline-success " >Read
            More</button>
        </div><br /><br /><br /><br />
        <div className="bg-body-tertiary" style={{ width: '100%', height: 12, boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.374)' }} />
        <br />
      </div>

      {/* faq started */}
      <div>
        <section className="container mt-5" data-aos="zoom-out-up">
          <h2 className="fw-bold">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item border bg-white border-success rounded mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-secondary-subtle rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What Are The best Supplement for Gym Beginner
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">For beginners, it is important to focus on a balanced diet first. It
                  is not advised to start taking supplements without expert supervision. However, if you are
                  going for regular muscle training or power exercise, then protein powder and creatine can be
                  your best buddies. You may also keep a check on your carb intake by replacing normal wheat
                  chapati with keto flour chapati. </div>
              </div>
            </div>
            <div className="accordion-item border bg-white rounded border-success mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-secondary-subtle rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Where Can I Buy Supplements Online?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">ou can safely order the best quality, authentic fitness supplements
                  online from Wellversed. Whey protein, muscle gain, pre/post-workout essentials, and any
                  other nutritional supplement you need, Wellversed is India’s trusted one-stop online shop
                  for supplements.</div>
              </div>
            </div>
            <div className="accordion-item border bg-white  rounded border-success mb-2">
              <h2 className="accordion-header ">
                <button className="accordion-button collapsed bg-secondary-subtle rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  What is the Need of Gym supplements?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">When we exercise, our bodies utilise carbohydrates to form energy.
                  After the carbohydrates are burnt completely, our body begins to break down fat for fuel. If
                  the physical activity is continued after that, our body begins to break down skeletal muscle
                  protein for glucose production. Rigorous physical activities like weight training and
                  high-intensity workouts cause structural damage to muscle fibres. This is where the role of
                  supplements comes into play. Best bodybuilding and fitness supplements are designed to
                  provide energy and aid endurance throughout a workout.</div>
              </div>
            </div>
            <div className="accordion-item border bg-white rounded border-success mb-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-secondary-subtle rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                  How do i choose best Supplement according to my Workout Regime?
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Workout supplements enhance exercise performance for high-intensity,
                  strenuous physical activity. However, a healthy diet with adequate carbohydrates, protein,
                  and water is also necessary to fuel the body for moderate amounts of physical activity. You
                  should consult with a doctor before incorporating any sports supplement into your exercise
                  routine and discuss any potential problems, considering your medical conditions.</div>
              </div>
            </div>
          </div>
        </section><br /><br /><br /><br />
      </div>

      {/* footer started */}
      <Footer></Footer>

      <div className="text-center enddivfixone" style={{ backgroundColor: '#2eb4ac' }}>
        <p className="fs-5 text-light m-0">Wellcoins | <i className="fa-solid fa-coins" /> Get Upto 5% off Using Wellcoins
          <i className="fa-solid fa-arrow-right" />
        </p>
      </div>









    </>
  )
}

export default Index;
