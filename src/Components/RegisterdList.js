import axios from 'axios';
import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Header from './Header';

import {
  Box,
  Button,

} from "@mui/material";

import "./list.css";
class RegisterdList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [""] };
    this.headers = [
      { key: "first_name", label: "first_name" },
      { key: "middle_name", label: "middle_name" },
      { key: "last_name", label: "last_name" },
      { key: "email_address", label: "email_address" },
      { key: "phone_number", label: "phone_number" },
      { key: "age", label: "age" },
      { key: "sex", label: "sex" },
      { key: "martial_status", label: "martial_status" },
      { key: "education", label: "education" },
      { key: "department_name", label: "department_name" },
      { key: "department_manager", label: "department_manager" },
      { key: "date", label: "Date" },
    ];
  }
  componentDidMount() {
    const url = "http://localhost/reactServer/list.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }
   delete = (email_address) => {
        axios
          .post(`http://localhost/reactServer/delete.php`,{email_address})
          .then(function (response) {
            console.log(response.data);
            
          });
}

  render() {
    return (
      <>
      <Header/>
      <Box
        sx={{
          my: 9,
          mx: "auto",
          px: 6.25,
          pb: 100,
          zIndex: "tooltip",
          width: "1200px",
        }}
      > 
        <h1>Rgisterd_List</h1>
        <TableContainer>
          <Table sx={{ maxWidth: 400 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {this.headers.map(function (h) {
                  return <TableCell key={h.key}>{h.label}</TableCell>;
                })}
                <TableCell> Actions </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map(
                function my(item, i) {
                  return (
                    <TableRow key={i}>
                      <TableCell>{item.first_name} </TableCell>
                      <TableCell>{item.middle_name} </TableCell>
                      <TableCell>{item.last_name} </TableCell>
                      <TableCell>{item.email_address} </TableCell>
                      <TableCell>{item.phone_number} </TableCell>
                      <TableCell>{item.age} </TableCell>
                      <TableCell>{item.sex} </TableCell>
                      <TableCell>{item.martial_status} </TableCell>
                      <TableCell>{item.education} </TableCell>
                      <TableCell>{item.department_name} </TableCell>
                      <TableCell>{item.department_manager} </TableCell>
                      <TableCell>{item.date} </TableCell>
                      <TableCell>
                        <Button variant="outlined" href="/update">
                          Update
                        </Button>
                        &nbsp;
                        <Button
                          variant="contained"
                          type="submit"
                          color="warning"
                          sx={{
                            maxWidth: 80,
                            mr: 2,
                            mt: 3.5,
                            mb: 5,
                            fontFamily: "sans-serif",
                          }}
                          onClick={(e) => this.delete(item.email_address)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                }.bind(this)
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </>
    );
  }
}
export default RegisterdList;