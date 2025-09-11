import React from 'react'
import Heading from '../partials/Heading'
import ComparisonTable from '../partials/ComparisonTable'

const Table = ({title}) => {
  return (
    <>
        <div id="table" className='px-md-5 px-3 py-md-5 py-3 '>
            <div className="row mx-0">
                <div className="col-md-12">
                    <Heading title={title} type='h2' className='fs-48 text-primary text-capitalize text-center fw-bold'/>
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-md-12">
                    <ComparisonTable/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Table