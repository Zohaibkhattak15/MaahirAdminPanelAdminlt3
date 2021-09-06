import { Card } from '@material-ui/core';
import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
 
const UpdateCategory = (props) => {
  const [rowData, setrowData] = useState(props.location.state);

    useEffect(() => {
      console.log(props.location.state)
    }, [])

    const updateRow = () => {
      axios.put('http://localhost:3000/olympic', rowData)
      .then(resp => console.log(resp))
      .catch(err => console.log(err)) 
    }
    console.log(rowData.athlete)
    return (
      <div className="wrapper" style={{backgroundColor : 'white'}}>
      {/* Navbar */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Update Category</h1>
              </div>
              
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to='/Dashboard'>Home</Link> </li>
                  <li className="breadcrumb-item active"><Link to='/Category'>Category  </Link></li>
                  <li className="breadcrumb-item active"><Link to='/updateCategory'>Update Category</Link></li>
                </ol>
              </div>

              <div className='col-12'>
                <hr></hr>
              </div>

              <div className='col-1'>
              
              </div>
            <Card style={{width : '100%'}}>  
              <div className='col-9'>
                  <form className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title :</label>
                      <div className="col-sm-10">
                        <input type="text"  value={rowData?.athlete} onChange={(e) =>
                         setrowData({
                          ...rowData ,
                          athlete:e.target.value
                          }) } 
                          className="form-control" id="inputEmail3" placeholder="" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Description :</label>
                        <div className="col-sm-10">
                          <textarea type="text" value={rowData?.country} onChange={(e) => setrowData(e.target.value) } className="form-control" id="inputEmail3" placeholder="" />
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
                                  <button type="submit" style={{width:'150px', border : 'none' , backgroundColor: '#fb9500'}} className="btn btn-info"><i class="fas fa-check"></i> Update</button>
                                </div>
                                <div className='col-1'>

                                </div>
                                <div className='col-2'> 
                                  <button type="submit" style={{width:'150px'}} className="btn btn-default float-right" onClick={updateRow}><i class="fas fa-redo"></i> Reset</button>
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

export default UpdateCategory;
