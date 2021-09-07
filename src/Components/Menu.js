import React,{useState , useEffect} from 'react';
import { Link  } from 'react-router-dom';
import './Menu.css';

export default function Menu() {

     const bgcolorchange = () =>{
          const bgcolor = localStorage.getItem('bgcolor');
        
         if(bgcolor) {
           return JSON.parse(localStorage.getItem('bgcolor'));
         }
         else{
             return null;
         }
     }
    const [click, setclick] = useState(bgcolorchange());
    
    useEffect(() => {
        localStorage.setItem('bgcolor' , JSON.stringify(click));
    }, [click]);


    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4" style ={{ height : '1000px'}}>
            <Link  to='/Home' className={click === 'MaahirPro' ? ' brand-link activepage' : "brand-link"}  onClick={() => setclick('MaahirPro')}>
                <span className="brand-text font-weight-light">
                    <strong style={{marginLeft:'30px'}} > MaahirPro Admin </strong>
                </span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className={click === 'image' ? "img-circle elevation-2 activepage"  : "img-circle elevation-2"} onClick={() => setclick('image')}  alt="UserImgPhoto" />
                </div>
                <div className="info">
                    <Link to='/Home' className="d-block">Saif</Link>
                </div>
                </div>
                <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                    <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw" />
                    </button>
                    </div>
                </div>
                </div>
                {/* Sidebar Menu */}

                
                
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget= "treeview"   role="menu" data-accordion="false" >
                    
                <Link to='/Home' className = "nav-link " style={{color:'white'}} >
                <i class="fas fa-tachometer-alt"></i>
                        <p style={{marginLeft : '8px' , }}>
                            Dashboard 
                        </p>
                    </Link>
                {/* Users and Groups Dropdwon Section */}    

                <li className="nav-item"  >
                    <Link  className = "nav-link "  >
                    <i class="fas fa-users"></i>
                        <p style={{marginLeft : '8px'}}>
                            Users and Groups
                        <i className="right fas fa-angle-left" />
                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li 
                        className={click === 'Group' ? "show-bgcolor"  : "nav-item" } 
                        onClick={() => setclick('Group')} 
                        >
                        <Link to='/Group' className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Group</p>
                        </Link>
                        </li>
                        <li 
                        className={click === 'User' ? "show-bgcolor"  : "nav-item"} 
                        onClick={() => setclick('User')}
                        >
                        <Link to='User' className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>User</p>
                        </Link>
                        </li>
                        <li 
                        className={click === 'Permission' ? "show-bgcolor"  :  "nav-item"}  
                        onClick={() => setclick('Permission')}
                        >
                        <Link to='Permission' className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Permission</p>
                        </Link>
                        </li>
                        
                    </ul>
                    </li>    

                {/* Master Data Dropdwon Section */}    

                    <li className="nav-item"  >
                    <Link  className = "nav-link "  >
                        <i class="fas fa-tv"></i>
                        <p style={{marginLeft : '8px'}}>
                            Master Data
                        <i className="right fas fa-angle-left" />
                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li 
                        className={click === 'Appointment' ? "show-bgcolor"  : "nav-item" } 
                        onClick={() => setclick('Appointment')} 
                        >
                        <Link to='/Appointment' className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Appointment</p>
                        </Link>
                        </li>
                        <li 
                        className={click === 'Category' ? "show-bgcolor"  : "nav-item"} 
                        onClick={() => setclick('Category')}
                        >
                        <Link to='Category' className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Category</p>
                        </Link>
                        </li>
                        <li 
                        className={click === 'SMS' ? "show-bgcolor"  :  "nav-item"}  
                        onClick={() => setclick('SMS')}
                        >
                        <Link to='Smsnotify' className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>SMS Notifications</p>
                        </Link>
                        </li>
                        <li 
                        className={click === 'APP' ? "show-bgcolor"  :  "nav-item"} 
                        onClick={() => {
                        setclick('APP');
                        }}
                        >
                        <Link to='Appversion' className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>APP Version</p>
                        </Link>
                        </li>
                    </ul>
                    </li>

                {/* Servie Management Dropdwon Section */}
                    <li className="nav-item">
                    <Link className="nav-link">
                    <i class="fas fa-cogs" ></i>
                        <p style={{marginLeft : '8px'}}>
                        Service Management
                        <i className="fas fa-angle-left right" />
                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li 
                        className= {click === 'Coust' ?  "nav-item show-bgcolor" : "nav-item" }  
                        onClick={() => setclick("Coust")} 
                        >
                        <Link to='Coustomers' className="nav-link" >
                            <i 
                            className="far fa-circle nav-icon" />
                            <p>Coustomers</p>
                        </Link>
                        </li>
                        <li 
                        className={click === 'Service' ?  "nav-item show-bgcolor" : "nav-item"} 
                        onClick={() => setclick("Service")} 
                        >
                        <Link to='ServiceProviders' className="nav-link"  >
                            <i className="far fa-circle nav-icon" />
                            <p>Service Providers</p>
                        </Link>
                        </li>   
                        </ul>
                    </li>

                  {/* Tickest System Dropdwon Section */}  
                  <li className="nav-item">
                    <Link className="nav-link">
                    <i class="fas fa-ticket-alt"></i>
                        <p style={{marginLeft : '8px'}}>
                        Tickets
                        <i className="fas fa-angle-left right" />

                        </p>
                    </Link>
                    <ul className="nav nav-treeview">
                        <li 
                        className= {click === 'Coustomers' ?  "nav-item show-bgcolor" : "nav-item" }  
                        onClick={() => setclick("Coustomers")} 
                        >
                        <Link to='CoustomersTicket' className="nav-link" >
                            <i 
                            className="far fa-circle nav-icon" />
                            <p>Coustomers Ticket</p>
                        </Link>
                        </li>
                        <li 
                        className={click === 'Non' ?  "nav-item show-bgcolor" : "nav-item"} 
                        onClick={() => setclick("Non")} 
                        >
                        <Link to='Non' className="nav-link"  >
                            <i className="far fa-circle nav-icon" />
                            <p>Non Customer Ticket</p>
                        </Link>
                        </li>
                        <li 
                        className={click === 'Report' ?  "nav-item show-bgcolor" : "nav-item"} 
                        onClick={() => setclick("Report")} 
                        >
                        <Link to='Report' className="nav-link"  >
                            <i className="far fa-circle nav-icon" />
                            <p>Report</p>
                        </Link>
                        </li>   
                        </ul>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}
