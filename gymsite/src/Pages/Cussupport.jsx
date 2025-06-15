
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Cussupport() {
    return (
        <>
            <Navbar></Navbar><br /><br /><br /><br />
            <div>
                <div className="container mt-5">
                    <h2 className="text-center mb-4">Customer Support</h2>
                    <div className="mb-4">
                        <h4 className="highlight">Wellversed Customer Commitment Policy</h4>
                        <p>At Wellversed, we prioritize your experience above all else. Our commitment is to ensure a seamless, efficient, and reliable service for every customer.</p>
                        <p>📞 Need Assistance? We're Here to Help!</p>
                        <ul>
                            <li><b>Email:</b> support@wellversed.in (Within 24 business hours)</li>
                            <li><b>Call/WhatsApp:</b> +91-9319571249 (10 AM - 7 PM)</li>
                            <li><b>Support Hours:</b> Monday - Friday</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="highlight">Claim Settlement Process:</h4>
                        <p className="important-text">To process any claim, please email us the unboxing video along with clear images as proof of damage or defect.</p>
                        <p>💡 <b>Tip:</b> If the outer packaging is damaged, do not accept the parcel. Instead, reject it and contact our support team.</p>
                        <p className="important-text">🚫 No Exchange Policy: Once an order is delivered as confirmed, exchanges are not permitted.</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="highlight">Shipping &amp; Order Delivery Policy:</h4>
                        <ul>
                            <li>🚚 <b>Order Processing:</b> Dispatched within 1 business day.</li>
                            <li>✅ <b>Live Tracking:</b> Tracking link sent via WhatsApp, Email, and SMS.</li>
                            <li>📦 <b>Delivery Updates:</b> Tracking link updated with estimated delivery date.</li>
                            <li>🚛 <b>Shipping Fees:</b> Free shipping on all orders through our website.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="highlight">Dispute &amp; Complaint Resolution</h4>
                        <ul>
                            <li>🔵 <b>General Complaints:</b> Resolved within 72 business hours.</li>
                            <li>📸 <b>Shipment Damage Issues:</b> Proof + unboxing video required.</li>
                            <li>⚡ <b>Customer Escalations:</b> Addressed within 24 hours.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="highlight">Reporting Issues: Wrong, Damaged, Missing Items, or Authentication Concerns</h4>
                        <ul>
                            <li>🚨 If you receive:
                                <ul>
                                    <li>A wrong product</li>
                                    <li>A damaged or missing item</li>
                                    <li>An issue with product authentication</li>
                                    <li>Any error in the product received</li>
                                </ul>
                            </li>
                            <li>🕒 <b>Resolution Time:</b> 48-72 business hours.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="highlight">Privacy &amp; Security</h4>
                        <p>🔒 Your data is always protected. We ensure that your personal information is secure and never misused.</p>
                        <p>By shopping with us, you agree to our <a href="#">Terms &amp; Conditions</a>, ensuring transparency and fairness.</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="highlight">Non-Refundable Situations</h4>
                        <ul>
                            <li>🚫 Opened, used, or partially consumed products.</li>
                            <li>🚫 No proof of damage, defect, or missing item.</li>
                            <li>🚫 Orders placed with incorrect details by the customer.</li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-center mb-3">Frequently Asked Questions</h3>
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                        What is the return policy?
                                    </button>
                                </h2>
                                <div id="faq1" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        Returns and replacements are processed within 48-72 hours. Refunds are only applicable in certain cases.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                        How can I track my order?
                                    </button>
                                </h2>
                                <div id="faq2" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        A tracking link will be sent via WhatsApp, email, and SMS. You can check real-time updates.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                        What should I do if I receive a damaged product?
                                    </button>
                                </h2>
                                <div id="faq3" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        Send an email with an unboxing video and clear images as proof within 8 hours of delivery.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br /><br />
            </div>

            <Footer></Footer>


        </>
    )
}

export default Cussupport
