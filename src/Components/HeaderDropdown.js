import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


export default function HeaderDropdown() {

    const history = useHistory();

    const HandleLogout = () =>{
        history.replace('/');
        localStorage.clear();
    }

    return (
        <>
           <div className="dropdown">
                
                <i class="fas fa-user-circle fa-2x " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" >Profile</Link>
                <Link className="dropdown-item" >Setting</Link>
                <Link  className="dropdown-item" onClick={HandleLogout}>Logout</Link>
            </div>
            </div>

        </>
    )
}
