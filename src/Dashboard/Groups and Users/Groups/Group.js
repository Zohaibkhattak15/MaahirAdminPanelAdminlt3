import React,{useState} from 'react';
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'




const Group = () => {

  const [data, setData] = useState('')

  const columns = [
    { title: "Group", field: "name" ,
      cellStyle : {
        fontSize : '14px'
      }
    },
    { title: "Description", field: "username",
    
    cellStyle : {
      fontSize : '14px'
    } 
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
                  <h1>Group</h1>
                </div>
                
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item" ><Link to='/Dashboard'>Home</Link></li>
                    <li className="breadcrumb-item" ><Link to='/Group'>Group </Link> </li>
                  </ol>
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12 mt-3'>
                    <Link to='addGroup'><button type="button" style={{width:'250px' , backgroundColor : '#fb9500' , border : 'none'}} class="btn btn-primary" ><i class="fas fa-plus"></i> Add New Group  </button></Link> 
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
                                        <h3 class="card-title" style={{fontSize : "15px"}} >Results for "All Groups"</h3>
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
                                            }
                                          }
                                          
                                          

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
                                                  // page: query.page,// current page number
                                                  // totalCount: 20// total row number
                                                });
                                              })

                                            })
                                          }

                                          editable={{
                                            onRowAdd: newData =>
                                              new Promise((resolve, reject) => {
                                                setTimeout(() => {
                                                  setData([...data, newData]);
                                                  
                                                  resolve();
                                                }, 1000)
                                              }),
                                            onRowUpdate: (newData, oldData) =>
                                              new Promise((resolve, reject) => {
                                                setTimeout(() => {
                                                  const dataUpdate = [...data];
                                                  const index = oldData.tableData.id;
                                                  dataUpdate[index] = newData;
                                                  setData([...dataUpdate]);
                                    
                                                  resolve();
                                                }, 1000)
                                              }),
                                            onRowDelete: oldData =>
                                              new Promise((resolve, reject) => {
                                                setTimeout(() => {
                                                  const dataDelete = [...data];
                                                  const index = oldData.tableData.id;
                                                  dataDelete.splice(index, 1);
                                                  setData([...dataDelete]);
                                                  
                                                  resolve()
                                                }, 1000)
                                              }),
                                          }}
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
export default Group;