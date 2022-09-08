<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
// Create connection

$conn = mysqli_connect("localhost:3306", "root", "", "admin_manager");
 
// Check connection
if ($conn) {
  echo "Connection successfully: ";
}
else{
echo "Connected failed ";
}
$password=$data->password;
if($password){
$sql = "UPDATE `admin_manager_assign_register` SET password='$password'";
$result=mysqli_query($conn,$sql);

if($result){
  
  echo "working";
}
else{
 
  echo "not working";
}
}
mysqli_close($conn);   
?>