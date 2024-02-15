import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart' className='nav-link active btn btn-primary'>Go to Cart</Link>
                            </li>

                        </ul>
                        {
                            !localStorage.getItem('token') ? <form className='d-flex' role='search'>
                                <Link className="btn btn-primary btn-sm ps-3 pe-3 me-5" to='/login'>Login</Link>
                            </form> : <Link className="btn btn-primary btn-sm ps-3 pe-3 me-5" to='/login' onClick={handleLogoutClick}>LogOut</Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
