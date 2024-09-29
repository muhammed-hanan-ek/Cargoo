import React from 'react'

const Services = () => {
  return (
    <>
    <h1 className="text-center fw-bold mt-5">Services</h1>
      <div className='d-flex flex-wrap justify-content-around mt-5'>
          <div className="card" style={{ width: '18rem' }}>
        <img style={{ width: '18rem' }}  src="https://static.langimg.com/photo/imgsize-103878,msid-96686021/navbharat-times.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center fw-bold fs-4">Foam Wash</h5>
          <p className="card-text" style={{textAlign:"justify"}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae aliquid blanditiis eveniet obcaecati veritatis inventore deleniti est error doloribus nisi assumenda
          </p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img style={{ width: '18rem' }}   src="https://www.shutterstock.com/image-photo/portrait-asian-mechanic-checking-safety-600nw-2180535839.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center fw-bold fs-4">Mechanic</h5>
          <p className="card-text" style={{textAlign:"justify"}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae aliquid blanditiis eveniet obcaecati veritatis inventore deleniti est error doloribus nisi assumenda
          </p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img  src="https://www.protoolreviews.com/wp-content/uploads/2015/04/UV-Protectant.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center fw-bold fs-4">Headlight Restoration</h5>
          <p className="card-text" style={{textAlign:"justify"}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae aliquid blanditiis eveniet obcaecati veritatis inventore deleniti est error doloribus nisi assumenda
          </p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFABVN5mqaQ8ZwRdIMQzrzsPdlbjIWM4UKaw&s" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center fw-bold fs-4">Polishing</h5>
          <p className="card-text" style={{textAlign:"justify"}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae aliquid blanditiis eveniet obcaecati veritatis inventore deleniti est error doloribus nisi assumenda
          </p>
        </div>
      </div>
      </div>
    </>
     
  )
}

export default Services