import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AdminManagerSignupHeader} from './AdminManagerPage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import  Button  from '@mui/material/Button';

export default function AdminManagerSignupCode(){
    const navigate=useNavigate();
    const [adminSignupCode,setAdminSignupCode]=useState({
         signupCode:"",
    });
    
    const onchange=(e)=>{
        setAdminSignupCode({...adminSignupCode,[e.target.name]:e.target.value})
    }
     const submitForm=((e)=>{
        e.preventDefault();
   
            axios.get("http://localhost/react-db/admin_manager/admin_manager_signupcode_check.php")
            .then((response)=>{
                 const feachData={
                    signupCode:response.data.signupCode,
                  } 
             if((feachData.signupCode===adminSignupCode.signupCode)){
                     navigate('/AdminSingupPageNavigator')
             }
             else if(feachData.signupCode!==adminSignupCode.signupCode){
                document.getElementById('signupCode').style.marginTop='1px';
                document.getElementById('signupCode').innerHTML="does't match";   
                  
             }  
            })
   }); 
    return (
  <Box>     
     <form onSubmit={submitForm} >
        <Paper  elevation={7}
                sx={{
                     height:40,
                     backgroundColor:'blue'
                     }} >
                  <Typography variant="h6"
                              component="div"
                              style={{ color:'white',
                                        marginTop:'8px',
                                        marginLeft:'80px'
                                    }}
                              >
                             Admin Manager Signup Code 
                  </Typography>   
                         
      
        </Paper>
        <Paper  elevation={2}
            sx={{marginTop:0.5,
                  flexGrow: 1,
                  height:530
                  }} >
           <ul style={{
                          display:'inline-flex',
                          listStyleType:'none'
                          }}> 
              <li>
                      <img     
                          src='https://uisil.ac.cr/files/modulos/testvocacional/img/forgot.png'
                          style={{
                                  width:'600px',
                                  marginTop:'50px',
                                  marginLeft:'100px',
                                  }}
                          /> 
              </li>
              <li>
                      <Paper elevation={5}
                                  sx={{
                                      flexGrow: 1,
                                      marginLeft:18,
                                      height:160,
                                      width:400,
                                      marginTop:16
                                      }} >
                  
                          <LockPersonIcon  style={{  color:'blue',
                                                     fontSize:'50px', 
                                                     marginTop:'29px',
                                                     marginLeft:'30px'
                                                   }} /> 
                          <TextField sx={{
                             flexGrow: 1,
                             marginLeft:3,
                             marginTop:3
                             }} 
                             required
                             label="SingUp Code"
                             type="password"
                             onChange={onchange}
                             name='signupCode'
                             value={adminSignupCode.signupCode}
                          />
                         <h1
                            id="signupCode"
                            style={
                            {
                            color:'red',
                            fontSize:'16px',
                            marginLeft:'120px'
                            }
                            }>
                         </h1>
                           <Button  type='submit' 
                                    variant="contained" 
                                    style={{  
                                               marginTop:'8px',
                                               marginLeft:'120px',
                                               width:'180px'
                                            }} >
                                    
                                   Check
                          </Button>                   
                      </Paper>
              </li>
           </ul>                  
                 
        </Paper> 
     </form> 
  </Box>  
 
    );
}

export  function AdminSingupPageNavigator(){
    const navigate=useNavigate();
       return(
  
<Box>
     <AdminManagerSignupHeader/>     
        <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:530
                     }} >
                        <img     
                            src='https://kapstonellc.com/wp-content/uploads/2019/09/Privileged-Access-Management-1024x859.png'
                            style={{
                                    width:'600px',
                                    marginTop:'33px',
                                    marginLeft:'330px',
                                    height:'500px'
                                    }}
                         /> 
        </Paper> 
</Box>           
 
       );
   }

   export function ChangeAdminSingupCode(){
    const navigate=useNavigate();
    const [changeAdminSingupCode,setChangeAdminSingupCode]=useState({
        signupCode:"",
    });
    
    const onchange=(e)=>{
        setChangeAdminSingupCode({...changeAdminSingupCode,[e.target.name]:e.target.value})
    }
     const submitForm=((e)=>{
        e.preventDefault();
        const sendData={
            signupCode:changeAdminSingupCode.signupCode
        }
        if(sendData.signupCode===sendData.signupCode){
            document.getElementById('signupCode').style.marginTop='1px';
            document.getElementById('signupCode').style.color="green";
            document.getElementById('signupCode').innerHTML="changed successfully";
        }
        else{
            document.getElementById('signupCode').style.marginTop='1px';
            document.getElementById('signupCode').innerHTML="does't match";
        }
        console.log(sendData.signupCode);
        axios.post('http://localhost/react-db/admin_manager/admin_manager_signupcode_change.php',sendData)
        .then(response=>{
            console.log(response.data);
        });
     });
    return(
<Box>
    <AdminManagerSignupHeader/>
        <form onSubmit={submitForm} >
        <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:530
                     }} >
                       <ul style={{
                                    display:'inline-flex',
                                    listStyleType:'none'
                                    }}> 
                        <li>
                                <img  
                                    src='https://razorblade.pro/images/category/Recovery_Logo.png'
                                    style={{
                                            width:'300px',
                                            marginTop:'50px',
                                            marginLeft:'100px',
                                            }}
                                    /> 
                        </li>
                        <li>
                                <img  
                                    src='https://th.bing.com/th/id/OIP.b1coQrHq3O1bzAUczFhZfwAAAA?pid=ImgDet&w=416&h=416&rs=1'
                                    style={{
                                            width:'300px',
                                            marginTop:'190px',
                                            marginLeft:'-300px',
                                            }}
                                    /> 
                        </li>
                        <li>
                                <Paper elevation={9}
                                            sx={{
                                                flexGrow: 1,
                                                marginLeft:50,
                                                height:160,
                                                width:350,
                                                marginTop:25
                                                }} >
                                                
                                     <TextField     style={{
                                                             marginTop:'20px',
                                                             marginLeft:'70px'
                                                         }} 
                                                      label="signupCode"
                                                      required 
                                                      onChange={onchange}
                                                      name='signupCode'
                                                      value={changeAdminSingupCode.signupCode}
                                                      type="password"                                                      
                                                      variant="filled"
                                          /> 
                                       <h1
                                            id="signupCode"
                                            style={
                                            {
                                            color:'red',
                                            fontSize:'16px',
                                            marginLeft:'80px'
                                            }
                                            }>
                                       </h1>    
                                     <Button  type="submit" 
                                              variant="contained" 
                                              style={{  
                                                         marginLeft:'82px',
                                                         width:'180px',
                                                         marginTop:'10px'
                                                      }} >
                                              
                                             Change
                                    </Button>                   
                                </Paper>
                        </li>
                     </ul>          
         </Paper>
        </form>    
</Box>

    );
}
   