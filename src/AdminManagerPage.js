import React,{useState,useEffect} from "react";
import axios from "axios";
import CryptoJS, { enc } from "crypto-js";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import registerImage from './Text&Image/registerImg.jpg';
import visitorImage from './Text&Image/visitorImg.jpg';                        
export function AdminManagerSignupHeader(){
  return(
    
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
                    Admin Manager 
                </Typography>              
             </li>
             <li>
                <Link href="/AdminManagerSignup">
                    <Typography variant="h6"
                                component="div"
                                 sx={{ color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    SignUp
                    </Typography>
                </Link>  
             </li>
             <li>
                <Link href="/AdminManager">
                    <Typography variant="h6"
                                component="div" 
                                sx={{  color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    Password Recovery
                    </Typography>
                </Link>  
             </li>
             <li>
                <Link href="/ChangeAdminSingupCode">
                    <Typography variant="h6"
                                component="div" 
                                sx={{  color:'white',
                                       flexGrow: 1 ,
                                       marginLeft:15
                                       }}>
                    Change SignUp Code
                    </Typography>
                </Link>  
             </li>
             
          </ul>   
        </Paper> 
    

  )
}
export  function AdminManagerSignup(){

     const [adminSignup,setAdminSignup]=useState({
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
            whereYouBorn:"",
            yourPrimarySchoolName:"",
            yourNickname:"",
            yourFatherFullName:"",
     });
    const onchange=((e)=>{
      setAdminSignup({...adminSignup,[e.target.name]:e.target.value});
    });
    const [dbSignal,setDbSignal]=useState({
      signal:''
    });
   const submitForm=((e)=>{
            e.preventDefault();
            if(adminSignup.confirmPassword===adminSignup.password){
              const encryptedPassword=CryptoJS.AES.encrypt(JSON.stringify(adminSignup.password), "my-secret-key").toString()
            const sendData={
                  name:adminSignup.name,
                  email:adminSignup.email,
                  password:encryptedPassword,
                  whereYouBorn:adminSignup.whereYouBorn,
                  yourPrimarySchoolName:adminSignup.yourPrimarySchoolName,
                  yourNickname:adminSignup.yourNickname,
                  yourFatherFullName:adminSignup.yourFatherFullName
            };
            
             if(((sendData.name!=="")&&
            (sendData.email!=="")&&
            (sendData.password!=="")&&
            (sendData.confirmPassword!=="")&&
            (sendData.whereYouBorn!=="")&&
            (sendData.yourPrimarySchoolName!=="")&&
            (sendData.yourNickname!=="")&&
            (sendData.yourFatherFullName!=="")
            )
            )
            {  if((dbSignal.signal!==null)&&(dbSignal.signal==='memory full')){
              document.getElementById('signupConfirmation').style.marginTop='1px'; 
              document.getElementById('signupConfirmation').style.color='red';      
              document.getElementById('signupConfirmation').innerHTML=dbSignal.signal;
            }
            else if((dbSignal.signal!==null)&&(dbSignal.signal==='Signup successfully')){
              document.getElementById('signupConfirmation').style.marginTop='1px'; 
              document.getElementById('signupConfirmation').style.color='green';
              document.getElementById('signupConfirmation').innerHTML=dbSignal.signal;
      
            }

            }
            
            axios.post("http://localhost/react-db/admin_manager/admin_signup.php",sendData)
            .then((response)=>{
                  setDbSignal({
                    signal:response.data.signal,
                  })
            })
   }
  else{
    document.getElementById('confirmPassword').style.marginTop='1px';
    document.getElementById('confirmPassword').innerHTML="does't match";
  }
  }
   ); 
   return(
  
  <Box>
    <AdminManagerSignupHeader/>
        <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:550
                     }} >
                       <ul style={{
                                    display:'inline-flex',
                                    listStyleType:'none'
                                    }}> 
                        <li>
                                <img  
                                    src='https://th.bing.com/th/id/OIP.DNO1JjZ2wjd6tK2hMrSPgwHaCm?pid=ImgDet&rs=1'
                                    style={{
                                            width:'300px',
                                            marginTop:'50px',
                                            marginLeft:'200px',
                                            }}
                                    /> 
                        </li>
                        <li>
                                <img  
                                    src='https://th.bing.com/th/id/OIP.b1coQrHq3O1bzAUczFhZfwAAAA?pid=ImgDet&w=416&h=416&rs=1'
                                    style={{
                                            width:'300px',
                                            marginTop:'200px',
                                            marginLeft:'-300px',
                                            }}
                                    /> 
                        </li>
                        <li>
                        <form onSubmit={submitForm}> 
                                <Paper elevation={9}
                                            sx={{
                                                flexGrow: 1,
                                                marginLeft:15,
                                                height:400,
                                                width:500,
                                                marginTop:8
                                                }} >
                                    <li  style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}> 
                                    <TextField     style={{
                                                           marginTop:'19px',
                                                           marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="Name"
                                                      type="text"
                                                      name="name" 
                                                      value={adminSignup.name}
                                                      onChange={onchange}    
                                                      variant="filled"
                                          />
                                       <TextField     style={{
                                                           marginTop:'19px',
                                                           marginLeft:'25px'
                                                         }} 
                                                      required   
                                                      label="Email"
                                                      type="email"
                                                      name="email"
                                                      onChange={onchange}
                                                      value={adminSignup.email}
                                                      variant="filled"
                                          />
                                    </li>
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                      <TextField     style={{
                                                               marginTop:'15px',
                                                               marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="Password"
                                                      type="password"
                                                      name="password" 
                                                      onChange={onchange}
                                                      value={adminSignup.password}
                                                      variant="filled"
                                          />                 
                                     <TextField     style={{
                                                             marginTop:'15px',
                                                             marginLeft:'25px'
                                                         }} 
                                                      required
                                                      label="Confirm Password"
                                                      type="password"
                                                      name="confirmPassword"
                                                      onChange={onchange}
                                                      value={adminSignup.confirmPassword}
                                                      variant="filled"
                                          />    
                                           
                                    </li>
                                    <li>
                                         <h1
                                            id="confirmPassword"
                                            style={
                                            {
                                            color:'red',
                                            fontSize:'16px',
                                            marginLeft:'70px'
                                            }
                                            }>
                                          </h1>
                                    </li>
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                        <TextField     style={{
                                                              marginTop:'5px',
                                                              marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="Your Nickname"
                                                      name="yourNickname"
                                                      type="text"
                                                      onChange={onchange}
                                                      value={adminSignup.yourNickname}
                                                      variant="filled"
                                          />
                                       <TextField     style={{
                                                            marginTop:'5px',
                                                            marginLeft:'25px'
                                                         }} 
                                                      required
                                                      label="Your Father Full Name"
                                                      name="yourFatherFullName"
                                                      type="text"
                                                      onChange={onchange}
                                                      value={adminSignup.yourFatherFullName}
                                                      variant="filled"
                                          />
                                    </li>    
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                         <TextField     style={{
                                                              marginTop:'15px',
                                                            marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="Primary School Name"
                                                      name="yourPrimarySchoolName"
                                                      type="text"
                                                      onChange={onchange}
                                                      value={adminSignup.yourPrimarySchoolName}
                                                      variant="filled"
                                          />
                                         <TextField     style={{
                                                              marginTop:'15px',
                                                            marginLeft:'25px'
                                                         }} 
                                                      required   
                                                      label="Where You Born"
                                                      type="text" 
                                                      name="whereYouBorn"
                                                      onChange={onchange}
                                                      value={adminSignup.whereYouBorn}
                                                      variant="filled"
                                          /> 
                                           
                                    </li> 
                                    <li>
                                           <h1
                                                id="signupConfirmation"
                                                style={
                                                {
                                                color:'green',
                                                fontSize:'16px',
                                                marginLeft:'70px'
                                                }
                                                }>
                                           </h1>  
                                    </li>  
                                    
                                  
                                     <Button  type='submit' 
                                              variant="contained" 
                                              style={{  backgroundColor:'green',
                                                         marginLeft:'160px',
                                                         width:'180px',
                                                         marginTop:'10px'
                                                      }} >
                                              
                                             SignUp
                                    </Button>                   
                                </Paper>
                            </form>     
                        </li>
                     </ul>          
         </Paper>  

  </Box>  

   );
}
export  function AdminManagerPage(){
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
          Admin Manager 
      </Typography>              
   </li>
   <li>
      <Link href="/AdminManagerAssignRegister">
          <Typography variant="h6"
                      component="div"
                       sx={{ color:'white',
                             flexGrow: 1 ,
                             marginLeft:15
                             }}>
         Assign Register
          </Typography>
      </Link>  
   </li>
   <li>
      <Link href="/AdminManagerAssignVisitor">
          <Typography variant="h6"
                      component="div" 
                      sx={{  color:'white',
                             flexGrow: 1 ,
                             marginLeft:15
                             }}>
          Assign Visitor
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
          Dash Board
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
                    src='https://th.bing.com/th/id/OIP.b1coQrHq3O1bzAUczFhZfwAAAA?pid=ImgDet&w=416&h=416&rs=1'
                    style={{
                            width:'500px',
                            marginLeft:'400px',
                            }}
                 />       

</Paper>
</Box> 
 );
}
export function AdminManagerAssignRegister(){
  const [register,setRegister]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    recoveryCode:"",
  });

  const onchange=((e)=>{
    setRegister({...register,[e.target.name]:e.target.value});
  });

  const [dbSignal,setDbSignal]=useState({
    signal:''
  });

  const submitForm=((e)=>{
    e.preventDefault();
   if(register.confirmPassword===register.password){
      const encryptedPassword=CryptoJS.AES.encrypt(JSON.stringify(register.password), "my-secret-key").toString();
      const encryptedRecoveryCode=CryptoJS.AES.encrypt(JSON.stringify(register.recoveryCode), "my-secret-key").toString();
     
  const sendData={
          name:register.name,
          email:register.email,
          password:encryptedPassword,
          recoveryCode:encryptedRecoveryCode
      };

      if(((sendData.name!=="")&&
          (sendData.email!=="")&&
          (sendData.password!=="")&&
          (sendData.confirmPassword!=="")&&
          (sendData.recoveryCode!=="")
          )
          )
      {  
        if((dbSignal.signal!==null)&&(dbSignal.signal==='memory full')){

              document.getElementById('signupConfirmation').style.marginTop='1px';
              document.getElementById('signupConfirmation').style.color='red';
              document.getElementById('signupConfirmation').innerHTML=dbSignal.signal;
        }
      else{
              document.getElementById('signupConfirmation').style.color='green';
              document.getElementById('signupConfirmation').style.marginTop='1px';
              document.getElementById('signupConfirmation').innerHTML=dbSignal.signal;

        }

           }
 
      axios.post("http://localhost/react-db/admin_manager/register_signup.php",sendData)
        .then((response)=>{
          setDbSignal({
            signal:response.data.signal,
          })
          console.log(response.data);   
        })
           }
  else{
          document.getElementById('confirmPassword').style.marginTop='1px';
          document.getElementById('confirmPassword').innerHTML="does't match";
      }
  }
);

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
          Admin Manager 
      </Typography>              
   </li>
   <li>
      <Link href="/AdminManagerAssignRegister">
          <Typography variant="h6"
                      component="div"
                       sx={{ color:'white',
                             flexGrow: 1 ,
                             marginLeft:15
                             }}>
         Assign Register
          </Typography>
      </Link>  
   </li>
   <li>
      <Link href="/AdminManagerAssignVisitor">
          <Typography variant="h6"
                      component="div" 
                      sx={{  color:'white',
                             flexGrow: 1 ,
                             marginLeft:15
                             }}>
          Assign Visitor
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
          Dash Board
          </Typography>
      </Link>  
   </li>
   
</ul>   
</Paper>
        <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:550
                     }} >
                       <ul style={{
                                    display:'inline-flex',
                                    listStyleType:'none'
                                    }}> 
                        <li>
                                <img  
                                    src='https://th.bing.com/th/id/OIP.DNO1JjZ2wjd6tK2hMrSPgwHaCm?pid=ImgDet&rs=1'
                                    style={{
                                            width:'300px',
                                            marginTop:'50px',
                                            marginLeft:'200px',
                                            }}
                                    /> 
                        </li>
                        <li>
                                <img  
                                    src='https://th.bing.com/th/id/OIP.b1coQrHq3O1bzAUczFhZfwAAAA?pid=ImgDet&w=416&h=416&rs=1'
                                    style={{
                                            width:'300px',
                                            marginTop:'200px',
                                            marginLeft:'-300px',
                                            }}
                                    /> 
                        </li>
                        <li>
                        <img     
                                    src={registerImage}
                                    style={{
                                            width:'250px',
                                            marginTop:'130px',
                                            marginLeft:'-160px',
                                            }}
                                    />
                        </li>
                        <li>
                        <form onSubmit={submitForm}> 
                                <Paper elevation={9}
                                            sx={{
                                                flexGrow: 1,
                                                marginLeft:15,
                                                height:300,
                                                width:500,
                                                marginTop:14
                                                }} >
                                    <li  style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}> 
                                    <TextField     style={{
                                                           marginTop:'19px',
                                                           marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="Name"
                                                      placeholder="Name"
                                                      name="name" 
                                                      type="text"
                                                      value={register.name}
                                                      onChange={onchange}
                                                      variant="filled"
                                          />
                                       <TextField     style={{
                                                           marginTop:'19px',
                                                           marginLeft:'25px'
                                                         }} 
                                                      required  
                                                      name="email"
                                                      type="email"
                                                      onChange={onchange}
                                                      value={register.email} 
                                                      label="Email"
                                                      variant="filled"
                                          />
                                    </li>
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                      <TextField     style={{
                                                               marginTop:'15px',
                                                               marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="Password"
                                                      type="password"
                                                      name="password" 
                                                      onChange={onchange}
                                                      value={register.password}
                                                      variant="filled"
                                          />                 
                                     <TextField     style={{
                                                             marginTop:'15px',
                                                             marginLeft:'25px'
                                                         }} 
                                                      required
                                                      label="Confirm Password"
                                                      type="password"
                                                      name="confirmPassword"
                                                      onChange={onchange}
                                                      value={register.confirmPassword}
                                                      variant="filled"
                                          />    
                                           
                                    </li>
                                    <li>
                                         <h1
                                            id="confirmPassword"
                                            style={
                                            {
                                            color:'red',
                                            fontSize:'16px',
                                            marginLeft:'90px'
                                            }
                                            }>
                                          </h1>
                                    </li>
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                        <TextField     style={{
                                                              marginTop:'5px',
                                                              marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="recoveryCode"
                                                      name="recoveryCode"
                                                      type="password"
                                                      onChange={onchange}
                                                      value={register.recoveryCode}
                                                      variant="filled"
                                          />
                                       <h1
                                                id="signupConfirmation"
                                                style={
                                                {
                                                color:'green',
                                                fontSize:'16px',
                                                marginLeft:'70px'
                                                }
                                                }>
                                       </h1>
                                    </li>    
                                    
                                     <Button  type='submit' 
                                              variant="contained" 
                                              style={{  backgroundColor:'green',
                                                         marginLeft:'160px',
                                                         width:'180px',
                                                         marginTop:'20px'
                                                      }} >
                                              
                                             SignUp
                                    </Button>                   
                                </Paper>
                            </form>     
                        </li>
                     </ul>          
         </Paper>  

  </Box>             
  );
}

export function AdminManagerAssignVisitor(){
  const [Visitor,setVisitor]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    recoveryCode:"",
  });

  const onchange=((e)=>{
    setVisitor({...Visitor,[e.target.name]:e.target.value});
  });

  const [dbSignal,setDbSignal]=useState({
    signal:''
  });

  const submitForm=((e)=>{
    e.preventDefault();
 if(Visitor.confirmPassword===Visitor.password){
      const encryptedPassword=CryptoJS.AES.encrypt(JSON.stringify(Visitor.password), "my-secret-key").toString();
      const encryptedRecoveryCode=CryptoJS.AES.encrypt(JSON.stringify(Visitor.recoveryCode), "my-secret-key").toString();
     
  const sendData={
          name:Visitor.name,
          email:Visitor.email,
          password:encryptedPassword,
          recoveryCode:encryptedRecoveryCode
      };

      if(((sendData.name!=="")&&
          (sendData.email!=="")&&
          (sendData.password!=="")&&
          (sendData.confirmPassword!=="")&&
          (sendData.recoveryCode!=="")
          )
          )
      {  if((dbSignal.signal!==null)&&(dbSignal.signal==='memory full')){

              document.getElementById('signupConfirmation').style.marginTop='1px';
              document.getElementById('signupConfirmation').style.color='red';
              document.getElementById('signupConfirmation').innerHTML=dbSignal.signal;
        }
      else{   
              document.getElementById('signupConfirmation').style.marginTop='1px';
              document.getElementById('signupConfirmation').style.color='green';
              document.getElementById('signupConfirmation').innerHTML=dbSignal.signal;

        }

           }
 
           axios.post("http://localhost/react-db/admin_manager/visitor_singup.php",sendData)
           .then((response)=>{
             setDbSignal({
               signal:response.data.signal,
             })
           })
           }
  else{
          document.getElementById('confirmPassword').style.marginTop='1px';          
          document.getElementById('confirmPassword').innerHTML="does't match";
      }
  }
   ); 
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
          Admin Manager 
      </Typography>              
   </li>
   <li>
      <Link href="/AdminManagerAssignRegister">
          <Typography variant="h6"
                      component="div"
                       sx={{ color:'white',
                             flexGrow: 1 ,
                             marginLeft:15
                             }}>
         Assign Register
          </Typography>
      </Link>  
   </li>
   <li>
      <Link href="/AdminManagerAssignVisitor">
          <Typography variant="h6"
                      component="div" 
                      sx={{  color:'white',
                             flexGrow: 1 ,
                             marginLeft:15
                             }}>
          Assign Visitor
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
          Dash Board
          </Typography>
      </Link>  
   </li>
   
</ul>   
</Paper>
        <Paper  elevation={2}
                sx={{marginTop:0.5,
                     flexGrow: 1,
                     height:550
                     }} >
                       <ul style={{
                                    display:'inline-flex',
                                    listStyleType:'none'
                                    }}> 
                        <li>
                                <img  
                                    src='https://th.bing.com/th/id/OIP.DNO1JjZ2wjd6tK2hMrSPgwHaCm?pid=ImgDet&rs=1'
                                    style={{
                                            width:'300px',
                                            marginTop:'50px',
                                            marginLeft:'200px',
                                            }}
                                    /> 
                        </li>
                        
                        <li>
                                <img  
                                    src='https://th.bing.com/th/id/OIP.b1coQrHq3O1bzAUczFhZfwAAAA?pid=ImgDet&w=416&h=416&rs=1'
                                    style={{
                                            width:'300px',
                                            marginTop:'200px',
                                            marginLeft:'-300px',
                                            }}
                                    /> 
                        </li>
                        <li>
                        <img     
                                    src={visitorImage}
                                    style={{
                                            width:'250px',
                                            marginTop:'130px',
                                            marginLeft:'-160px',
                                            }}
                                    />
                        </li>
                        <li>
                        <form onSubmit={submitForm}> 
                                <Paper elevation={9}
                                            sx={{
                                                flexGrow: 1,
                                                marginLeft:15,
                                                height:300,
                                                width:500,
                                                marginTop:14
                                                }} >
                                    <li  style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}> 
                                    <TextField     style={{
                                                           marginTop:'19px',
                                                           marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="Name"
                                                      placeholder="Name"
                                                      name="name" 
                                                      type="text"
                                                      value={Visitor.name}
                                                      onChange={onchange}
                                                      variant="filled"
                                          />
                                       <TextField     style={{
                                                           marginTop:'19px',
                                                           marginLeft:'25px'
                                                         }} 
                                                      required  
                                                      name="email"
                                                      type="email"
                                                      onChange={onchange}
                                                      value={Visitor.email} 
                                                      label="Email"
                                                      variant="filled"
                                          />
                                    </li>
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                      <TextField     style={{
                                                               marginTop:'15px',
                                                               marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="Password"
                                                      type="password"
                                                      name="password" 
                                                      onChange={onchange}
                                                      value={Visitor.password}
                                                      variant="filled"
                                          />                 
                                     <TextField     style={{
                                                             marginTop:'15px',
                                                             marginLeft:'25px'
                                                         }} 
                                                      required
                                                      label="Confirm Password"
                                                      type="password"
                                                      name="confirmPassword"
                                                      onChange={onchange}
                                                      value={Visitor.confirmPassword}
                                                      variant="filled"
                                          />    
                                           
                                    </li>
                                    <li>
                                         <h1
                                            id="confirmPassword"
                                            style={
                                            {
                                            color:'red',
                                            fontSize:'16px',
                                            marginLeft:'90px'
                                            }
                                            }>
                                          </h1>
                                    </li>
                                    <li style={{
                                                display:'inline-flex',
                                                listStyleType:'none'
                                                }}>
                                        <TextField     style={{
                                                              marginTop:'5px',
                                                              marginLeft:'30px'
                                                         }} 
                                                      required   
                                                      label="recoveryCode"
                                                      name="recoveryCode"
                                                      type="password"
                                                      onChange={onchange}
                                                      value={Visitor.recoveryCode}
                                                      variant="filled"
                                          />
                                       <h1
                                                id="signupConfirmation"
                                                style={
                                                {
                                                color:'green',
                                                fontSize:'16px',
                                                marginLeft:'70px'
                                                }
                                                }>
                                       </h1>
                                    </li>    
                                    
                                     <Button  type='submit' 
                                              variant="contained" 
                                              style={{  backgroundColor:'green',
                                                         marginLeft:'160px',
                                                         width:'180px',
                                                         marginTop:'20px'
                                                      }} >
                                              
                                             SignUp
                                    </Button>                   
                                </Paper>
                            </form>     
                        </li>
                     </ul>          
         </Paper>  

  </Box>  
  );
}
