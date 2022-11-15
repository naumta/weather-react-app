import React, { Dispatch, SetStateAction, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import { Search } from '../search/Search';

export const NavBar = ({setOpenModal}:{setOpenModal:Dispatch<SetStateAction<boolean>>}) => {
    const {isAuth, setIsAuth} = useContext(Context);
    
    const logout = () => {
        localStorage.clear();
        setIsAuth(false);
    }

    const isPress = () => {
        window.confirm("You should registration?");
    }

    return (
    <nav className="navbar navbar-expand-lg bg-success bg-success p-2 text-dark bg-opacity-25">
        <div className="container-fluid">
        {
        isAuth
        ?
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="today" className="nav-link active fs-5 fw-bolder ms-3 mx-3" aria-current="page">Today</Link>
                </li>
                <li className="nav-item">
                    <Link to="five-days" className="nav-link active fs-5 fw-bolder"
                    aria-current="page">5-days</Link>
                </li>
            </ul>
            
            <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
        </>
        :
        <>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="today" className="nav-link active fs-5 fw-bolder ms-3 mx-3" aria-current="page">Today</Link>
                </li>
                <li className="nav-item">
                    <Link to="today" className="nav-link active fs-5 fw-bolder" aria-current="page" onClick={() => isPress()}>5-days</Link>
                </li>
                
            </ul> 
            
            <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Login</button>
        </>
    }
        </div>

        <Search />
    </nav>
    )
}
