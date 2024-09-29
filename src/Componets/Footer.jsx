import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark py-3'>
      <div className="mt-5  container-fluid d-flex flex-wrap justify-content-around">
          <div className="p-3 text-light">
            <h3 className='fw-bold'>Car Goo</h3>
            <p className="mt-3 text-light" style={{
              textAlign:"justify"
            }}>
              Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Repudiandae libero quasi <br /> iste reiciendis. Fugit, consequuntur ex <br /> veniam voluptas, quis vitae saepe odit <br /> error amet libero aliquam cum incidunt <br /> commodi vero!
            </p>
          </div>
          <div className="p-3 text-light">
            <h3 className="fw-bold">Guides</h3>
            <p className='fw-bold fs-5'>
              React <br />
              React Bototstrap <br />
              Bootstrap
            </p>
          </div>
          <div className="p-3 text-light">
            <h3 className="fw-bold">
              Contact Us
            </h3>
            <div className='d-flex'>
              <input type="text" placeholder='Write youe E-mail' className="mt-3 p-2 rounded" />
              <button className="btn btn-primary mt-3 ms-2 rounded-circle"><i class="fa-solid fa-arrow-right fw-bold"></i></button>
            </div>
            <div className="d-flex justify-content-between mt-3 text-light">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-phone"></i>
            </div>
          </div>
      </div>
      <p className="text-center fw-bold text-light mt-3">
      Copyright © May 2024 Batch, Cargoo. Built with React.
      </p>
    </div>
  )
}

export default Footer