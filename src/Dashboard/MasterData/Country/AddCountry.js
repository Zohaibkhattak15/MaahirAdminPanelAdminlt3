import React from 'react';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
 
const AddCountry = () =>  {

    return (
      <div className="wrapper" style={{backgroundColor : 'white'}}>
      {/* Navbar */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Country</h1>
              </div>
              
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to='/Dashboard'>Home</Link> </li>
                  <li className="breadcrumb-item active"><Link to='/Country'>Country  </Link></li>
                  <li className="breadcrumb-item active"><Link to='/AddCountry'>Add Country</Link></li>
                </ol>
              </div>

              <div className='col-12'>
                <hr></hr>
              </div>

              <div className='col-1'>
              
              </div>
            <Card style={{width : '100%',display:'flex', justifyContent:'center'}}>  
              <div className='col-9'>
                  <form className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title :</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="inputEmail3" 
                        />
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
                  <div className='container card-footer col-12'>
                    <div className='row'>
                        <div className='col-3'> </div>
                        <div className='col-7'>
                          <div className='row '>
                                <div className=''>
                                </div>
                                <div className='col-4'>
                                  <button type="submit" style={{width:'150px', border : 'none' , backgroundColor: '#fb9500'}} className="btn btn-info"><i class="fas fa-check"></i> Submit</button>
                                </div>
                                <div className='col-1'>

                                </div>
                                <div className='col-2'> 
                                  <button type="submit" style={{width:'150px'}} className="btn btn-default float-right" ><i class="fas fa-redo"></i> Reset</button>
                                </div>
                          </div>
                        </div>
                      <div className='col-3'></div>
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

export default AddCountry;
