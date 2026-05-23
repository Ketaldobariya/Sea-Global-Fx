import "./getInTouch.scss"
export default function GetInTouch(){
    return(
        <section>
            <div className="getInTouch-section">
                <div className="container-xs6">
                    <div className="getInTouch-grid">
                        <div className="getInTouch-grid-items animate__animated animate__fadeInLeft wow"
                  data-wow-offset="100"
                  data-wow-delay="0s">
                            <div className="getInTouch-grid-items-title">
                                <h2>Get in <span>Touch</span></h2>
                            </div>
                            <div className="getInTouch-list-card">
                                <div className="getInTouch-list">
                                    <p>General Enquiries</p>
                                </div>
                                <div className="getInTouch-list">
                                    <p>Technical Support</p>
                                </div>
                                <div className="getInTouch-list">
                                    <p>Complaints</p>
                                </div>
                                <div className="getInTouch-list">
                                    <p>Partnerships / IB</p>
                                </div>
                            </div>
                        </div>
                        <div className="getInTouch-grid-item animate__animated  animate__fadeInRight wow"
                  data-wow-offset="100"
                  data-wow-delay="0s">
                            <form className="getInTouch-grid-items-box">
                                <h3>Let’s Connect</h3>
                                <div className="getInTouch-input">
                                    <input type="text" placeholder="Your Name" name="name"/>
                                </div>
                                <div className="getInTouch-input">
                                    <input type="text" placeholder="Email Address" name="Email"/>
                                </div>
                                <div className="getInTouch-input">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </div>
                                <div className="getInTouch-checkboxText">
                                    <input type="checkbox" name="agree"/>
                                    <p>You agree to our friendly 
                                        <a href="/" aria-label="#">Privacy policy.</a>
                                    </p>
                                </div>
                                <div className="getInTouch-sendMessage">
                                    <button type="submit" aria-label="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}