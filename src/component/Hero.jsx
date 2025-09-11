import React from 'react'
import Heading from "../partials/Heading"
import Paragraph from "../partials/Paragraph"
const Hero = ({title, desc, anchor_text, anchor_link}) => {
  return (
    <>
        <div id="hero">
            <div className="wrap position-relative">
                <img src="./images/hero.png" alt="" className="img-fluid" />
                <div className='position-absolute top-50 start-0 translate-middle-y z-3'>
                    <div className="row m-0 ps-md-5 ps-0">
                        <div className="col-md-8 col-12 text-md-start text-center">
                            <Heading type='h2' title={title} className='text-white fs-68 text-capitalize fw-bold'/>
                            <Paragraph text={desc} className='text-white fs-28 fw-normal'/>
                            <a href={anchor_link} className='text-capitalize fw-semibold text-decoration-none p-3 rounded-1 bg-secondary text-white fs-20 d-inline-block'>{anchor_text}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero