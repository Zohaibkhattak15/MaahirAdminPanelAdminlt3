import React from 'react';
import { Link } from 'react-router-dom';


 const AddUsers = () => {

 
    return (
      <div className="wrapper" style={{backgroundColor : 'white'}}>
      {/* Navbar */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Users</h1>
              </div>
              
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to='/Dashboard'>Home</Link> </li>
                  <li className="breadcrumb-item active"><Link to='/User'>Users  </Link></li>
                  <li className="breadcrumb-item active"><Link to='/AddUsers'>Add Users</Link></li>
                </ol>
              </div>

              <div className='col-12'>
                <hr></hr>
              </div>

             <div className='col-2' style={{backgroundColor: '#fff' , padding:'0px 0px' , margin : '0px 0px'}}>

             </div>

              <div className='col-10' style={{backgroundColor: '#fff' , padding:'0px 0px' , margin : '0px 0px'}}>
                  <form className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Add Image:</label>
                      <div className="col-sm-6">
                        <input 
                        type="file" 
                        className="" 
                        id="" 
                        />
                      </div>
                      </div>

                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">First Name:</label>
                      <div className="col-sm-6">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputEmail3" 
                      
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Last Name:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3" 
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Password:</label>
                        <div className="col-sm-6">
                          <input 
                          type="password" 
                          className="form-control" 
                          id="inputEmail3" 
                         
                          />
                        </div>
                      </div>
                      
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Mobile:</label>
                        <div className="col-sm-6">
                          <input 
                          type="number" 
                          className="form-control" 
                          id="inputEmail3" 
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Gender:</label>
                        <div className="col-sm-6">
                        <div>
                        <input type="radio" id="" name="age" defaultValue={30} />
                        <label style={{marginLeft:'10px'}} htmlFor="">Male</label><br />
                        <input type="radio" id="age2" name="age" defaultValue={60} />
                        <label  style={{marginLeft:'10px'}} htmlFor="age2">Female</label><br />
                        </div>
  
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Lat:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Lng:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Location:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">About Me:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">CNIC:</label>
                        <div className="col-sm-6">
                          <input 
                          type="number" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Upload CNIC:</label>
                        <div className="col-sm-6">
                          <input 
                          type="file" 
                          className="" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Refrence Name 1:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Refrence Mobile No 1:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Refrence Name 2:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Refrence Mobile No 2:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">User Type:</label>
                        <div className="col-sm-6">
                          <select 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                         
                          >
                            <option value="Select">Select User Type</option>
                            <option value="Customer">Customer</option>
                            <option value="Service">Service Provider</option>
                            <option value="Agent">Agent</option>
                            <option value="Admin">Admin</option>
                              </select>
                        </div>
                      </div>
                    
                  </div>
                </form>
              </div>

              
                  <div className='col-12'> 
                      <hr></hr>
                  </div>

                  {/* /.card-body */}
                  <div className="card-footer col-12">
                  <div className='container py-3' >
                    <div className='row'>
                        <div className='col-3'> </div>
                        <div className='col-7'>
                          <div className='row ' >
                                <div className='col-3'>
                                </div>
                                <div className='col-5'>
                                      <button 
                                      type="submit" 
                                      style={{width:'150px' ,  backgroundColor: '#fb9500' , border : 'none'}} 
                                      className="btn btn-info"><i class="fas fa-check"></i> 
                                      Submit
                                      </button>
                                </div>
                                <div className='col-2'> 
                                      <button 
                                      type="submit" 
                                      style={{width:'150px' }} 
                                      className="btn btn-default float-right" 
                                    ><i class="fas fa-redo"></i> 
                                      Reset
                                      </button>
                                </div>
                          </div>
                        </div>
                      <div className='col-3'></div>
                  </div>    
                </div> 
            </div>
          </div>{/* /.container-fluid */}
          </div>
        </section>
        {/* Main content */}
              
      </div>
    </div>
    )
}

export default AddUsers;
