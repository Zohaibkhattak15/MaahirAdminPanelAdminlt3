import React ,{useState , useEffect}from 'react';
import {Card} from 'react-bootstrap';
import MaterialTable from 'material-table'
// import { connect } from "react-redux";
// import * as actionTypes from '../../Store/actionTypes/common';
import {Select,MenuItem} from '@material-ui/core';
import {MTableCell} from 'material-table';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';


// { userData : {users, filteredData}, dispatch }

function ServiceProviders() {

  const [allData, setallData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [gold, setgold] = useState('all');
  const [uniqueId, setuniqueId] = useState(1);
 
  useEffect(() => {
    getStudent();
    
   },[]);

   const getStudent = () =>{
    let url = 'http://localhost:3000/olympic'
        
    fetch(url).then( resp => resp.json()).then( resp => {
     setfilterData(resp)
     setallData(resp)
    })
   }

  //  const getUserDataAsync = () => {
  //   axios
  //   .get(`https://jsonplaceholder.typicode.com/users`)
  //   .then(response => {
  //     const users = response.data;
  //     dispatch(actionTypes.fetchUserSucces(users));
  //   })
  //   .catch(error => {
  //     const errorMessage = error.message;
  //     dispatch(actionTypes.fetchUserFailure(errorMessage));
  //   });
  //  }


  const deleteRecord = () => {
    if(uniqueId){
      let index = allData[uniqueId]?.id;
      console.log(allData);
      axios.delete(`http://localhost:3000/olympic/${index}`)
      .then(res =>{
        if(res.status === 200){
          setallData(allData.splice(index , 1));
          console.log(allData);
          alert('Deleted');
        }
      }).catch(err=>console.log(err));

    }

    else{
      alert('the record didnt found ')
    }
  }

  const updateRecord = () => {
    alert('the record updated...')
  }
  
  const onButtonClick = () => {
    setfilterData( filterData === 'all' ? allData : allData.filter( data => data.gold === gold));
  }

  // const clearAllFilters = () => {
  //   dispatch(actionTypes.resetFilters());
  // }
     
  const columns = [
    
    { 
      title: "athlete", field: "athlete", 
      cellStyle : {
        fontSize : '14px'
      }
   },
    { 
      title: "age", field: "age",
      
      cellStyle : {
        fontSize : '14px'
      } 
    },
    { 
      title: "country", field: "country",
     
      cellStyle : {
        fontSize : '14px'
      } 
    },
    { 
      title: "year", field: "year",
     
      cellStyle : {
        fontSize : '14px'
      } 
    },
    { 
      title: "bs", field: 'company.bs',
      render:()=><div>
        <div>
          <span style={{backgroundColor:'gray' , borderRadius:'5px' , padding : '5px 5px'}}>Pending</span>
        </div>
      </div>,
      
      cellStyle : {
        fontSize : '14px'
      }
    },
    
      {
             title: "Deleted", field: "" ,
  
             render:() =><div style={{width : '100px'}}>
                     <div style={{paddingLeft:'20px'}}>
                        <span style={{color:'red' ,cursor:'pointer' , }}><i className="fas fa-ban" type="button" data-toggle="modal" data-target="#exampleModalCenter" ></i></span>
                    </div>
      
          {/* Modal */}
                  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalCenterTitle">Permanent Delete Maahir</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                  <span style={{backgroundColor:'orange'}}> {allData[uniqueId]?.athlete } </span> ?
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
                          <button type="button" className="btn btn-danger" onClick={deleteRecord}>Permanent Delete Maahir</button>
                        </div>
                      </div>
                    </div>
                  </div>                  
          </div>,
          },
          {
            title:'Update ' ,
            render:()=> 
            <div> 
              <span style={{color:'red' ,cursor:'pointer'}}><SystemUpdateAltIcon  onClick={updateRecord}/></span>
            </div>

          }
    
  ]


    return (
        <>
            <div className='content-wrapper'>
                <section className='content-header'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 ml-3'>
                                <h1 style={{Color: '#26415e'}} >Service Providers</h1>
                            </div>
                            <div className='col-12'>
                                <hr></hr>
                            </div>

                            <div className='col-12'>
                                <div className='px-4 py-2'>
                                    <div>
                                    <p>Category</p>
                                    </div>

                                    <div className='row mb-4'>
                                        <div>
                                            <Select 
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            style={{width:'250px' , height : '40px' , paddingLeft : '10px'}}
                                            value={gold}
                                            onChange={(e) => setgold(e.target.value)}
                                            >
                                                <MenuItem  value={'all'}><em>All</em></MenuItem>
                                                <MenuItem  value={8}>8</MenuItem>
                                                <MenuItem  value={6}>6 </MenuItem>
                                                <MenuItem  value={4}>4</MenuItem>
                                            </Select>
                                        </div>
                                        <div className='col-4'>
                                            <button type="button" style={{width:'150px' , padding : '7px 0 ' , marginLeft : '20px' , backgroundColor: '#fb9500' , border : 'none'}} class="btn btn-primary" onClick={onButtonClick}>Filter</button>
                                            {/* <button onClick={clearAllFilters}>Reset Filters</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 
                </section>

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
                                        <h3 class="card-title" style={{fontSize : "15px"}} >Results for Service Providers</h3>
                                    </div>

                                    <div className='' >
                                        <MaterialTable
                                          title=""
                                          columns={columns}
<<<<<<< HEAD
                                          onRowClick={((evt, selectedRow) => console.log(selectedRow.tableData.id))}
=======
                                          onRowClick={((evt, selectedRow) =>{  
                                            setuniqueId(selectedRow.tableData.id);
                                          })}
>>>>>>> 851216db7ee80b0f0c0367847deac2d96d23d933
                                          options={
                                            {
                                              exportButton: true,
                                              actionsColumnIndex: -1,
                                              addRowPosition : 'first',
                                              selection:true,
                                              search:true,
                                              rowStyle: x => {
                                                if (x.tableData.id % 2) {
                                                    return {backgroundColor: "#f2f2f2"}
                                                                        }
                                                            }
                                            }

                                            
                                          }

                                          actions={[
                                            {
                                              icon: () => <DeleteIcon />,
                                              tooltip: "Delete Rows",
                                              // onClick: handleDeleteRows
                                            }
                                          ]}
                                          components={{
                                            Cell: props => (
                                              <MTableCell {...props} style={{ padding: '4px 8px 4px 8px' }} />
                                            ),
                                          }}
                                          
                                          data={filterData.length === 0 ? allData : filterData
                                           }

                                          
                                        />
                                      </div>    
                                </Card>
                            </div>
                        </div>
                    </div>
            </section>
         </div>
            </>
        )
    }

export default ServiceProviders


// const mapStateToProps = ({UserReducer}) => ({
//   userData: UserReducer
// });

// export default connect(mapStateToProps)(ServiceProviders);
