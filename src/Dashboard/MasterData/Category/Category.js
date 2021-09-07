import React, { useState , useEffect  } from 'react';
import MaterialTable from 'material-table'
import { Link , useHistory} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import './Category.css';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';



const Category = () => {

  const [tabledata, setTabledata] = useState([]);
  const [uniqueId, setuniqueId] = useState();
  const  history = useHistory();


  function updateRecord (){
    console.log(uniqueId);
      history.push({
        pathname: '/updateCategory',
        state: tabledata[uniqueId]
      });
  }
  
  useEffect(() => {
    getStudent();
    
   },[]);

   const getStudent = () =>{
    let url = 'http://localhost:3000/olympic'
    fetch(url).then( resp => resp.json()).then( resp => {
     setTabledata(resp)
    })
   }

  const columns = [
   
    { title: "Title", field: "athlete" ,
      cellStyle : {
        fontSize : '14px'
      }
    },
    { title: "Approved Maahir", field: "age",
    
    cellStyle : {
      fontSize : '14px'
    } 
  },
    { title: "Pending Maahir", field: "country",
    cellStyle : {
      fontSize : '14px'
    }
   },
    { title: "Description", field: "year",
    cellStyle : {
      fontSize : '14px'
    }
   },
    { title: "Web Icon", field: "date" ,
    cellStyle : {
      fontSize : '14px'
    }
  },
    { title: "Mobile Icon", field: "sport" ,
    cellStyle : {
      fontSize : '14px'
    }
  },
    { title: "Actions", field: "gold" ,
    cellStyle : {
      fontSize : '14px'
    }
  },
  {
    title: "Update", field: "", 
    render:(rowData) => 
      <div>
        <span style={{color:'red' ,cursor:'pointer'}}><SystemUpdateAltIcon 
        onClick={
          updateRecord
          } /></span>
      </div>,
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
                  <h1>Category</h1>
                </div>
                
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item" ><Link to='/Dashboard'>Home</Link></li>
                    <li className="breadcrumb-item" ><Link to='/Appointment'>Category </Link> </li>
                  </ol>
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12 mt-3'>
                    <Link to='AddCategory'><button type="button" style={{width:'250px' , backgroundColor : '#fb9500' , border : 'none'}} class="btn btn-primary" ><i class="fas fa-plus"></i> Add New Category  </button></Link> 
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
                                        <h3 class="card-title" style={{fontSize : "15px"}} >Results for "All Category"</h3>
                                    </div>

                                    
                                      <div className='' >
                                        <MaterialTable
                                          title=""
                                          columns={columns}
                                          // onRowClick={((evt, selectedRow) => updateRecord(selectedRow.tableData.id))}
                                          options={
                                          
                                            {
                                              exportButton: true,
                                              actionsColumnIndex: -1,
                                              addRowPosition : 'first',
                                              selection: true,
                                              rowStyle: x => {
                                                if (x.tableData.id % 2) {
                                                    return {backgroundColor: "#f2f2f2"}
                                                                        }
                                                            }
                                            }
                                            
                                          }
                                       
                                          data={
                                            
                                            tabledata
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
export default Category;