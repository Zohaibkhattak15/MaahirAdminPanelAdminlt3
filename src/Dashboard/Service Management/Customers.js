import React,{useState , useEffect} from 'react';
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom';
import {MTableCell} from 'material-table';
// import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import Alert from '@material-ui/lab/Alert';



function Customers() {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {

    let url = 'https://jsonplaceholder.typicode.com/users'
      fetch(url).then( resp => resp.json()).then( resp => {
       setTableData(resp)
      })
 },[]);


//  const deleteRecord = () => {
//   if(uniqueId){
//     let index = tableData[uniqueId]?.id;
//     console.log(tableData);
//     axios.delete(`http://localhost:3000/olympic${index}`)
//     .then(res=>{
//       if(res.status===200){
//         setTableData(tableData.splice(index , 1));
//         alert('Deleted');
//       }
//     }).catch(err=>console.log(err));

//   }

//   else{
//     alert('the record didnt found ')
//   }
// }

  // const deleteRecord = () => {
  //   alert('The record is deleted.....')
  // }

  const columns = [
    
    { 
      title: "Avatar", field: "",
      render: rowData => (
        <img
          style={{ height: 36, borderRadius: '50%' }}
          src='avt.png'
          alt="avatar"
        />
      ),
   },
   { 
    title: 'Name',
    field:'name',
    cellStyle : {

      fontSize : '12px'
    },
    render: rowData =>(
      <Link ><u> {rowData.name} </u> </Link>  
       ) 
  },
    { 
      title: "Email", field: "email",
      cellStyle : {

        fontSize : '12px'
      },
     
    },
    { 
      title: "Gender", field: "",
      cellStyle : {

        fontSize : '12px'
      },
      render:()=><div>
        <div>
          <span style={{backgroundColor:'purple' , borderRadius:'5px' , padding : '5px 5px'}}>Male</span>
        </div>
        
      </div>, 
    },
    { 
      title: "Group ", field: "" ,
     
    },
    { 
      title: "Refferal ", field: "" ,
     
    },
    { 
      title: "Mobile ", field: "" ,
     
    },
    { 
      title: "Address ", field: "" ,
     
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
       title: "Added On", field: "" ,
      
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
                 <span style={{color:'red' ,cursor:'pointer' , marginLeft:'2em' }}><i className="fas fa-ban fa-1x " type="button" data-toggle="modal" data-target="#exampleModalCenter" ></i></span>
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
                            
                           <p> Are you sure you want to permanently delete
                           
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
   },  
  ]
  return (
      
      <div className="wrapper">
    <div className="content-wrapper">
    <div className="App">
    <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Customer</h1>
                </div>
                
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item" ><Link to='/Dashboard'>Home</Link></li>
                    <li className="breadcrumb-item" ><span>Customer </span>  </li>
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
      
      <div className='col-12'>
        <div className='card-header' style={{backgroundColor: '#fb9500' , color : 'white' }}>
          <h3 class="card-title" style={{fontSize : "15px"}} >Results for Customers</h3>
        </div>
        <div className='' style={{marginBottom : '3em' }} >
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
        </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
