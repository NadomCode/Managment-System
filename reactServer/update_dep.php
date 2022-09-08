<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

// Create connection

$hostname="localhost:3306";
$username= "root";
$password="";
$database="registration_form";

$conn= mysqli_connect($hostname, $username, $password,$database);


$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
$data = json_decode($postdata);
$department_name=$data ->department_name;
$department_manager=$data ->department_manager;
$department_description=$data ->department_description;

if(($department_name)&& ($department_manager)&& ($department_description)){

$sql = "UPDATE `department` SET department_name='$department_name',department_manager='$department_manager',department_description='$department_description' WHERE department_name='$department_name'";
$result=mysqli_query($conn,$sql);

if($result){
  
  echo "working";
}
else{
 
  echo "not working";
}
}}
mysqli_close($conn);   
?>