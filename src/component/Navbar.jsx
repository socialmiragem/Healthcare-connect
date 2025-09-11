import React from "react"
const Navbar = () => {
    return (
        <>
            <div id="navigation" className="px-md-5 px-1 py-3">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="row nav_item align-items-center">
                            <div className="col-md-3 col-12 text-md-start text-center">
                                <a className="navbar-brand me-0" href="#"><img src="/images/logo.png" alt="" className="img-fluid" /></a>

                            </div>
                            <div className="col-md-6  col-12 mt-md-0 mt-3 text-md-start text-center">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <a className="nav-link fs-20 px-4 fw-semibold text-primary text-capitalize" href="#Plantable">Plans</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link fs-20 px-4 fw-semibold text-primary text-capitalize" href="#testimonials">Reviews</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link fs-20 px-4 fw-semibold text-primary text-capitalize" href="#faqs">FAQs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link fs-20 px-4 fw-semibold text-primary text-capitalize" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 d-md-block d-none">
                                <div className="d-flex justify-content-end">
                                    <a href="#contact" className="bg-secondary text-white text-capitalize text-decoration-none p-3 rounded-1 fs-20">Get A Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar