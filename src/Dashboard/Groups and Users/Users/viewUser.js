import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import MaterialTable from 'material-table'
import {MTableCell} from 'material-table';
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const viewUser = () => {


  const columns = [
    { title: "Group", field: "id" ,
      cellStyle : {
        fontSize : '14px'
      },
      render: rowData => <Link><u> {rowData.id} </u> </Link>
    },
    { title: "Description", field: "athlete",
    
    cellStyle : {
      fontSize : '14px'
    } 
  },
    { title: "Added On", field: "age",
    cellStyle : {
      fontSize : '14px'
    }
   },
    { title: "Status", field: "country",
    cellStyle : {
      fontSize : '14px'
    },
    
   },
   
    
  ]
    return (
        <>
        <div className="wrapper" >
        {/* Navbar */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header" >
            <div className="container-fluid" >
              <div className="row mb-2" style={{backgroundColor:'white'}}>
                <div className="col-sm-6">
                  <h1>User Details</h1>
                </div>
                
                <div className="col-sm-6" >
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item" ><Link to='/Dashboard'>Home</Link></li>
                    <li className="breadcrumb-item" ><Link to='/Users'>User </Link> </li>
                    <li className="breadcrumb-item" ><Link to='/viewUser'>User Details</Link> </li>
                  </ol>
                </div>
                

                <div className='col-12' >
                  <hr></hr>
                </div>
                    <div className='col-3 ml-2' style={{margin:'0px' , padding:'0px'}}>
                        <img src='zohaib.png' alt='mine ' width='250px' height='200px'/>
                         <p className='mt-2 text-center' style={{width:'15.5em' , alignItems:'center', backgroundColor:'lightgray' , padding:'10px 20px'}}> (Active) Mubashir</p>
                        <p className='mt-2 text-center' style={{width:'15.5em' , alignItems:'center', backgroundColor:'lightgray', padding:'10px 20px'}}> Edit</p>
                    </div>   
                    <div className='col-8 ml-5'>
                    <Table striped bordered hover>
                        <tbody>
                        <tr  >
                                <td >
                                Mobile
                                </td>
                                <td style={{width:'500px'}}>
                                923235407259
                                </td>
                            </tr>
                            <tr >
                                <td >
                                Categories
                                </td>
                                <td>
                                Welder
                                </td>
                            </tr>
                            <tr >
                                <td >
                                    User Type
                                </td>   
                                <td>
                                Customer
                                </td> 
                            </tr>
                            <tr >
                                <td >
                                    Joined
                                </td>
                                <td>
                                2021/04/07
                                </td>
                            </tr>
                            <tr > 
                                <td >
                                CNIC
                                </td>
                                <td>
                                3840366726023
                                </td>
                            </tr>
                            <tr >
                                <td >
                                Referance 1	
                                </td>
                                <td>
                                1
                                </td>
                            </tr>
                            <tr >
                                <td >
                                Referance 2	
                                </td>
                                <td>
                                1
                                </td>
                            </tr>
                            <tr >
                                <td >
                                Username	
                                </td>
                                <td>
                                zohaib
                                </td>
                            </tr>
                            <tr >
                                <td >
                                Location 	
                                </td>
                                <td>
                                3840366726023
                                </td>
                            </tr>
                            <tr > 
                                <td >
                                About Me	
                                </td>
                                <td>
                                3840366726023
                                </td>

                            </tr>
                        </tbody>
                        </Table>
                    </div>   
                    <div className='col-12'>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>      
                <div className='col-3'>

                </div>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-6'>
                        <p className='ml-2' style={{color:'lightblue' , fontSize:'20px',cursor:'pointer' }}><RssFeedOutlinedIcon /> Latest Reviews</p>
                        </div>
                        <div className='col-6'>
                        <p style={{float:'right' , color :'lightblue' , cursor:'pointer'}}>
                            <CachedOutlinedIcon />
                            <DeleteForeverOutlinedIcon />

                         </p>
                        </div>
                    </div>                        
                   
                <div className='col-12'>
                  <hr></hr>
                </div>
                
                    <div className='col-12'>
                    <div className='' >
                                        <MaterialTable
                                          title="Appointments"
                                          columns={columns}
                                          // onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                                          options={
                                            // {
                                            // rowStyle: rowData => ({
                                            //   backgroundColor: (selectedRow === rowData.tableData.id) ? '#dff0d8' : '#FFF'
                                            // })},
                                            // //this is option section
                                            {
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
                                              let url = 'http://localhost:3000/olympic'
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
                    </div>    
                </div>    
                
                
              </div>
            </div>{/* /.container-fluid */}
          </section>
          </div>
          </div>
        </>
    )
}
export default viewUser;