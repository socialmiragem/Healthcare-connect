import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

const TestimonialItem = ({title,stars,icon,message}) => {
  return (
    <>
        <div className='testiItem overflow-hidden mx-3'>
            <div className='bg-white px-md-5 px-3 py-3 position-relative testiItem_container'>
                <div className="title border-bottom py-2">
                    <Heading type='h3' className='fs-32 fw-semibold text-primary text-capitalize' title={title}/>
                    <img src={stars} alt="" className="img-fluid stars" />
                </div>
                <div className='msg py-3'>
                    <Paragraph className='fs-24 text-grey fw-normal' text={message}/>
                </div>
                <div className="wrap position-absolute top-0 end-0 my-3 mx-md-5 mx-3">
                    <img src={icon} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    
    </>
  )
}

export default TestimonialItem