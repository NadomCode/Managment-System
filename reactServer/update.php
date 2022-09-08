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
$first_name=$data->first_name;
$middle_name=$data ->middle_name;
$last_name=$data ->last_name;
$email_address=$data ->email_address;
$phone_number=$data ->phone_number;
$age=$data->age;
$sex=$data->sex;
$martial_status=$data ->martial_status;
$education=$data ->education;
$department_name=$data ->department_name;
$department_manager=$data ->department_manager;

if(($first_name) && ($middle_name) && ($last_name) && ($email_address) && ($phone_number) && ($age) && ($sex) && ($martial_status) && ($education) && ($department_name)&& ($department_manager)){

$sql = "UPDATE `registration` SET first_name='$first_name',middle_name='$middle_name', last_name='$last_name',email_address='$email_address',phone_number='$phone_number',age='$age',sex='$sex',martial_status='$martial_status',education='$education',department_name='$department_name',department_manager='$department_manager' WHERE email_address='$email_address'";
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