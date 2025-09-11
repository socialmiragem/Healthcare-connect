import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

const CardItem = ({ img, cardTitle, desc }) => {
    return (
        <>
            <div className="cards">
                <div className="wrap">
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="content mt-5">
                    <Heading title={cardTitle} className='fs-32 fw-bold' />
                    <Paragraph text={desc} />
                </div>
            </div>
        </>
    )
}

export default CardItem