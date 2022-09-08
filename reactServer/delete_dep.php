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


$deleteItem  = file_get_contents("php://input");
if(isset($deleteItem ) && !empty($deleteItem )){

$data = json_decode($deleteItem );

$deleteDepartment=$data->department_name;

$sql="DELETE FROM `department` WHERE department_name='$deleteDepartment'";
$result=mysqli_query($conn,$sql);

if($result){
   echo 'item deleted';
}
else{
    echo 'not deleted';
}

}
    mysqli_close($conn);   

?>