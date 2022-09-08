import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import logoImg from './Text&Image/logo.jpg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
function Login(){
const [adminLogin,setAdminLogin]=useState({
      nameEmail:"",
      password:"",
});
const [actors, setActors] = useState("AdminManager");

  const LoginChange = (event) => {
    setActors(event.target.value)
  }
const onchange=((e)=>{
  setAdminLogin({...adminLogin,[e.target.name]:e.target.value});
});

const navigate=useNavigate();
const submitForm=((e)=>{
      e.preventDefault();
      if(actors==='AdminManager'){
        axios.get("http://localhost/react-db/admin_manager/admin_login.php").then((response)=>{
      const feachAdminData={
            name:response.data.name,
            email:response.data.email,
            password:response.data.password
          }
      const dataBasePassword=JSON.parse(CryptoJS.AES.decrypt(feachAdminData.password, "my-secret-key").toString(CryptoJS.enc.Utf8))
         
          if((adminLogin.password===dataBasePassword)&&((adminLogin.nameEmail===feachAdminData.name)||(adminLogin.nameEmail===feachAdminData.email))){
            navigate('/AdminManagerPage');
          } 
  
          
          if((adminLogin.password!==dataBasePassword)||((adminLogin.nameEmail!==feachAdminData.email)&&(adminLogin.nameEmail!==feachAdminData.name))){
            document.getElementById('validation').style.marginTop='-1px';
            document.getElementById('validation').innerHTML="either userName/email/password incorrect ";
        } 
           
        })}  
  
      if(actors==='Register'){

      axios.get("http://localhost/react-db/admin_manager/register_login.php").then((response)=>{
    const feachRegisterData={
          name:response.data.name,
          email:response.data.email,
          password:response.data.password
        }
      const dataBasePassword=JSON.parse(CryptoJS.AES.decrypt(feachRegisterData.password, "my-secret-key").toString(CryptoJS.enc.Utf8))
       
        if((adminLogin.password===dataBasePassword)&&((adminLogin.nameEmail===feachRegisterData.name)||(adminLogin.nameEmail===feachRegisterData.email))){
          navigate('/RegisterPage');
        } 

        if((adminLogin.password!==dataBasePassword)||((adminLogin.nameEmail!==feachRegisterData.email)&&(adminLogin.nameEmail!==feachRegisterData.name))){
  
          document.getElementById('validation').innerHTML="either userName/email/password incorrect ";
                     
          } 
      })}
   
     
      
    if(actors==='Visitor'){

        axios.get("http://localhost/react-db/admin_manager/visitor_login.php").then((response)=>{
    const feachVisitorData={                                
          name:response.data.name,
          email:response.data.email,
          password:response.data.password
           }
      const dataBasePassword=JSON.parse(CryptoJS.AES.decrypt(feachVisitorData.password, "my-secret-key").toString(CryptoJS.enc.Utf8))

        if((adminLogin.password===dataBasePassword)&&((adminLogin.nameEmail===feachVisitorData.name)||(adminLogin.nameEmail===feachVisitorData.email))){
          navigate('/VisitorPage');
           } 
           if((adminLogin.password!==dataBasePassword)||((adminLogin.nameEmail!==feachVisitorData.email)&&(adminLogin.nameEmail!==feachVisitorData.name))){
            document.getElementById('validation').innerHTML="either userName/email/password incorrect ";
                     
          } 
      })}


    });

    return (
            
          <form onSubmit={submitForm}>
    <ul  style={{display:'inline-flex',listStyleType:'none'}}>
    <li>
       <img 
              src='https://th.bing.com/th/id/OIP.QS-ChBfPuQrYMWydQ73g4AAAAA?pid=ImgDet&rs=1'
              style={{
                      width:'70px',
                      marginLeft:'20px',  
                      borderRadius:'20px',
                      marginTop:'-25px'
                      }}
              />
       </li>  
    <li>
    <Typography variant="overline"
              style={{
                      marginTop:'-20px',                       
                      width:'160px',
                      marginLeft:'4px',  
                      borderRadius:'20px'
                      }}>
          Management System             
    </Typography>
       </li>
    </ul>
    <ul  style={{display:'inline-flex',listStyleType:'none'}}>
         
          <li>     
          <img 
              src='https://static.dribbble.com/users/1039694/screenshots/4861037/concierge.gif'
              style={{
                      width:'600px',
                      marginTop:'10px',
                      marginLeft:'20px',  
                      borderRadius:'20px'
                      }}
              /> 
          </li>
      <li> 
      <Paper elevation={8} sx={{ width: 500,
                                height: 350,
                                marginLeft:10,
                                marginTop:5,
                                }} >
         
        <MailOutlineIcon sx={{ fontSize: 40,
                                          marginTop:5,
                                          marginLeft:5
                                            }} />
        <TextField      sx={{ fontSize: 40,
                              marginTop:3.5,
                              marginLeft:2,
                              width:340,
                                }} 
                        label="Email/UserName"
                        variant="filled"
                        name="nameEmail"
                        required
                        onChange={onchange}
                        value={adminLogin.nameEmail}
                        type="text"
          />
              <br></br>
        <LockOpenIcon sx={{ fontSize: 40,
                              marginTop:3,
                              marginLeft:5
                                            }} />
        <TextField      sx={{ fontSize: 40,
                              marginTop:1.5,
                              marginLeft:2,
                              width:340,
                             
                                }} 
                                onChange={onchange}
                               
                               value={adminLogin.password} 
                               required
                               name='password'
                               type="password"        
                               label="Password"
                               variant="filled"
         />
          <h1
          id="validation"
          style={{      
            color:'red',
            fontSize:'16px',
            marginLeft:'100px'          
         }}
         >
        </h1>
        <br/>
        <br></br>
        <NativeSelect value={actors} 
         onChange={LoginChange} style={{ 
                              marginTop:'-120px',
                              marginLeft:96,
                              width:340,
                              fontStyle:"italic"
                                }} >
            <option value="AdminManager">AdminManager</option>
            <option value="Visitor">Visitor</option>
            <option value="Register">Register</option>
        </NativeSelect>
        <br></br>
        <Link   href="/Recovery" 
              sx={{ 
                    fontSize: 17,
                    marginTop:3,
                    marginLeft:33,
                    width:200
                           }}
                    underline="hover"
          >
      <Typography variant="overline" sx={{  marginLeft:3}} >
      Forget Password?
      </Typography>
            
        </Link>
        <br></br>
        <br></br>
        <Button   type="submit" 
                  sx={{                       
                          marginLeft:12,
                          width:150
                     }}
                 variant="contained" >
                 Login
        </Button>
        <Button  onClick={()=>navigate('/AdminManagerSignupCode')} 
                     sx={{ 
                          marginLeft:5,
                          width:150
                                }}
                 variant="contained" >
                 SingUp
        </Button>

      </Paper></li>
    
    </ul>    

   
           </form>

    );
}

export default Login;