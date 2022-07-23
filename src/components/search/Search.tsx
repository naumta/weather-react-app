import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const Search = ({weather}:any) => {
    const {setCity} = useContext(Context);
    
    return (
        <form className="d-flex" role="search" >
                <input className="form-control rounded-pill" 
                        type="search" 
                        name="city"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(event) =>setCity(event.target.value)}
                        />
        </form>
    )
}
