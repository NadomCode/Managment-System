import React from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import Header from './Header';

class UpdateDep extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeDepartment_Name = this.onChangeDepartment_Name.bind(this);
    this.onChangeDepartment_Manager =
      this.onChangeDepartment_Manager.bind(this);
    this.onChangeDepartment_Description =
      this.onChangeDepartment_Description.bind(this);

    this.state = {
      department_name: "",
      department_manager: "",
      department_description: "",
      
    };
  }
  onChangeDepartment_Name(e) {
    this.setState({
      department_name: e.target.value,
    });
  }
  onChangeDepartment_Manager(e) {
    this.setState({
      department_manager: e.target.value,
    });
  }
  onChangeDepartment_Description(e) {
    this.setState({
      department_description: e.target.value,
    });
  }
 

  handleSubmit = (e) => {
    e.preventDefault();
    const department = {
      department_name: this.state.department_name,
      department_manager: this.state.department_manager,
      department_description: this.state.department_description,
    };
    console.log(department);
    axios
      .post(`http://localhost/reactServer/update_dep.php`, department)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <>
      <Header/>
      <Box
        component="form"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          display: "flex",
          flexDirection: "column",
          boxShadow: 16,
          my: 3,
          mx: "auto",
          px: 6.25,
          zIndex: "tooltip",
          width: "470px",
        }}
        onSubmit={this.handleSubmit}
      > 
        <h1>Update_Department</h1>
        <TextField
          id="department_name"
          type="name"
          name="department_name"
          label="Department_Name"
          variant="filled"
          margin="normal"
          placeholder="Department_Name"
          required="true"
          value={this.state.department_name}
          onChange={this.onChangeDepartment_Name}
        />

        <br></br>
        <TextField
          id="department_manager"
          type="name"
          name="department_manager"
          label="Department_Manager"
          variant="filled"
          margin="normal"
          placeholder="Department_Manager"
          required="true"
          value={this.state.department_manager}
          onChange={this.onChangeDepartment_Manager}
        />

        <TextField
          id="department_descripton"
          type="name"
          name="department_description"
          label="Department_Description"
          variant="filled"
          margin="normal"
          placeholder="Department_Description"
          required="true"
          value={this.state.department_description}
          onChange={this.onChangeDepartment_Description}
        />
       
        <br></br>
        <br></br>
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          sx={{
            maxWidth: 150,
            mt: 2,
            mb: 5,
            fontFamily: "sans-serif",
          }}
        >
         Update
        </Button>
      </Box>
      </>
    );
  }
}
export default UpdateDep;
