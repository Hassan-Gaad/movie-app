import React, { useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from '../assets/movieIcon.png'
const Navbar = ({ onSearch, goHome }) => {
    const [text, setText] = useState('');

    const onSearchClicked = (e, txt) => {
        // e.preventDefault();
        onSearch(txt);
    }

    const favorite = useSelector(state => state.favorite);
    const [favNo, setFavNo] = useState(0);
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" onClick={() => { goHome() }}>
                        <img src={logo} alt="" width="30" height="24" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" onClick={() => { goHome() }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/favorites" className="nav-link" >Favorites</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/favorites" className="nav-link" >
                                <h5 className='text-light'>{Object.keys(favorite).length}
                                <BsFillHeartFill className="ms-2"/> 
                                </h5>
                            </Link>
                                
                            </li>

                        </ul>

                        <div className="d-flex">
                            <input className="form-control me-2" onChange={(e) => { setText(e.target.value) }} value={text} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" onClick={(e) => onSearchClicked(e, text)}>Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
