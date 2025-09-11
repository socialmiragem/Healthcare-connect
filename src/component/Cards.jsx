import React from 'react'
import Heading from '../partials/Heading'
import { cardData } from '../assets/data/data'
import CardItem from '../partials/CardItem'

const Cards = ({ title }) => {
    return (
        <>
            <div id="cards" className='py-md-5 py-3 px-md-5 px-2'>
                <div className="row m-0">
                    <div className="col-md-12">
                        <Heading type='h2' className='text-center fs-48 fw-bold' title={title} />
                    </div>
                </div>
                <div className="row mx-0 mt-3">
                    {
                        cardData.map(({ id, img, cardTitle, desc }) => {
                            return (
                                <>
                                    <div className="col-md-3 mb-md-0 mb-3" key={id}>
                                        <CardItem img = {img} cardTitle = {cardTitle} desc = {desc}/>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Cards