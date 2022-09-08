import React from "react";
import image from "./RegistrationPage.png";
import Header from './Header';
import { Typography } from "@mui/material";
class Home extends React.Component{
    render(){
            
        return (
          <div
          >
            <Header/>
            
            <ul style={{
                                display:"block",
                                listStyleType:'none'
                                }}> 
            <li>
            <Typography variant="button"
                            sx={{   color:'blue',
                                    flexGrow: 1,
                                    fontSize:25,
                                    marginTop:0.5,
                                    marginLeft:50
                                    }}>
                    WELCOME TO REGISTRATION
                </Typography>
            </li>                   
            <li>
              
            <img src="https://www.bu.edu/bmegsc/files/2020/01/profDevelop-vector-636x636.jpg"
                 style={{
                        marginTop:'1px',
                        width:'550px',
                        height:'400px',
                        marginLeft:'320px'
                 }}
            >
            </img>
            </li>
                              
            </ul>
          </div>

        );
    }
}
export default Home;