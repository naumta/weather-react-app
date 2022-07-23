import React, { Dispatch, SetStateAction } from 'react'

export const Search = ({setCity}:{setCity:Dispatch<SetStateAction<string>>}) => {
    
    return (
        <form className="d-flex" role="search">
                <input className="form-control me-2" 
                        type="search" 
                        placeholder="Search"
                        aria-label="Search" 
                        onChange={(event) => setCity(event.target.value)} />
                <button className="btn btn-outline-primary" 
                        type="submit">Search</button>
        </form>
    )
}
