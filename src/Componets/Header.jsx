import React from 'react'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark fixed-top">
                <div class="container-fluid ">
                    <a class="navbar-brand text-light fw-bold fs-2" style={{ fontFamily:"Space Grotesk, system-ui"}} href="#">Car Goo</a>
                    <button class="navbar-toggler " style={{backgroundColor:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto fw-bold">
                            <a class="nav-link text-light" aria-current="page" href="#">Home</a>
                            <a class="nav-link text-light" href="#">Services</a>
                            <a class="nav-link text-light" href="#">About</a>
                            <a class="nav-link text-light" >Cotact</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header