import React, { useState } from 'react'
import Popup from './Popup'

function Navmenu(props) {
    const [trigger, setTrigger] = useState(false)
    
  return(
    <nav className="navbar">
        <Popup trigger={trigger} onTrigger={setTrigger}></Popup>
        <div className="container-fluid">
            <button onClick={(props.type) ? () => {setTrigger(true)} : ''} className='invite'>{(props.type) ? '+': (<img src='src\assets\settings.svg' alt='gear' className='gear'></img>)}</button>
            <a className="navbar-title">{(props.type) ? "Project Access" : "User Setup"}</a>
        </div>
        {(props.type) &&
        (
            <form className="d-flex" role="search">
                <input onChange={e => props.addSearch(e.target.value) }className="form-control" type="search" placeholder="Type to filter the table" aria-label="Search"/>
                <button className="search-btn" type="submit">
                    <img src="src\assets\search.svg" alt="search" />
                </button>     
            </form>
        )}

    </nav>
    )
}

export default Navmenu