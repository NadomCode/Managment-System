import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Header from './Components/Header';
export default function RegisterPage(){
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
                    Register Page
                </Typography>              
             </li>
             <li>
                <Link href="/home" >
                    <Typography variant="h6"
                                component="div"
                                 sx={{ color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    Registration
                    </Typography>
                </Link>
                
             </li>
             <li>
                <Link href="/SearchByUsersInfo">
                    <Typography variant="h6"
                                component="div" 
                                sx={{  color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    Search Users
                    </Typography>
                </Link>  
             </li>
             <li>
                <Link href="/SearchByDepartmentInfo">
                    <Typography variant="h6"
                                component="div" 
                                sx={{  color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    Search Department
                    </Typography>
                </Link>  
             </li>
             <li>
                <Link href="/DashBoard">
                    <Typography variant="h6"
                                component="div" 
                                sx={{  color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    DashBoard
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
                    src='https://sherbrooke-innopole.com/wp-content/uploads/assets/marketing-rh.jpg'
                    style={{
                            width:'700px',
                            marginTop:'20px',
                            marginLeft:'265px',
                            }}
                 />       

        </Paper>
  </Box>
    );
}