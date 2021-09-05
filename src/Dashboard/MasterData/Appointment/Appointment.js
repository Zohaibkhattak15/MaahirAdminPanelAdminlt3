import React from 'react';
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'

const Appointment= () => {

 
  const columns = [
    { 
      title: "Customer", field: "athlete"  ,
      cellStyle : {
        fontSize : '14px',
      },
      headerStyle : {
        color : 'gray'
      }
    },
    { title: "Maahir", field: "age" ,
    cellStyle : {
      fontSize : '14px'
    },
    headerStyle : {
      color : 'gray'
    }
  },
    { title: "Category", field: "country",
    cellStyle : {
      fontSize : '14px'
    },
    headerStyle : {
      color : 'gray'
    }
  },
    { title: "Address", field: "year" ,
    cellStyle : {
      fontSize : '14px'
    },
    headerStyle : {
      color : 'gray'
    }
  },
    { title: "Description", field: "date" ,
    cellStyle : {
      fontSize : '14px'
    },
    headerStyle : {
      color : 'gray'
    }
  },
    { title: "Status", field: "sport",
    cellStyle : {
      fontSize : '14px'
    },
    headerStyle : {
      color : 'gray'
    }
  },
    { title: "Date (Time)", field: "gold",
    cellStyle : {
      fontSize : '14px'
    },
    headerStyle : {
      color : 'gray'
    }
  },
    { title: "Date (Created)", field: "gold" ,
    cellStyle : {
      fontSize : '14px'
    },
    headerStyle : {
      color : 'gray'
    }
    },
    
  ]

    return (
        <>
            <div className="wrapper">
        {/* Navbar */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Appointment</h1>
                </div>
                
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item" ><Link to='/Dashboard'>Home</Link></li>
                    <li className="breadcrumb-item" ><Link to='/Appointment'>Appointment </Link> </li>
                  </ol>
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12 mt-3'>
                    <Link to='AddAppointment'><button type="button" style={{width:'250px' , backgroundColor : '#fb9500' , border : 'none'}} class="btn btn-primary" ><i class="fas fa-plus"></i> Add New Appointment  </button></Link> 
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12'>

                </div>
                
                
              </div>
            </div>{/* /.container-fluid */}
          </section>
          {/* Main content */}
                <section className='content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                    <div className='col-12'>
                                            <div className='row'>
                                                <div className='col-10'>

                                                </div>
                                                

                                            </div>
                                    </div>
                                <Card style={{padding : '0'}}>
                                    <div className='card-header' style={{backgroundColor: '#fb9500' , color : 'white'}}>
                                        <h3 class="card-title" style={{fontSize : "15px"}} >All Appointments</h3>
                                    </div>

                                   
                                        
                                        <div className='' >
                                        <MaterialTable
                                          title=""
                                          columns={columns}
                                          options={
                                            {
                                              exportButton: true
                                            }
                                          }  
                                          data={query =>
                                            new Promise((resolve, reject) => {
                                              // prepare your data and then call resolve like this:
                                              let url = 'http://localhost:3000/olympic?'
                                              //searching
                                              if (query.search) {
                                                url += `q=${query.search}`
                                              }
                                              //sorting 
                                              if (query.orderBy) {
                                                url += `&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
                                              }
                                              //filtering
                                              // if (query.filters.length) {
                                              //   const filter = query.filters.map(filter => {
                                              //     return `&${filter.column.field}${filter.operator}${filter.value}`
                                              //   })
                                              //   url += filter.join('')
                                              // }
                                              //pagination
                                              url += `&_page=${query.page + 1}`
                                              url += `&_limit=${query.pageSize}`

                                              fetch(url).then(resp => resp.json()).then(resp => {
                                                resolve({
                                                  data: resp,// your data array
                                                  page: query.page,// current page number
                                                  totalCount: 16// total row number
                                                });
                                              })

                                            })
                                          }
                                        />
                                      
                                    </div>    
                                    
                                </Card>


                            </div>
                        </div>
                    </div>



          </section>
          {/* /.content */}
        </div>
      </div>

        </>
    )
    }


export default Appointment;
