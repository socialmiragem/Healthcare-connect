import React from 'react'
import CounterItem from '../partials/CounterItem'
import { counterData } from '../assets/data/data'

const Counter = () => {
  return (
    <>
        <div id="counter" className='py-md-5 py-5 px-md-5 px-2'>
            <div className="row m-0">
                {
                    counterData.map(({id,title,count,isCounter,suffix})=>{
                        return(
                            <>
                                <div className="col-md-3 mb-md-0 mb-3" key={id}>
                                    <CounterItem title={title} count={count} isCounter={isCounter} suffix={suffix}/>
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

export default Counter