import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import {AdminManagerSignupHeader} from './AdminManagerPage';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Button  from '@mui/material/Button';
import registerImage from './Text&Image/registerImg.jpg';
import visitorImage from './Text&Image/visitorImg.jpg';
export function RecoveryNavigator(){
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
                    RECOVERY PAGE
                </Typography>              
             </li>
             <li>
                <Link href='/RegisterRecovery'>
                    <Typography variant="h6"
                                component="div"
                                 sx={{ color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15,
                                       }}      
                                       >
                    REGISTER
                    </Typography>
                </Link>  
             </li>
             <li>
                <Link href='/VisitorRecovery'>
                    <Typography variant="h6"
                                component="div" 
                                sx={{  color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    VISITOR
                    </Typography>
                </Link>  
             </li>
             
            </ul>   
         
          </Paper>

        </Box>
    )
}
export  function Recovery(){
    return (
    <Box  sx={{ flexGrow: 1 }}> 
        <RecoveryNavigator/>        
        <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:600
                     }} >
                        <img     
                            src='https://login.equalweb.com/assets/img/banners/Forgot_Password.png'
                            style={{
                                    width:'600px',
                                    marginTop:'50px',
                                    marginLeft:'330px',
                                    }}
                         /> 
        </Paper>
   </Box>
   
    );
}

