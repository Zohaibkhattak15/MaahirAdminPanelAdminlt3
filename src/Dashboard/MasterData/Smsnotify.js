import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default function Smsnotify() {
    return (
      <div className="wrapper" style={{backgroundColor : 'white'}}>
      {/* Navbar */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Send SMS Notification</h1>
              </div>
              
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to='/Dashboard'>Home</Link> </li>
                  <li className="breadcrumb-item active"><Link to='/Category'>Send SMS Notification  </Link></li>
                  
                </ol>
              </div>

              <div className='col-12' >
                <hr></hr>
              </div>
              <Card style={{width:'100%' , display:'flex', justifyContent:'center'}}>
              
              <div className='col-12'>
              
                  <form className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Select SMS Group </label>
                      <div className="col-sm-6">
                        <select className="form-control" >
                          <option value="Customers">Customers</option>
                          <option value="Maahirs">Maahirs</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Message Body </label>
                        <div className="col-sm-6">
                          <textarea type="text" className="form-control" id="inputEmail3" placeholder="" />
                        </div>
                      </div>
                    
                  </div>
                </form>
              
              </div>

              </Card> 

              
                  <div className='col-12'> 
                      <hr></hr>
                  </div>
                  
                  {/* /.card-body */}
                  <div className="card-footer col-12">
                  <div className='container'>
                    <div className='row '>
                    
                        <div className='col-1'> </div>
                        <div className='col-9'>
                          <div className='row ml-5'>
                                
                                <div className='col-4 '>
                                  <button type="submit" style={{width:'150px' , backgroundColor: '#fb9500' , border : 'none'}} className="btn btn-info"><i class="fas fa-check"></i> Send SMS</button>
                                </div>
                                <div className='col-4'> 
                                  <button type="submit" style={{width:'250px' , backgroundColor: '#fb9500' , border : 'none'}} className="btn btn-info float-right"><i class="fas fa-check"></i> Send Push Notifications</button>
                                </div>
                                <div className='col-3'> 
                                  <button type="submit" style={{width:'150px' }} className="btn btn-default float-right"><i class="fas fa-redo"></i> Reset</button>
                                </div>
                                
                          </div>
                        </div>
                      <div className='col-2'>
                      </div>
                  </div>    
                </div>
                </div>

            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
              
      </div>
    </div>
    )
}
