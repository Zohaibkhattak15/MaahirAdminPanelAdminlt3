import React from 'react';
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap';
import Alert from '@material-ui/lab/Alert';
import {MTableCell} from 'material-table';

const User = () => {


  const columns = [
    { title: "Group", field: "name" ,
      cellStyle : {
        fontSize : '14px'
      },
      
    },
    { title: "Description", field: "username",
    
    cellStyle : {
      fontSize : '14px'
    } ,
    render: rowData => <Link><u> {rowData.username} </u> </Link>
  },
    { title: "Added On", field: "website",
    cellStyle : {
      fontSize : '14px'
    }
   },
    { title: "Status", field: "email",
    cellStyle : {
      fontSize : '14px'
    }
   },{title:"Deleted",
   render:() =>
             <div style={{width : '100px'}}>
                     <div style={{paddingLeft:'20px'}}>
                        <span style={{color:'red' ,cursor:'pointer' , }}><i className="fas fa-ban" type="button" data-toggle="modal" data-target="#exampleModalCenter" ></i></span>
                    </div>
      
          {/* Modal */}
                  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalCenterTitle">Permanent Delete Maahir</h5>
                          <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                              <Alert variant="filled" severity="error">
                                This item will be permanently deleted.
                              </Alert>
                              <div>
                                <p>
                                  
                                <span>
                                  <p> </p>  
                                  <p> Are you sure you want to permanently delete
                                  <span  style={{backgroundColor:'orange'}}>Span </span> ?
                                </p>
                                </span>
              
                                <span>
                                  <p> 
                                  This action cannot be undone and may cause data integrity!
                                  </p>
                                </span>
                                </p>
              
                              </div>
              
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                          <button type="button" className="btn btn-danger" data-dismiss="modal" >Permanent Delete Maahir</button>
                        </div>
                      </div>
                    </div>
                  </div>                  
          </div>,

      }
    
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
                  <h1>User</h1>
                </div>
                
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item" ><Link to='/Dashboard'>Home</Link></li>
                    <li className="breadcrumb-item" ><Link to='/Users'>User </Link> </li>
                  </ol>
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12 mt-3'>
                    <Link to='AddUsers'><button type="button" style={{width:'250px' , backgroundColor : '#fb9500' , border : 'none'}} class="btn btn-primary" ><i class="fas fa-plus"></i> Add New User  </button></Link> 
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
                                <Card >
                                    <div className='card-header' style={{backgroundColor: '#fb9500' , color : 'white'}}>
                                        <h3 class="card-title" style={{fontSize : "15px"}} >Results for "All Users"</h3>
                                    </div>

                                    
                                      <div className='' >
                                        <MaterialTable
                                          title=""
                                          columns={columns}
                                          // onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                                          options={
                                            // {
                                            // rowStyle: rowData => ({
                                            //   backgroundColor: (selectedRow === rowData.tableData.id) ? '#dff0d8' : '#FFF'
                                            // })},
                                            // //this is option section
                                            {
                                              exportButton: true,
                                              selection: true,
                                              actionsColumnIndex: -1,
                                              rowStyle: x => {
                                                if (x.tableData.id % 2) {
                                                    return {backgroundColor: "#f2f2f2"}
                                                                        }
                                                            }
                                                }
                                          }
                                          components={{
                                            Cell: props => (
                                              <MTableCell {...props} style={{ padding: '4px 8px 4px 8px' }} />
                                            ),
                                          }}
                                          
                                          
                                          

                                          data={ query =>
                                            new Promise((resolve, reject) => {


                                              
                                              // prepare your data and then call resolve like this:
                                              let url = 'https://jsonplaceholder.typicode.com/users'
                                              //searching
                                              // if (query.search) {
                                              //   url += `q=${query.search}`
                                              // }
                                              //sorting 
                                              // if (query.orderBy) {
                                              //   url += `&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
                                              // }
                                             
                                              //pagination
                                              // url += `&_page=${query.page + 1}`
                                              // url += `&_limit=${query.pageSize}`

                                              fetch(url)
                                              .then(resp =>resp.json())
                                                  
                                              .then(resp => {
                                                resolve({
                                                  data: resp,// your data array
                                                   page: query.page,// current page number
                                                   totalCount: 20// total row number
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
export default User;