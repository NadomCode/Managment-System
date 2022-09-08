import React from 'react';
import { BrowserRouter ,Route, Routes,Link } from "react-router-dom";
import Login from "./Login";
import {Recovery,VisitorRecovery,RegisterRecovery,AdminManager,AdminManagerPasswordRecovery,VisitorPasswordRecovery,RegisterPasswordRecovery}  from './Recovery';
import {AdminManagerSignup,AdminManagerPage,AdminManagerAssignRegister,AdminManagerAssignVisitor} from './AdminManagerPage';
import RegisterPage from './RegisterPage';
import SearchByUsersInfo from './SearchByUsersInfo';
import SearchByDepartmentInfo from './SearchByDepartmentInfo';
import AdminManagerSignupCode,{AdminSingupPageNavigator,ChangeAdminSingupCode} from './AdminManagerSignupCode';
import {DashBoard} from './DashBoard';
import {VisitorPage,ViewInformation} from './Visitor';
import Update from "./Components/Update";
import RegistrationForm from "./Components/RegistrationForm";
import RegisterdList from "./Components/RegisterdList";
import Home from "./Components/Home";
import Department from "./Components/Department";
import DepartmentList from "./Components/DepartmentList";
import UpdateDep from "./Components/UpdateDep";
function Links(){
  return(
    <>
    
     <BrowserRouter>     
        <Routes>        
                <Route path='/AdminManagerSignup' element={<AdminManagerSignup/>}/>
                <Route path="/"  element={<Login/>}/> 
                <Route path='/Recovery' element={<Recovery/>}/>
                <Route path='/AdminManager' element={<AdminManager/>}/>
                <Route path='/AdminManagerPasswordRecovery' element={<AdminManagerPasswordRecovery/>}/>
                <Route path='/AdminManagerAssignVisitor' element={<AdminManagerAssignVisitor/>}/>
                <Route path='/VisitorPasswordRecovery' element={<VisitorPasswordRecovery/>}/>
                <Route path='/RegisterPasswordRecovery' element={<RegisterPasswordRecovery/>}/>
                <Route path='/AdminManagerAssignRegister' element={<AdminManagerAssignRegister/>}/>
                <Route path='/VisitorRecovery' element={<VisitorRecovery/>}/>
                <Route path='/RegisterRecovery' element={<RegisterRecovery/>}/>
                <Route path='/AdminManagerPage' element={<AdminManagerPage/>}/>
                <Route path='/DashBoard' element={<DashBoard/>}/>
                <Route path='/VisitorPage' element={<VisitorPage/>}/>
                <Route path='/ViewInformation' element={<ViewInformation/>}/>
                <Route path='/RegisterPage' element={<RegisterPage/>}/>
                <Route path='/SearchByDepartmentInfo' element={<SearchByDepartmentInfo/>}/>
                <Route path='/SearchByUsersInfo' element={<SearchByUsersInfo/>}/>
                <Route path='/AdminManagerSignupCode' element={<AdminManagerSignupCode/>}/>
                <Route path='/AdminSingupPageNavigator' element={<AdminSingupPageNavigator/>}/>
                <Route path='/ChangeAdminSingupCode' element={<ChangeAdminSingupCode/>}/>
                <Route path='*' element={<Error/>}/> 
                <Route path="/home" element={<Home />} />
                <Route path="/registration" element={<RegistrationForm />} />
                <Route path="/Lists" element={<RegisterdList />} />
                <Route path="/update" element={<Update />} />
                <Route path="/department" element={<Department />} />
                <Route path="/department_list" element={<DepartmentList />} />
                <Route path="/update_dep" element={<UpdateDep />} />
              
        </Routes>
    </BrowserRouter>
    </>
    );

}
export default Links;
function Error(){
  return(
      <>
      <h1 
        style={
          {
            fontSize:'100px',
            textAlign:'center',
            marginTop:'500px'
            }
            }>
          Error page 404
      </h1>

      </>
  );
}