
function Footer(){

    return(
        <footer className="footer bg-danger">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                    <div className="information">
                        <h6 className="footer-heading text-uppercase text-white fw-bold foot1">Information</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li className="mb-1">Events</li>
                            <li className="mb-1">Our Team</li>
                            <li className="mb-1">Get Your Guide</li>
                            <li className="mb-1">Ticketing Solution</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                    <div className="resources">
                        <h6 className="footer-heading text-uppercase text-white fw-bold">Supplier Support</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li className="mb-1">Contact</li>
                            <li className="mb-1">Website Tutorials</li>
                            <li className="mb-1">FAQs</li>
                            <li className="mb-1">Connectivity Partners</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                    <div className="resources">
                        <h6 className="footer-heading text-uppercase text-white fw-bold">Social</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li className="mb-1">Account</li>
                            <li className="mb-1">Blog</li>
                            <li className="mb-1">Help</li>
                        </ul>
                    </div>
                </div>
              <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                    <div className="resources">
                        <h6 className="footer-heading text-uppercase text-white fw-bold">Legal</h6>
                        <ul className="list-unstyled footer-link mt-4">
                            <li className="mb-1">Privacy Policy</li>
                            <li className="mb-1">Legal Notice</li>
                            <li className="mb-1">Supplier Terms and Conditions</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center bg-dark text-white mt-4 p-1">
            <p className="mb-0 fw-bold"></p>
        </div>
      </footer>
    );

}

export default Footer;