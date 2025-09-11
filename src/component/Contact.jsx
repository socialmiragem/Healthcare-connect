import React from 'react'
import Heading from '../partials/Heading'
import ContactForm from '../partials/ContactForm'

const Contact = ({title}) => {
    return (
        <>
            <div id="contact" className='position-relative mb-5'>
                <div className="wrap">
                    <img src="/images/9.png" alt="" className="img-fluid" />
                </div>
                <div className='position-absolute top-50 start-50 translate-middle w-100'>
                    <div className="row m-0 ">
                        <div className="col-md-12">
                            <Heading type='h2' title={title} className='text-white text-center fs-48 text-capitalize'/>
                        </div>
                    </div>
                    <div className="row m-0 px-md-5">
                        <div className="col-md-12 px-md-5 px-3">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact