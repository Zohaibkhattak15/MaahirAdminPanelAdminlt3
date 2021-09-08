import React,{useState} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table'
import {MTableCell} from 'material-table';



 
const Appversion = () => {
    
    const [selectedRow, setSelectedRow] = useState(null);
    
    const columns = [
        { title: "IOS", field: "athlete" },
        { title: "Android", field: "age" },
        { title: "Date Created", field: "country" },
       ]
    
return (
    <>
        <div className="wrapper">
            <div className="content-wrapper">
                    <section className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1>Application Version History</h1>
                        </div>
                        
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"   ><Link to='/Dashboard'>Home</Link></li>
                            <li className="breadcrumb-item" ><Link to='/Appointment'>Application Version History </Link> </li>
                        </ol>
                        </div>

                        <div className='col-12'>
                        <hr></hr>
                        </div>

                        <div className='col-12'>

                        </div>
                        
                        
                    </div>
                    </div>{/* /.container-fluid */}
                    </section>

                <section className='content'>    
                    <Card style={{padding : '0'}}>

                        

                        <div className='row mt-5 mx-1'>
                        <div className='col-4'>
                                    <div className="card card-primary" style={{padding : '0'}}>
                                        <div className="card-header" style={{backgroundColor: '#fb9500' }}>
                                            <h3 className="card-title" style={{fontSize : "15px"}}>Add Version</h3>
                                        </div>
                               
                                    <form >
                                        <div className="card-body"  >
                                        <div className="form-group" >
                                            <label ><span style={{color :'red'}}>*</span>IOS</label>
                                            <input type="text" className="form-control" id="" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label ><span style={{color :'red'}}>*</span>Android</label>
                                            <input type="text" className="form-control" id="" placeholder="" />
                                        </div>
                                        
                    
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer">
                                        <button type="submit" className="btn btn-block btn-primary"  style={{backgroundColor: '#fb9500' , color : 'white' , border: 'none'}}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                        </div>
                        
                            <div className='col-8'>
                                <div className='card-header' style={{backgroundColor: '#fb9500' , color : 'white' }}>
                                        <h3 class="card-title" style={{fontSize : "15px"}} >Results for "Application Versions"</h3>
                                </div>
                                <div className='' style={{ marginBottom : '3em' }} >
                                
                                <MaterialTable
                                        title=""
                                        columns={columns}
                                        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                                        
                                        options={{
                                            exportButton: true,
                                            rowStyle: x => {
                                                if (x.tableData.id % 2) {
                                                    return {backgroundColor: "#f2f2f2"}
                                                                        }
                                                            }
                                        }}
                                        components={{
                                            Cell: props => (
                                              <MTableCell {...props} style={{ padding: '5px 3px 5px 3px' }} />
                                            ),
                                          }}
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
                                            if (query.filters.length) {
                                                const filter = query.filters.map(filter => {
                                                return `&${filter.column.field}${filter.operator}${filter.value}`
                                                })
                                                url += filter.join('')
                                            }
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
                            </div>
                            
                        </div>
                    </Card>
                </section>    
            </div>         
        </div>    
         </>   
        )
        }

 
export default Appversion;