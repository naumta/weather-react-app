import React, { FormEvent, useContext } from 'react'
import { Context } from '../context/Context';

export const Search = () => {
    const {city, setCity} = useContext(Context);

    const SearchCity = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    
    return (
        <form className="d-flex" role="search" onSubmit = {(event) => SearchCity(event)}>
                <input className="form-control rounded-pill" 
                        type="search" 
                        name="city"
                        value={city}
                        placeholder="Search"
                        aria-label="Search"
                        onChange={(event) =>setCity(event.target.value)}
                />
        </form>
    )
}
