import React,{useState,useRef} from "react";
import {useNavigate} from "react-router-dom";
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
import  Button  from '@mui/material/Button';
import Link from '@mui/material/Link'
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import Box from "@mui/material/Box";
export  function VisitorPage(){

    const navigate=useNavigate();
    return (

  <Box>
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
                                    marginLeft:15,
                                    
                                    }}>
                    Visitor Page
                </Typography>              
             </li>
             <li>
                <Link href='/DashBoard'>
                    <Typography variant="h6"
                                component="div"
                                 sx={{ color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}      
                                       >
                    DashBoard
                    </Typography>
                </Link>  
             </li>
             <li>
                <Link href='/ViewInformation'>
                    <Typography variant="h6"
                                component="div" 
                                sx={{  color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    ViewInformation
                    </Typography>
                </Link>  
             </li>
             
            </ul>   
         
          </Paper>
          <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:530
                     }} >                
          <img  
            src='https://www.forcs.com/en/wp-content/uploads/2020/09/industries_Human-reasouces_features-600x600.png'
            style={{
                    width:'500px',
                    marginTop:'50px',
                    marginLeft:400,
                    height:'400px'
                    }}
            />
          </Paper>

  </Box> 

    );
}
export  function ViewInformation(){

     const[receivedUserInfo,setReceivedUserInfo]=useState({
      list:[]
     });

     const[receivedDepartmentInfo,setReceivedDepartmentInfo]=useState({
        list:[]
       });
  
          axios.get("http://localhost/react-db/admin_manager/dashBoard_view_department_info.php")
            .then((response)=>{  
             setReceivedDepartmentInfo({list:response.data})
            })

         axios.get("http://localhost/react-db/admin_manager/dashBoard_view_user_info.php")
            .then((response)=>{  
             setReceivedUserInfo({list:response.data})
            })
     
        const userRef = useRef(); 
        const departmentRef= useRef();
   return(
  <Box>
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
                                    marginLeft:15,
                                    
                                    }}>
                    Visitor Page
                </Typography>              
             </li>
             <li>
                <Link href='/DashBoard'>
                    <Typography variant="h6"
                                component="div"
                                 sx={{ color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}      
                                       >
                    DashBoard
                    </Typography>
                </Link>  
             </li>
             <li>
                <Link href='/ViewInformation'>
                    <Typography variant="h6"
                                component="div" 
                                sx={{  color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    ViewInformation
                    </Typography>
                </Link>  
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
      <Table ref={userRef} sx={{ Width:100}} >              
        <TableHead>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 },borderBottom:'blue 1px solid' }}>
                <TableCell><Typography variant="button">First_Name</Typography></TableCell> 
                <TableCell><Typography variant="button">Middle_Name</Typography></TableCell> 
                <TableCell><Typography variant="button">Last_Name</Typography></TableCell> 
                <TableCell><Typography variant="button">Email_Address</Typography></TableCell> 
                <TableCell><Typography variant="button">Phone_Number</Typography></TableCell> 
                <TableCell><Typography variant="button">Age</Typography></TableCell> 
                <TableCell><Typography variant="button">Sex</Typography></TableCell> 
                <TableCell><Typography variant="button">Martial_Status</Typography></TableCell> 
                <TableCell><Typography variant="button">Education</Typography></TableCell> 
                <TableCell><Typography variant="button">Department_Name</Typography></TableCell> 
                <TableCell><Typography variant="button">Department_Manager</Typography></TableCell> 
          </TableRow>
        </TableHead>        
        <TableBody>
          {receivedUserInfo.list.map((receive,key)=>(
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left"><Typography variant="overline">{receive.first_name}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.middle_name}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.last_name}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.email_address}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.phone_number}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.age}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.sex}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.martial_status}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.education}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.department_name}</Typography></TableCell>
              <TableCell align="left"><Typography variant="overline">{receive.department_manager}</Typography></TableCell>
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
            content={() =>userRef.current }
            documentTitle='Employee Information'

          />    
 <li>         
   <TableContainer style={{width:800,marginTop:10}} component={Paper}>
 <Table ref={departmentRef} sx={{ Width:100}} >              
   <TableHead>
     <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 },borderBottom:'blue 2px solid'}}>
           <TableCell><Typography variant="button">Department_Name</Typography></TableCell> 
           <TableCell><Typography variant="button">Department_Manager</Typography></TableCell> 
           <TableCell><Typography variant="button">Department_Description</Typography></TableCell> 
     </TableRow>
   </TableHead>        
   <TableBody>
     {receivedDepartmentInfo.list.map((receive,key)=>(
       <TableRow
         key={key}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       > 
         <TableCell align="left" style={{border:'white 1px solid'}}><Typography variant="overline">{receive.department_name}</Typography></TableCell>
         <TableCell align="left" style={{border:'white 1px solid'}}><Typography variant="overline">{receive.department_manager}</Typography></TableCell>
         <TableCell align="left" style={{border:'white 1px solid'}}><Typography variant="overline">{receive.department_description}</Typography></TableCell>
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
       content={() =>departmentRef.current }
       documentTitle='Department Information'

     />    

   </li> 
        </li> 
        
        <li>
 
      <Typography variant="button"
          component="div"
          style={{  color:'black',
                  flexGrow: 1,
                  marginLeft:25,
                  marginTop:4
                  }}>
         You Can 
      </Typography>
      <Typography variant="overline"
          component="div"
          sx={{  color:'black',
                  flexGrow: 1,
                  marginLeft:3
                  }}>
          save or print file on user,department table
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
  </Box>
   
   );
}
