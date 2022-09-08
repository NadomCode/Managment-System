import React from "react";
import axios from "axios";
import {
  Box,
  Button,
  Select,
  MenuItem,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  TextField,
  FormControl, 
  InputLabel,
} from "@mui/material";
import Header from './Header';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeFirst_name = this.onChangeFirst_name.bind(this);
    this.onChangeMiddle_name = this.onChangeMiddle_name.bind(this);
    this.onChangeLast_name = this.onChangeLast_name.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangAge = this.onChangeAge.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangeMartial_status = this.onChangeMartial_status.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onChangeDepartment_name = this.onChangeDepartment_name.bind(this);
    this.onChangeDepartment_manager =
    this.onChangeDepartment_manager.bind(this);

    this.state = {
      first_name: "",
      middle_name: "",
      last_name: "",
      email_address: "",
      phone_number: "",
      age: "",
      sex: "",
      martial_status: "",
      education: "",
      department_name: "",
      department_manager: "",
      date: new Date(),
    };
  }
  onChangeFirst_name(e) {
    this.setState({
      first_name: e.target.value,
    });
  }
  onChangeMiddle_name(e) {
    this.setState({
      middle_name: e.target.value,
    });
  }
  onChangeLast_name(e) {
    this.setState({
      last_name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email_address: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone_number:
        e.target.value < 0 || e.target.value > [11]
          ? (e.target.value = "")
          : e.target.value,
    });
  }
  onChangeAge(e) {
    this.setState({
      age:
        e.target.value < 0 || e.target.value > 120
          ? (e.target.value = "")
          : e.target.value,
    });
  }
  onChangeSex(e) {
    this.setState({
      sex: e.target.value,
    });
  }
  onChangeMartial_status(e) {
    this.setState({
      martial_status: e.target.value,
    });
  }
  onChangeEducation(e) {
    this.setState({
      education: e.target.value,
    });
  }

  onChangeDepartment_name(e) {
    this.setState({
      department_name: e.target.value,
    });
  }
  onChangeDepartment_manager(e) {
    this.setState({
      department_manager: e.target.value,
    });
  }

  handleDatechange(event, CrDate) {
    this.setState({ CrDate: CrDate });
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      email_address: this.state.email_address,
      phone_number: this.state.phone_number,
      age: this.state.age,
      sex: this.state.sex,
      martial_status: this.state.martial_status,
      education: this.state.education,
      department_name: this.state.department_name,
      department_manager: this.state.department_manager,
     
    };
    console.log(user);
    axios
      .post(`http://localhost/reactServer/registration.php`, user)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <div>
        <Header/>
        <Box
          component="form"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: 16,
            color: "primary.main",
            my: 3,
            mx: "auto",
            px: 6.25,
            zIndex: "tooltip",
            width: "470px",
          }}
          onSubmit={this.handleSubmit}
        > 
          <h1>WELCOME_TO_REGISTRATION</h1>

          <TextField
            id="first_name"
            type="name"
            name="first_name"
            label="First Name"
            variant="standard"
            margin="normal"
            required="true"
            value={this.state.first_name}
            onChange={this.onChangeFirst_name}
          />

          <TextField
            id="middle_name"
            type="name"
            name="middle_name"
            label="Middle Name"
            variant="standard"
            margin="normal"
            placeholder="Middle_Name"
            required="true"
            value={this.state.middle_name}
            onChange={this.onChangeMiddle_name}
          />
          <TextField
            id="last_name"
            type="name"
            name="last_name"
            label="Last Name"
            variant="standard"
            margin="normal"
            placeholder="Last_Name"
            required="true"
            value={this.state.last_name}
            onChange={this.onChangeLast_name}
          />
          <TextField
            type="email"
            label=" Email_Address"
            name="email_address"
            variant="standard"
            margin="normal"
            placeholder="Email_address"
            required="true"
            value={this.state.email_address}
            onChange={this.onChangeEmail}
          />
          <TextField
            type="number"
            label="phone_numbe"
            name="phone_number"
            variant="standard"
            margin="normal"
            placeholder="Phone_Number"
            required="true"
            value={this.state.phone_number}
            onChange={this.onChangePhone}
          />
          <TextField
            type="number"
            label="Age"
            name="age"
            variant="standard"
            margin="normal"
            placeholder="age"
            required="true"
            value={this.state.age}
            onChange={this.onChangAge}
          />
          <br></br>
          <br></br>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              defaultValue="female"
              value={this.state.sex}
              onChange={this.onChangeSex}
              required="true"
              name="sex"
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <br></br>
          <br></br>
          <FormControl>
            <FormLabel>Martial_Status</FormLabel>
            <RadioGroup
              defaultValue="unmarried"
              value={this.state.martial_status}
              onChange={this.onChangeMartial_status}
              required="true"
              name="martial_status"
            >
              <FormControlLabel
                value="married"
                control={<Radio />}
                label="Married"
              />
              <FormControlLabel
                value="unmarrid"
                control={<Radio />}
                label="Unmarried"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <br></br>
          <br></br>
          <FormControl>
            <InputLabel> Education</InputLabel>
            <Select
              name="education"
              label="Department_Name"
              variant="outlined"
              margin="none"
              defaultValue="none"
              required="true"
              sx={{ minWidth: 450 }}
              placeholder="Education"
              value={this.state.education}
              onChange={this.onChangeEducation}
            >
              <MenuItem value="none" disabled>
                {" "}
                none{" "}
              </MenuItem>
              <MenuItem value="under_graduate">under_graduate</MenuItem>
              <MenuItem value="bachlor_degree">bachelor_degree</MenuItem>
              <MenuItem value="post_graduate">post_graduate</MenuItem>
              <MenuItem value="phd">phd</MenuItem>
              <MenuItem value="other">other</MenuItem>
            </Select>
          </FormControl>
          <br></br>
          <TextField
            type="text"
            name="department_name"
            label="Department_Name"
            margin="normal"
            variant="standard"
            placeholder="department_name"
            required="true"
            sx={{ minWidth: 450 }}
            value={this.state.department_name}
            onChange={this.onChangeDepartment_name}
          />
          <br></br>
          <br></br>
          <TextField
            type="string"
            name="department_manager"
            label="Department_Manager"
            margin="normal"
            variant="standard"
            required="true"
            sx={{ minWidth: 450 }}
            placeholder="department_manager"
            value={this.state.department_manager}
            onChange={this.onChangeDepartment_manager}
          />
          <br></br>
          <br></br>
          <TextField
            autoOk={true}
            hintText="Select Date"
            value={this.state.date}
            onChange={this.handleDatechange}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{
              maxWidth: 200,
              mt: 2,
              mb: 6,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Register
          </Button>
        </Box>
      </div>
    );
  }
}
export default RegistrationForm;
