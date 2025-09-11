import React from 'react'
import Heading from '../partials/Heading'
import Accordian from '../partials/Accordian'
import { faqsData } from '../assets/data/data'

const Faqs = ({ title }) => {
    return (
        <>
            <div id="faqs" className='px-md-5 px-1 py-md-5 py-3 '>
                <div className="row mx-0">
                    <div className="col-md-12">
                        <Heading title={title} type='h2' className='fs-48 text-primary text-capitalize text-center fw-bold' />
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row mx-0">
                        <div className="col-md-12">
                            <Accordian items={faqsData} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Faqs