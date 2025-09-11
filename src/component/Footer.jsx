import React from 'react'
import Paragraph from '../partials/Paragraph'

const Footer = () => {
  return (
    <>
        <div id="footer" className='mt-3 px-md-5 px-2 py-md-5 py-3 bg-primary'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <img src="/images/logoalt.png" alt="" className="img-fluid logoalt" />
                    </div>
                </div>
                <div className="row mx-0 mt-4 justify-content-center">
                    <div className="col-md-3 text-center">
                        <div>
                            <a href="tel:5553279462" className='text-decoration-none fs-18 text-white btn-outline-primary btn rounded-pill px-md-5 py-md-3 px-3 py-2 mb-md-0 mb-3' ><span className='me-md-3 me-1'><img src="/images/6.png" alt="" className="img-fluid icon_footer" /></span>(555) 327-9462</a>
                        </div>
                    </div>
                    <div className="col-md-5 text-center">
                        <div>
                            <a href="tel:5553279462" className='text-decoration-none fs-18 text-white btn-outline-primary btn rounded-pill px-md-5 py-md-3 px-3 py-2 mb-md-0 mb-3' ><span className='me-md-3 me-1'><img src="/images/7.png" alt="" className="img-fluid icon_footer" /></span>2450 Westbrook Avenue, Dallas, TX 75201</a>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div>
                            <a href="mailto:support@healthcareconnect.com" className='text-decoration-none fs-18 text-white btn-outline-primary btn rounded-pill px-md-5 py-md-3 px-3 py-2 mb-md-0 mb-3' ><span className='me-md-3 me-1'><img src="/images/8.png" alt="" className="img-fluid icon_footer" /></span>support@healthcareconnect.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="subfooter px-3 py-2 bg-primary border-top">
            <Paragraph text='© 2025 HealthCare Connect. All rights reserved. Licensed Insurance Professional.' className='text-grey fs-15 mb-0 text-center'/>
        </div>
    </>
  )
}

export default Footer