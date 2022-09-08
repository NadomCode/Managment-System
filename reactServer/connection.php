<?php 

$hostname="localhost:3306";
$username= "root";
$password="";
$database="registration_form";

$con = mysqli_connect($hostname, $username, $password,$database);
if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}
echo "Connected successfully";
?>