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
class DepartmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [""] };
    this.headers = [
      { key: "department_name", label: "department_name" },
      { key: "department_manager", label: "department_manager" },
      { key: "department_manager", label: "department_description" },
      { key: "date", label: "Date_Of_registered"},
    ];
  }
  componentDidMount() {
    const url = "http://localhost/reactServer/list_dep.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }
   delete = (department_name) => {
        axios
          .post(`http://localhost/reactServer/delete_dep.php`,{department_name})
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
          pb:100,
          zIndex: "tooltip",
          width: "1000px",
        }}
      >
       
        <h1>Department_List</h1>
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
                      <TableCell>{item.department_name} </TableCell>
                      <TableCell>{item.department_manager} </TableCell>
                      <TableCell>{item.department_description} </TableCell>
                      <TableCell>{item.date} </TableCell>
                      <TableCell>
                        <Button variant="outlined" href="/update_dep">
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
                          onClick={(e) => this.delete(item.department_name)}
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
export default DepartmentList;