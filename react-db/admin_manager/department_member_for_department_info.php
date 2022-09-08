<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

$searchedData=$data->searchedData;
$conn = mysqli_connect("localhost:3306", "root", "", "registration_form");

$sql="SELECT first_name,middle_name,last_name FROM `registration` where ((department_name='$searchedData')||(department_manager='$searchedData')) ";

$result=mysqli_query($conn,$sql);

if($result){
    echo '[';
    for ($i=0; $i < mysqli_num_rows($result); $i++) { 
        
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result) );   
      }
   echo ']';
}


    mysqli_close($conn);   

?>