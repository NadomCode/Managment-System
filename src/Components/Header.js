import React from "react";
import { Tab, Tabs } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HomeIcon from "@mui/icons-material/Home";
import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import TableViewIcon from "@mui/icons-material/TableView";
class Header extends React.Component{
  render(){
   return (
     <Tabs style={{backgroundColor:'blue'}}
       indicatorColor="secondary"
       textColor="primary"
       variant="fullWidth"
       aria-label="icon tabs example"
     >
       <Tab icon={<HomeIcon />} style={{color:'white'}} label="Registration_Home" href="/home" />
       <Tab  style={{color:'white'}}
         icon={<AppRegistrationIcon />}
         label="Registration_Form"
         href="/registration"
       />
       <Tab style={{color:'white'}}
         icon={<ListAltTwoToneIcon />}
         label="Registered_List"
         href="/lists"
       />
       <Tab style={{color:'white'}}
         icon={<SchoolRoundedIcon />}
         label="Department"
         href="/department"
       />
       <Tab style={{color:'white'}}
         icon={<TableViewIcon />}
         label="Department_List"
         href="/department_list"
       />
     </Tabs>
   );
  }
   }
export default Header;
