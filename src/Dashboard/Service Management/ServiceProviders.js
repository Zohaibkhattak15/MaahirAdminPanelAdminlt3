import React ,{useState , useEffect}from 'react';
import {Card} from 'react-bootstrap';
import MaterialTable from 'material-table'
// import { connect } from "react-redux";
// import * as actionTypes from '../../Store/actionTypes/common';
import {Select,MenuItem} from '@material-ui/core';
import {MTableCell} from 'material-table';
import DeleteIcon from '@material-ui/icons/Delete';
// import axios from "axios";


// { userData : {users, filteredData}, dispatch }

function ServiceProviders() {

  const [allData, setallData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [username, setusername] = useState('all');
 
  useEffect(() => {

      let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url).then( resp => resp.json()).then( resp => {
         setfilterData(resp)
         setallData(resp)
        })
   },[]);

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

  const handleDeleteRows = oldData =>{
  new Promise((resolve, reject) => {
      setTimeout(() => {
          const dataDelete = [...allData];
          const index = oldData.tableData.id;
          dataDelete.splice(index, 1);
          setallData([...dataDelete]);

          resolve();
      }, 1000);
  })
  };
  
  const onButtonClick = () => {
    setfilterData( filterData === 'all' ? allData : allData.filter( data => data.username === username));
  }

  // const clearAllFilters = () => {
  //   dispatch(actionTypes.resetFilters());
  // }
     
  const columns = [
    
    { 
      title: "Avatar", field: "name",
      
      cellStyle : {
        fontSize : '14px'
      }
   },
    { 
      title: "Email", field: "email",
      
      cellStyle : {
        fontSize : '14px'
      } 
    },
    { 
      title: "Age", field: "phone",
     
      cellStyle : {
        fontSize : '14px'
      } 
    },
    { 
      title: "Group", field: "website",
     
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
                                            value={username}
                                            onChange={(e) => setusername(e.target.value)}
                                            >
                                                <MenuItem  value={'all'}><em>All</em></MenuItem>
                                                <MenuItem  value={'Bret'}>Bret</MenuItem>
                                                <MenuItem  value={'Antonette'}>Antonette </MenuItem>
                                                <MenuItem  value={'Samantha'}>Samantha</MenuItem>
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
                                          // onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
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
                                              onClick: handleDeleteRows
                                            }
                                          ]}
                                          components={{
                                            Cell: props => (
                                              <MTableCell {...props} style={{ padding: '4px 8px 4px 8px' }} />
                                            ),
                                          }}
                                          
                                          data={
                                           filterData.length === 0 ? allData : filterData
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
