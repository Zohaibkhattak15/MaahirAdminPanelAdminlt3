import React,{useState} from 'react';
import { Link } from 'react-router-dom';


 const AddAppointment = () => {

  const [customer, setcustomer] = useState();
  const [category, setcategory] = useState();
  const [maahir, setmaahir] = useState();
  const [dispcription, setdispcription] = useState();
  const [date, setdate] = useState();
  const [time, settime] = useState();



  const resetValues = (event) => {
    event.preventDefault();
    
    setcustomer('');
    setcategory('');
    setmaahir('');
    setdispcription('');
    setdate('');
    settime('');
  }
    return (
      <div className="wrapper" style={{backgroundColor : 'white'}}>
      {/* Navbar */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Create Appointmnet</h1>
              </div>
              
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to='/Dashboard'>Home</Link> </li>
                  <li className="breadcrumb-item active"><Link to='/Appointment'>Appointment  </Link></li>
                  <li className="breadcrumb-item active"><Link to='/AddAppointment'>Add Appointment</Link></li>
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
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Select Customer:</label>
                      <div className="col-sm-6">
                        <select 
                        type="text" 
                        className="form-control" 
                        id="inputEmail3" 
                        value={customer}
                        onChange={(e) => setcustomer(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Select Category:</label>
                        <div className="col-sm-6">
                          <select 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3" 
                          value={category}
                          onChange={(e) => setcategory(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Select Maahir:</label>
                        <div className="col-sm-6">
                          <select 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3"
                          value={maahir}
                          onChange={(e) => setmaahir(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Description:</label>
                        <div className="col-sm-6">
                          <textarea 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3" 
                          value={dispcription}
                          onChange={(e) => setdispcription(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Address:</label>
                        <div className="col-sm-6">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="inputEmail3" 
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Date:</label>
                        <div className="col-sm-6">
                          <input 
                          type="Date" 
                          className="form-control" 
                          id="inputEmail3" 
                          value={date}
                          onChange={(e) => setImmediate(e.target.value)} 
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Time:</label>
                        <div className="col-sm-6">
                          <input 
                          type="Time" 
                          className="form-control" 
                          id="inputEmail3" 
                          value={time}
                          onChange={(e) => settime(e.target.value)}
                          />
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
                                      onClick={resetValues}><i class="fas fa-redo"></i> 
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

export default AddAppointment;
