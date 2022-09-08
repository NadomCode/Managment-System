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
import  Button  from '@mui/material/Button';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import Box from "@mui/material/Box";
export   function DashBoard(){

 const [userCount,setUserCount]=useState({
    usersInfo:[]
 });

 const [departmentCount,setDepartmentCount]=useState();
        
            axios.post("http://localhost/react-db/admin_manager/dashBoard_userCount.php")
            .then((response)=>{  
                setUserCount({usersInfo:response.data})       
            }) 
            axios.post("http://localhost/react-db/admin_manager/dashBoard_departmentCount.php")
            .then((response)=>{  
                setDepartmentCount(response.data.department_count)     
            }) 

        const componentRef = useRef(); 

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
                                     marginLeft:15
                                     }}>
                     DASHBOARD
                 </Typography>              
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
                 <TableCell><Typography variant="button">User_Count</Typography></TableCell> 
                 <TableCell><Typography variant="button">Male_Count</Typography></TableCell> 
                 <TableCell><Typography variant="button">Female_Count</Typography></TableCell> 
                 <TableCell><Typography variant="button">Married_Count</Typography></TableCell> 
                 <TableCell><Typography variant="button">Unmarried_Count</Typography></TableCell> 
                 <TableCell><Typography variant="button">Department_Count</Typography></TableCell> 
           </TableRow>
         </TableHead>        
         <TableBody>
           {userCount.usersInfo.map((received,key)=>(
             <TableRow
               key={key}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell align="left"><Typography variant="overline">{received.user_count}</Typography></TableCell>
               <TableCell align="left"><Typography variant="overline">{received.male_count}</Typography></TableCell>
               <TableCell align="left"><Typography variant="overline">{received.female_count}</Typography></TableCell>
               <TableCell align="left"><Typography variant="overline">{received.married_status_count}</Typography></TableCell>
               <TableCell align="left"><Typography variant="overline">{received.unmarried_status_count}</Typography></TableCell>
               <TableCell align="left"><Typography variant="overline">{departmentCount}</Typography></TableCell>
               
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
             documentTitle='Employee Status Count'
 
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
           DashBoard
       </Typography>
       <Typography variant="overline"
           component="div"
           sx={{  color:'black',
                   flexGrow: 1,
                   marginLeft:3
                   }}>
           This Page Display Count of Users,Male,Female,Martial_Status,Department
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

