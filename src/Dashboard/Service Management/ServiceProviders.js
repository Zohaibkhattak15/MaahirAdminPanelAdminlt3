import React ,{useState , useEffect}from 'react';
import {Card} from 'react-bootstrap';
import MaterialTable from 'material-table'
// import { connect } from "react-redux";
// import * as actionTypes from '../../Store/actionTypes/common';
import {Select,MenuItem} from '@material-ui/core';
import {MTableCell} from 'material-table';
import Alert from '@material-ui/lab/Alert';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';



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
      setallData(allData.splice(index , 1));
      console.log(allData);
      // axios.delete(`http://localhost:3000/olympic/${index}`)
      // .then(res =>{
      //   if(res.status === 200){
          
      //     console.log(allData);
      //     alert('Deleted');
      //   }
      // }).catch(err=>console.log(err));

    }

    else{
      alert('the record didnt found ')
    }
  }

  const onButtonClick = () => {
    setfilterData( gold === 'all' ? allData : allData.filter( data => data.gold === gold));
  }

  // const clearAllFilters = () => {
  //   dispatch(actionTypes.resetFilters());
  // }
     
  const columns = [
    {
      title: 'Avatar',
      field: 'avatar',
      render: () => (
        <img
          style={{ height: 36, borderRadius: '50%' }}
          src='avt.png'
          alt='avatar'
        />
      ),
    },
    { 
      title: 'Name',
      cellStyle : {

        fontSize : '12px'
      },
      render: rowData =>(
        
        <Link ><u> {rowData.athlete} </u> </Link>  
        
      ) 

   },
   { 
    title: 'Email',
    field:'sport',
    cellStyle : {

      fontSize : '12px'
    },      

 },
   { 
    title: 'Gender',
    field:'',
    cellStyle : {
      fontSize : '12px'
    },     
    render:() => 
    <div><p style={{padding:'5px 25px' , backgroundColor:'purple' , color:'white'}}> Male</p></div> 

 },
 { 
  title: 'Group',
  field:'',
  cellStyle : {
    fontSize : '12px'
  }
},
{ 
  title: 'Referral',
  field:'',
  cellStyle : {
    fontSize : '12px'
  }
},
    { 
      title: "mobile", field: "mobile",
      
      cellStyle : {
        fontSize : '12px'
      },
      render : (rowData) => <div className='text-center'>{rowData.age}</div> 
    },
    { 
      title: "Address", field: "country",
     
      cellStyle : {
        fontSize : '12px'
      } 
    },
    { 
      title: "UserType", field: "",
     
      cellStyle : {
        fontSize : '12px'
      },
      render:()=><div>
        <div>
          <span><img src='poster.png' alt='poster '  width='70px' height='70px' /></span>
        </div>
      </div>, 
    },
    { 
      title: "Added On", field: 'date',
      cellStyle : {
        fontSize : '12px'
      }
    },
    { 
      title: "Status", field: 'date',
      cellStyle : {
        fontSize : '12px'
      },     
      render:() => 
      <div><p style={{padding:'5px 25px' , backgroundColor:'lightblue' , color:'white'}}> Male</p></div> 
  
    },
    
      {
             title: "Deleted", field: "" ,
             cellStyle : {
              fontSize : '12px'
            },
  
             render:() =>
             <div>
                     <div>
                        <EditOutlinedIcon style={{color:'green' ,}}/>
                        <span style={{color:'red' ,cursor:'pointer' , marginLeft:'1em' }}><i className="fas fa-ban" type="button" data-toggle="modal" data-target="#exampleModalCenter" ></i></span>
                        <DeleteIcon style={{color:'orange' , marginLeft:'.5em'}} />
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
                                  <span  style={{backgroundColor:'orange'}}> {allData[uniqueId]?.athlete } </span> ?
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
                          <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={deleteRecord}>Permanent Delete Maahir</button>
                        </div>
                      </div>
                    </div>
                  </div>                  
          </div>,
          },  
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
                                          onRowClick={((evt, selectedRow) =>{  
                                            setuniqueId(selectedRow.tableData.id);
                                          })}
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
                                            }}

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
                                          
                                          data={filterData}

                                          
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
