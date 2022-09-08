import React,{useState,useRef} from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import  Button  from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
export default function SearchByUsersInfo(){
    const [searchItem,setSearchItem]=useState({
            searchedData:"",
     });
     const[receivedData,setReceivedData]=useState({
      list:[]
     });
    const onchange=((e)=>{
      setSearchItem({...searchItem,[e.target.name]:e.target.value});
    });
    const [departmentData,SetDepartmentData]=useState({
        list:[]
    })
   const submitForm=((e)=>{
            e.preventDefault();
            const sendData={
              searchedData:searchItem.searchedData,
            };
            
            axios.post("http://localhost/react-db/admin_manager/department_member_for_department_info.php",sendData)
            .then((response)=>{  
                SetDepartmentData({list:response.data})                
            }) 
            
          axios.post("http://localhost/react-db/admin_manager/Search_department_Info.php",sendData)
            .then((response)=>{  
             setReceivedData({list:response.data})
         
            })
            
  })
  
  const deleteItem=(deleteItem)=>{
    const sendDeletedEmail={
      email:deleteItem
    }
    axios.post("http://localhost/react-db/admin_manager/delete_department_search_item.php",sendDeletedEmail)
    .then((response)=>(
      console.log(response)
    ))
  }
        const componentRef = useRef(); 
          
   return(
    <form onSubmit={submitForm} >
    <Paper  elevation={7}
                 sx={{
                      flexGrow: 1 ,
                      backgroundColor:'blue'
                      }} >
           <ul style={{
                      display:'inline-flex',
                      listStyleType:'none'
                      }}>
              <li>
                 <Typography variant="h5"
                             component="div"
                             sx={{  color:'white',
                                     flexGrow: 1,
                                     marginLeft:15
                                     }}>
                     REGISTER PAGE
                 </Typography>              
              </li>
              <li>
               <SearchIcon style={{color:'black',
                                  backgroundColor:'white',
                                  marginLeft:'680px',
                                  borderRadius:'4px',
                                  height:'39px'
                                  }}/>
              </li>
              <li>             
              <Input      placeholder="Search..."  
                          name="searchedData"
                          type="text"
                          onChange={onchange}
                          value={searchItem.searchedData}
                           style={{
                                     backgroundColor:'white',
                                     borderRadius:'4px',
                                     height:'40px',
                                     marginLeft:'-4px'
 
                                 }}
                           >
                             
              </Input> 
              </li>
              
           </ul>   
           
         </Paper>
         <Paper  elevation={2}
                 sx={{marginTop:0.5,
                      flexGrow: 1,
                      height:530
                      }} >
         <ul style={{
                      display:'inline-flex',
                      listStyleType:'none',
                      }}>
             <li>         
         
              <TableContainer style={{width:800,marginLeft:1}} component={Paper}>
       <Table ref={componentRef} sx={{ Width:100}} aria-label="simple table">              
         <TableHead>
           <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 },borderBottom:'blue 1px solid' }}>
                 <TableCell><Typography variant="button">Department_Name</Typography></TableCell> 
                 <TableCell><Typography variant="button">Department_Manager</Typography></TableCell> 
                 <TableCell><Typography variant="button">Department_Description</Typography></TableCell> 
                 <TableCell><Typography variant="button">Department_Member</Typography></TableCell> 
           </TableRow>
         </TableHead>        
         <TableBody>
           {receivedData.list.map((receive,key)=>(
             <TableRow
               key={key}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >               
               <TableCell align="left"><Typography variant="overline">{receive.department_name}</Typography></TableCell>
               <TableCell align="left"><Typography variant="overline">{receive.department_manager}</Typography></TableCell>
               <TableCell align="left"><Typography variant="overline">{receive.department_description}</Typography></TableCell>
               {departmentData.list.map((receive)=>
             <TableRow>
               <TableCell align="left"><Typography variant="overline">{receive.first_name}{receive.middle_name}{receive.last_name}</Typography></TableCell>
                
             </TableRow>)} 
              
               <TableCell align="left" >
                    <Button
                           onClick={()=>deleteItem(receive.department_name)}
                           startIcon={<DeleteIcon />}
                           variant="contained" 
                           style={{  
                                       height:'20px',
                                       width:'80px',
                                   }} >
                           Delete
                    </Button>
               </TableCell>
             </TableRow>
           
           ))}          
         </TableBody>        
       </Table>
     </TableContainer>    
     <ReactToPrint
             trigger={() => <Button startIcon={<PrintOutlinedIcon/>}   
                                    variant="contained" 
                                    style={{    
                                               marginLeft:'82px',
                                               width:'180px',
                                               marginTop:'15px'
                                           }} >
                                   
                                   Print|GenerateFile
                           </Button>}
             content={() =>componentRef.current }
             documentTitle='Department Information'
 
           />    
  
         </li> 
         <li>
  
       <Typography variant="button"
           component="div"
           style={{  color:'black',
                   flexGrow: 1,
                   marginLeft:25,
                   marginTop:4
                   }}>
           You Can Search BY Department
       </Typography>
       <Typography variant="overline"
           component="div"
           sx={{  color:'black',
                   flexGrow: 1,
                   marginLeft:3
                   }}>
           Department Name OR Department Manager Name
       </Typography> 
       <img     
           src='https://i.pinimg.com/originals/0f/65/c2/0f65c227b3198b5e00e6f19a2b4712de.gif'
           style={{
                   width:'480px',
                   marginTop:'10px',
                   height:400
                   }}
         /> 
         
       </li>
       </ul>
     </Paper> 
  </form>  
   );
}