export  function RegisterRecovery(){
    const navigate=useNavigate();
    const [registerRecovery,setRegisterRecovery]=useState({
            recoveryCode:"",
    });
    
    const onchange=(e)=>{
        setRegisterRecovery({...registerRecovery,[e.target.name]:e.target.value})
    }
     const submitForm=((e)=>{
        e.preventDefault();
   
            axios.get("http://localhost/react-db/admin_manager/register_recovery_check.php")
            .then((response)=>{
                 const feachData={
                    recoveryCode:response.data.recoveryCode,
                  } 
                  const dataBasePassword=JSON.parse(CryptoJS.AES.decrypt(feachData.recoveryCode, "my-secret-key").toString(CryptoJS.enc.Utf8));
                  
                  if((dataBasePassword===registerRecovery.recoveryCode)){
                     navigate('/RegisterPasswordRecovery')
             }
             else if(dataBasePassword!==registerRecovery.recoveryCode){
                document.getElementById('recoveryCode').style.marginTop='2px';   

                document.getElementById('recoveryCode').innerHTML="does't match";   
                  
             }  
            })
   }); 
    return (
      <Box>
         <RecoveryNavigator/>   
         <form onSubmit={submitForm} >
            <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:525
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
                                            marginTop:'10px',
                                            marginLeft:'100px',
                                            }}
                                    /> 
                        </li>                   
                        <li>
                        <img     
                                    src={registerImage}
                                    style={{
                                            width:'250px',
                                            marginTop:'50px',
                                            marginLeft:'100px',
                                            }}
                                    />
                        </li>        
                      
                        <li>
                                <Paper elevation={5}
                                            sx={{
                                                flexGrow: 1,
                                                marginLeft:-35,
                                                height:180,
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
                                                label="Recovery Code"
                                                type="password"
                                                autoComplete="current-password"
                                                required 
                                                onChange={onchange}
                                                name='recoveryCode'
                                                value={registerRecovery.recoveryCode}
                                    />
                                       <br></br>
                                       <h1
                                                id="recoveryCode"
                                                style={
                                                {
                                                color:'red',
                                                fontSize:'16px',
                                                marginTop:'10px',
                                                marginLeft:'115px'
                                                }
                                                }>
                                        </h1>    
                                       <br></br>
                                     <Button  type='submit' 
                                              variant="contained" 
                                              style={{  
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
export function RegisterPasswordRecovery(){
    const navigate=useNavigate();
    const [registerPasswordRecovery,setRegisterPasswordRecovery]=useState({
            password:"",
            confirmPassword:"",
    });
    
    const onchange=(e)=>{
        setRegisterPasswordRecovery({...registerPasswordRecovery,[e.target.name]:e.target.value})
    }
     const submitForm=((e)=>{
        e.preventDefault();
        const encryptedPassword=CryptoJS.AES.encrypt(JSON.stringify(registerPasswordRecovery.password), "my-secret-key").toString()
        const sendData={
            password:encryptedPassword
        }
        if(registerPasswordRecovery.password===registerPasswordRecovery.confirmPassword){
            document.getElementById('confirmPassword').style.color="green";
            document.getElementById('confirmPassword').innerHTML="changed successfully";
            axios.post('http://localhost/react-db/admin_manager/register_password_change.php',sendData)
            .then(response=>{
                console.log(response.data);
            });
        }
        else{
            document.getElementById('confirmPassword').style.marginTop='1px';   

            document.getElementById('confirmPassword').innerHTML="does't match";
        }
        
     });
    return(
  <Box>
    <RecoveryNavigator/>   
     <form onSubmit={submitForm} >
        
    <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:520
                     }} >
                     <ul style={{
                                    display:'inline-flex',
                                    listStyleType:'none'
                                    }}> 
                        <li>
                                <img     
                                    src='https://th.bing.com/th/id/R.96fd393d3d595e8f298ed72b2ad27c47?rik=TBc7bbRYxanaLA&riu=http%3a%2f%2fryadav-eserve.com%2fimages%2fmember-login.png&ehk=eUTiTGd7jPedOfckiSUa66VodpQFyvIsxv%2fjhXFLDYg%3d&risl=&pid=ImgRaw&r=0'
                                    style={{
                                            width:'600px',
                                            marginTop:'50px',
                                            marginLeft:'100px',
                                            }}
                                    /> 
                        </li>
                        <li>
                        <img     
                                    src={registerImage}
                                    style={{
                                            width:'250px',
                                            marginTop:'50px',
                                            marginLeft:'100px',
                                            }}
                                    />
                        </li> 
                        <li>
                                <Paper elevation={5}
                                            sx={{
                                                flexGrow: 1,
                                                marginLeft:-35,
                                                height:260,
                                                width:440,
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
                                                label="Password"
                                                type="password"
                                                required 
                                                onChange={onchange}
                                                name='password'
                                                value={registerPasswordRecovery.password}
                                                autoComplete="current-password"
                                    /> 
                                    <br></br>
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
                                       onChange={onchange}
                                       name='confirmPassword'
                                       value={registerPasswordRecovery.confirmPassword}
                                       label="Confirm Password"
                                       type="password"
                                    />
                                       <br></br>
                                       <h1
                                            id="confirmPassword"
                                            style={
                                            {
                                            color:'red',
                                            fontSize:'16px',
                                            marginTop:'10px',
                                            marginLeft:'120px'
                                            }
                                            }>
                                       </h1>    
                                       <br></br>
                                     <Button  type="submit"
                                              variant="contained" 
                                              style={{  
                                                         marginTop:'-8px',
                                                         marginLeft:'120px',
                                                         width:'180px'
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
export function  AdminManagerPasswordRecovery(){
    const navigate=useNavigate();
    const [adminManagerPasswordRecovery,setAdminManagerPasswordRecovery]=useState({
            password:"",
            confirmPassword:"",
    });
    
    const onchange=(e)=>{
        setAdminManagerPasswordRecovery({...adminManagerPasswordRecovery,[e.target.name]:e.target.value})
    }
     const submitForm=((e)=>{
        e.preventDefault();
        const encryptedPassword=CryptoJS.AES.encrypt(JSON.stringify(adminManagerPasswordRecovery.password), "my-secret-key").toString()
        const sendData={
            password:encryptedPassword
        }
        if(adminManagerPasswordRecovery.password===adminManagerPasswordRecovery.confirmPassword){
            document.getElementById('confirmPassword').style.marginTop='1px';
            document.getElementById('confirmPassword').style.color="green";
            document.getElementById('confirmPassword').innerHTML="changed successfully";
            
            axios.post('http://localhost/react-db/admin_manager/admin_password_change.php',sendData)
            .then(response=>{
            });
        }
        else{
            document.getElementById('confirmPassword').style.marginTop='1px';
            document.getElementById('confirmPassword').innerHTML="does't match";
        }
     });
    return(
 <Box>
   <AdminManagerSignupHeader/>
      <form onSubmit={submitForm} >
         <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:600
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
                                                height:270,
                                                width:350,
                                                marginTop:15
                                                }} >
                                   
                                      <TextField     style={{
                                                               marginTop:'20px',
                                                               marginLeft:'70px'
                                                         }} 
                                                      id="filled-password-input"
                                                      label="Password"
                                                      type="password"
                                                      required 
                                                      onChange={onchange}
                                                      name='password'
                                                      value={adminManagerPasswordRecovery.password}
                                                      autoComplete="current-password"
                                                      variant="filled"
                                          />  
                                          <br></br>
                                          <br></br>                 
                                     <TextField     style={{
                                                             marginTop:'10px',
                                                             marginLeft:'70px'
                                                         }} 
                                                      id="filled-password-input"
                                                      label="Confirm Password"
                                                      type="password"
                                                      required
                                                      onChange={onchange}
                                                      name='confirmPassword'
                                                      value={adminManagerPasswordRecovery.confirmPassword}
                                                      autoComplete="current-password"
                                                      variant="filled"
                                          /> 
                                       <h1
                                            id="confirmPassword"
                                            style={
                                            {
                                            color:'red',
                                            fontSize:'16px',
                                            marginTop:'10px',
                                            marginLeft:'100px'
                                            }
                                            }>
                                       </h1>   
                                     <Button  type="submit" 
                                              variant="contained" 
                                              style={{  
                                                         marginLeft:'82px',
                                                         width:'180px',
                                                         marginTop:'15px'
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
export  function AdminManager(){
  const navigate=useNavigate();
    const [adminRecovery,setAdminRecovery]=useState({
            whereYouBorn:"",
            yourPrimarySchoolName:"",
            yourNickname:"",
            yourFatherFullName:"",
    });
    
    const onchange=(e)=>{
        setAdminRecovery({...adminRecovery,[e.target.name]:e.target.value})
    }
     const submitForm=((e)=>{
        e.preventDefault();
   
            axios.get("http://localhost/react-db/admin_manager/admin_recovery_check.php")
            .then((response)=>{
                 const feachData={
                    whereYouBorn:response.data.whereYouBorn,
                    yourPrimarySchoolName:response.data.yourPrimarySchoolName,
                    yourNickname:response.data.yourNickname,
                    yourFatherFullName:response.data.yourFatherFullName
                  } 
             if((feachData.whereYouBorn===adminRecovery.whereYouBorn)&&
                (feachData.yourPrimarySchoolName===adminRecovery.yourPrimarySchoolName)&&
                (feachData.yourNickname===adminRecovery.yourNickname)&&
                (feachData.yourFatherFullName===adminRecovery.yourFatherFullName)){
                     navigate('/AdminManagerPasswordRecovery')
             }
              if(feachData.whereYouBorn!==adminRecovery.whereYouBorn){
                document.getElementById('whereYouBorn').style.marginTop='-30px';
                document.getElementById('whereYouBorn').style.marginLeft='218px'; 
                document.getElementById('whereYouBorn').innerHTML="does't match";   
                  
             }
              if(feachData.yourPrimarySchoolName!==adminRecovery.yourPrimarySchoolName){
                document.getElementById('yourPrimarySchoolName').style.marginTop='-30px'; 
                document.getElementById('yourPrimarySchoolName').innerHTML="does't match";   
                  
             }
              if(feachData.yourNickname!==adminRecovery.yourNickname){
                document.getElementById('yourNickname').style.marginTop='-30px'; 
                document.getElementById('yourNickname').innerHTML="does't match";   
                  
             }
              if(feachData.yourFatherFullName!==adminRecovery.yourFatherFullName){
                document.getElementById('yourFatherFullName').style.marginTop='-30px'; 
                document.getElementById('yourFatherFullName').style.marginLeft='218px'; 
                document.getElementById('yourFatherFullName').innerHTML="does't match";   
                  
             } 
            })
   }); 
    return (
  <Box>
    <AdminManagerSignupHeader/>
        <form onSubmit={submitForm} > 
        <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:600
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
                                                marginLeft:25,
                                                height:270,
                                                width:500,
                                                marginTop:15
                                                }} >
                                   
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                        <TextField     style={{
                                                              marginTop:'20px',
                                                              marginLeft:'30px'
                                                         }} 
                                                      label="Your Nickname"
                                                      type="text"
                                                      required
                                                      onChange={onchange}
                                                      name='yourNickname'
                                                      value={adminRecovery.yourNickname}
                                                      variant="filled"
                                          />
                                          
                                       <TextField     style={{
                                                            marginTop:'20px',
                                                            marginLeft:'25px'
                                                         }} 
                                                      label="Your Father Full Name"
                                                      required
                                                      onChange={onchange}
                                                      name='yourFatherFullName'
                                                      value={adminRecovery.yourFatherFullName}
                                                      type="text"
                                                      variant="filled"
                                          />
                                    </li> 
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                                <h1
                                                        id="yourNickname"
                                                        style={
                                                        {
                                                        color:'red',
                                                        fontSize:'16px',
                                                        marginLeft:'50px'
                                                        }
                                                        }>
                                                </h1>   
                                    </li> 
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                                <h1
                                                        id="yourFatherFullName"
                                                        style={
                                                        {
                                                        color:'red',
                                                        fontSize:'16px',
                                                        marginLeft:'160px',
                                                        marginTop:'-30px'
                                                        }
                                                        }>
                                                </h1>   
                                    </li>             
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                         <TextField     style={{
                                                              marginTop:'-5px',
                                                            marginLeft:'30px'
                                                         }} 
                                                      label="Primary School Name"
                                                      type="text"
                                                      required
                                                      onChange={onchange}
                                                      name='yourPrimarySchoolName'
                                                      value={adminRecovery.yourPrimarySchoolName}
                                                      variant="filled"
                                          />
                                         <TextField     style={{
                                                              marginTop:'-5px',
                                                            marginLeft:'25px'
                                                         }} 
                                                      label="Where You Born"
                                                      type="text"
                                                      required 
                                                      onChange={onchange}
                                                      name='whereYouBorn'
                                                      value={adminRecovery.whereYouBorn}
                                                      variant="filled"
                                          /> 
                                    </li>   
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                                <h1
                                                        id="yourPrimarySchoolName"
                                                        style={
                                                        {
                                                            color:'red',
                                                            fontSize:'16px',
                                                            marginLeft:'50px'
                                                        }
                                                        }>
                                                </h1>   
                                    </li> 
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                                <h1
                                                        id="whereYouBorn"                                                        
                                                        style={
                                                        {
                                                            color:'red',
                                                            fontSize:'16px',
                                                            marginLeft:'160px',
                                                            marginTop:'-30px'
                                                        }
                                                        }>
                                                </h1>   
                                    </li> 
                                           
                                </Paper>
                        </li>
                     </ul>  
                     <Button  
                        type='submit' 
                        variant="contained" 
                        style={{  
                                    marginLeft:'-340px',
                                    marginTop:'200px',
                                    width:'180px',
                                }} >
                        
                        Check
                     </Button>        
         </Paper>
         </form>

                                    
  </Box>      
   
    );
}
export  function VisitorRecovery(){
    const navigate=useNavigate();
    const [visitorRecovery,setVisitorRecovery]=useState({
            recoveryCode:"",
    });
    
    const onchange=(e)=>{
        setVisitorRecovery({...visitorRecovery,[e.target.name]:e.target.value})
    }
     const submitForm=((e)=>{
        e.preventDefault();
   
            axios.get("http://localhost/react-db/admin_manager/visitor_recovery_check.php")
            .then((response)=>{
                 const feachData={
                    recoveryCode:response.data.recoveryCode,
                  } 
         const dataBasePassword=JSON.parse(CryptoJS.AES.decrypt(feachData.recoveryCode, "my-secret-key").toString(CryptoJS.enc.Utf8));

             if((dataBasePassword===visitorRecovery.recoveryCode)){
                     navigate('/VisitorPasswordRecovery')
             }
             else if(dataBasePassword!==visitorRecovery.recoveryCode){
                document.getElementById('recoveryCode').style.marginTop='1px'; 

                document.getElementById('recoveryCode').innerHTML="does't match";   
                  
             }  
            })
   }); 
    return (
<Box>
<RecoveryNavigator/>   
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
                                src='https://uisil.ac.cr/files/modulos/testvocacional/img/forgot.png'
                                style={{
                                        width:'600px',
                                        marginTop:'50px',
                                        marginLeft:'100px',
                                        }}
                                /> 
                    </li>
                    <li>
                        <img     
                                    src={visitorImage}
                                    style={{
                                            width:'250px',
                                            marginTop:'50px',
                                            marginLeft:'100px',
                                            }}
                                    />
                        </li>
                    <li>
                            <Paper elevation={5}
                                        sx={{
                                            flexGrow: 1,
                                            marginLeft:-40,
                                            height:170,
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
                                            label="Recovery Code"
                                            type="password"
                                            required 
                                            onChange={onchange}
                                            name='recoveryCode'
                                            value={visitorRecovery.recoveryCode}
                                />
                                   <br></br>
                                   <h1
                                            id="recoveryCode"
                                            style={
                                            {
                                            color:'red',
                                            fontSize:'16px',
                                            marginTop:'10px',
                                            marginLeft:'115px'
                                            }
                                            }>
                                   </h1>    
                                   <br></br>
                                 <Button  type='submit' 
                                          variant="contained" 
                                          style={{  
                                                     marginTop:'-8px',
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

export function VisitorPasswordRecovery(){
    const navigate=useNavigate();
    const [visitorPasswordRecovery,setVisitorPasswordRecovery]=useState({
            password:"",
            confirmPassword:"",
    });
    
    const onchange=(e)=>{
        setVisitorPasswordRecovery({...visitorPasswordRecovery,[e.target.name]:e.target.value})
    }
     const submitForm=((e)=>{
        e.preventDefault();
        const encryptedPassword=CryptoJS.AES.encrypt(JSON.stringify(visitorPasswordRecovery.password), "my-secret-key").toString()
        const sendData={
            password:encryptedPassword,
        }
        if(visitorPasswordRecovery.password===visitorPasswordRecovery.confirmPassword){
            document.getElementById('confirmPassword').style.color="green";
            document.getElementById('confirmPassword').innerHTML="changed successfully";
            axios.post('http://localhost/react-db/admin_manager/visitor_password_change.php',sendData)
            .then(response=>{
                console.log(response.data);
            });
        }
        else{
            document.getElementById('confirmPassword').style.marginTop='1px';

            document.getElementById('confirmPassword').innerHTML="does't match";
        }
       
     });
    return(
    
    <Box>
     <RecoveryNavigator/>   
     <form onSubmit={submitForm} >    
    <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:518
                     }} >
                     <ul style={{
                                    display:'inline-flex',
                                    listStyleType:'none'
                                    }}> 
                        <li>
                                <img     
                                    src='https://th.bing.com/th/id/R.96fd393d3d595e8f298ed72b2ad27c47?rik=TBc7bbRYxanaLA&riu=http%3a%2f%2fryadav-eserve.com%2fimages%2fmember-login.png&ehk=eUTiTGd7jPedOfckiSUa66VodpQFyvIsxv%2fjhXFLDYg%3d&risl=&pid=ImgRaw&r=0'
                                    style={{
                                            width:'600px',
                                            marginTop:'50px',
                                            marginLeft:'100px',
                                            }}
                                    /> 
                        </li>
                        <li>
                        <img     
                                    src={visitorImage}
                                    style={{
                                            width:'250px',
                                            marginTop:'50px',
                                            marginLeft:'100px',
                                            }}
                                    />
                        </li>
                        <li>
                                <Paper elevation={5}
                                            sx={{
                                                flexGrow: 1,
                                                marginLeft:-38,
                                                height:250,
                                                width:440,
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
                                                label="Password"
                                                type="password"
                                                required 
                                                name='password'
                                                onChange={onchange}
                                                value={visitorPasswordRecovery.password}
                                                autoComplete="current-password"
                                    /> 
                                    <br></br>
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
                                       onChange={onchange}
                                       name='confirmPassword'
                                       value={visitorPasswordRecovery.confirmPassword}
                                       label="Confirm Password"
                                       type="password"
                                       autoComplete="current-password"
                                    />
                                       <br></br>
                                    <h1
                                        id="confirmPassword"
                                        style={
                                        {
                                        color:'red',
                                        fontSize:'16px',
                                        marginTop:'10px',
                                        marginLeft:'110px'
                                        }
                                        }>
                                    </h1>   
                                       <br></br>
                                     <Button  type="submit"
                                              variant="contained" 
                                              style={{  
                                                         marginTop:'-8px',
                                                         marginLeft:'120px',
                                                         width:'180px'
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
