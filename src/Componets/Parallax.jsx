import React from 'react'
import './parallax-style.css'

const Parallax = () => {
  return (
    <>
        <div className="parallax-section">
            <div className='text-light' id='content'>
                <div id='sub-content' className='bg-dark ms-5 p-2'>
                    <h1 id='cargoo' className='ms-4 '>Car Goo</h1>
                    <p className='px-4 pt-4 pb-2' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestiae quasi, voluptate ad aperiam rerum suscipit inventore, modi sint nostrum reiciendis, ipsam nihil earum quod molestias eos? Asperiores, recusandae voluptatem.</p>
                    <button className="btn btn-outline-light rounded ms-4 mb-3">Know More</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Parallax