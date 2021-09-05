import React,{useState , useEffect} from 'react';
// import MaterialTable from 'material-table'
import { Link } from 'react-router-dom';
// import Alert from '@material-ui/lab/Alert';
// import {MTableCell} from 'material-table';
// import { DataGrid } from '@material-ui/data-grid';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';


function CustomToolbar() {
  return (
    <GridToolbarContainer style={{float:'right'}}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}


function Customers() {

  const [tableData, setTableData] = useState([]);
  

  useEffect(() => {

    let url = 'https://jsonplaceholder.typicode.com/users'
      fetch(url).then( resp => resp.json()).then( resp => {
       setTableData(resp)
      })
 },[]);

  // const deleteRecord = () => {
  //   alert('The record is deleted.....')
  // }

  // const columns = [
    
  //   { 
  //     title: "Avatar", field: "",
  //     render: rowData => (
  //       <img
  //         style={{ height: 36, borderRadius: '50%' }}
  //         src='avt.png'
  //         alt="avatar"
  //       />
  //     ),
  //  },
  //   { 
  //     title: "Name", field: "name",
      
     
  //   },
  //   { 
  //     title: "Email", field: "email",
     
  //   },
  //   { 
  //     title: "Gender", field: "",
  //     render:()=><div>
  //       <div>
  //         <span style={{backgroundColor:'gray' , borderRadius:'5px' , padding : '5px 5px'}}>Male</span>
  //       </div>
        
  //     </div>, 
  //   },
  //   { 
  //     title: "Group", field: "",
     
  //   },
  //   { 
  //     title: "Referral", field: "",
     
  //    },
  //   { 
  //     title: "Mobile", field: "phone",
      
  //   },
  //   { 
  //     title: "Address", field: "address.street" ,
     
  //   },
  //   { 
  //     title: "User Type", field: "" ,
  //     render:()=><div>
  //     <div>
  //       <span style={{backgroundColor:'gray' , borderRadius:'5px' , padding : '5px 5px'}}>Customer</span>
  //     </div>
      
  //   </div>,
     
  //   },
  //   { 
  //     title: "Added On", field: "website" ,
     
  //   },
  //   {
  //      title: "Status", field: "" ,
  //      render:()=><div>
  //     <div>
  //       <span style={{backgroundColor:'gray' , borderRadius:'5px' , padding : '5px 5px'}}>Active</span>
  //     </div>

  //   {/* Modal */}
  //   <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  //     <div className="modal-dialog modal-dialog-centered" role="document">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h5 className="modal-title" id="exampleModalCenterTitle">Permanent Delete Maahir</h5>
  //           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
  //             <span aria-hidden="true">×</span>
  //           </button>
  //         </div>
  //         <div className="modal-body">
  //               <Alert variant="filled" severity="error">
  //               This item will be permanently deleted.
  //               </Alert>
  //               <div>
  //                 <p>
                    
  //                  <span>
  //                    <p> </p>  
  //                   <p> Are you sure you want to permanently delete
  //                 " Qari" ?
  //                 </p>
  //                 </span>

  //                 <span>
  //                   <p> 
  //                    This action cannot be undone and may cause data integrity!
  //                   </p>
  //                 </span>
  //                 </p>

  //               </div>

  //         </div>
  //         <div className="modal-footer">
  //           <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
  //           <button type="button" className="btn btn-danger" onClick={deleteRecord}>Permanent Delete Maahir</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

      
  //   </div>,
  //   },
  //   {
  //      title: "Delete", field: "", 
  //      render:()=><div>
  //      <div>
  //        <span style={{color:'red' ,cursor:'pointer'}}><i className="fas fa-ban" type="button" data-toggle="modal" data-target="#exampleModalCenter"></i></span>
  //      </div>
       
  //    </div>,
  //   },

    
  // ]

 
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'name',
      headerName: ' name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'email',
      width: 150,
      editable: true,
    },
    {
      field: 'username',
      headerName: 'username',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'phone',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
     
    },
  ];

  return (
      
      <div className="wrapper">
    <div className="content-wrapper">
    <div className="App">
    <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Appointment</h1>
                </div>
                
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item" ><Link to='/Dashboard'>Home</Link></li>
                    <li className="breadcrumb-item" ><span>Appointment </span>  </li>
                  </ol>
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12 mt-3'>
                    <Link to='AddAppointment'><button type="button" style={{width:'250px' , backgroundColor : '#fb9500' , border : 'none'}} class="btn btn-primary" ><i class="fas fa-plus"></i> Add New Category  </button></Link> 
                </div>

                <div className='col-12'>
                  <hr></hr>
                </div>

                <div className='col-12'>

                </div>
                
                
              </div>
            </div>{/* /.container-fluid */}
          </section>
      
      <div className='col-12'>
        <div className='card-header' style={{backgroundColor: '#fb9500' , color : 'white' }}>
          <h3 class="card-title" style={{fontSize : "15px"}} >Results for "Application Versions"</h3>
        </div>
        {/* <div className='' style={{marginBottom : '3em' }} >
                <MaterialTable
                  title=""
                  columns={columns}
                  options={
                    {
                    selection:true
                    }
                  }

                  components={{
                    Cell: props => (
                      <MTableCell {...props} style={{ padding: '4px 8px 4px 8px' } } />
                    ),
                  }}

                  data={tableData}
                />
      </div> */}
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={tableData}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              checkboxSelection
              disableSelectionOnClick
              components={{
                Toolbar: CustomToolbar,
              }}
              
            />
          </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
