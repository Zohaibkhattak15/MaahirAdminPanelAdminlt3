import React,{useState , useEffect} from 'react';
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom';
import {MTableCell} from 'material-table';
// import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';



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
      title: "Name", field: "name",
      
     
    },
    { 
      title: "Email", field: "email",
     
    },
    { 
      title: "Gender", field: "",
      render:()=><div>
        <div>
          <span style={{backgroundColor:'gray' , borderRadius:'5px' , padding : '5px 5px'}}>Male</span>
        </div>
        
      </div>, 
    },
    { 
      title: "User Type", field: "" ,
      render:()=><div>
      <div>
        <span style={{backgroundColor:'gray' , borderRadius:'5px' , padding : '5px 5px'}}>Customer</span>
      </div>
      
    </div>,
     
    },
    { 
      title: "Added On", field: "website" ,
     
    },
    {
       title: "Status", field: "" ,
       render:()=><div>
      <div>
        <span style={{backgroundColor:'gray' , borderRadius:'5px' , padding : '5px 5px'}}>Active</span>
      </div>      
    </div>
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
