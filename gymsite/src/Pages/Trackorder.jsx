import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Trackorder() {
    return (
        <>
            <Navbar></Navbar><br /><br /><br /><br />
            <div className="container" style={{ height: 500 }}>
                <div className="container d-flex justify-content-center " style={{ height: 'fit-content' }}>
                    <div className="card p-4 shadow" style={{ width: '100%', maxWidth: 400 }}>
                        <h5 className="card-title text-center mb-4">Track Your Order</h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="trackingNumber">Tracking Number</label><br /><br />
                                <input type="radio" id="ordertracknumber" />AWB Number &nbsp;&nbsp;
                                <input type="radio" id="ordertracknumber" />Mobile Number<br /><br />
                                <input type="text" className="form-control" id="trackingNumber" placeholder="Enter number" />
                            </div><br />
                            <button type="submit" className="btn btn-success btn-block">Track Order</button>
                        </form></div>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}

export default Trackorder;
