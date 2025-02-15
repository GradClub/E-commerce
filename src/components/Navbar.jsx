import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="#">LA Collections</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">contact</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn btn-outline-dark mx-auto">
                                <i className="fa fa-sign-in me-1"></i> Login</a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i> Register</a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i> Cart</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar