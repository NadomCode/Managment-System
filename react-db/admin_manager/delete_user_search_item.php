<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

$deleteItem = json_decode(file_get_contents("php://input"));
$deleteEmail=$deleteItem->email;
$conn = mysqli_connect("localhost:3306", "root", "", "registration_form");
$sql="DELETE FROM `registration` WHERE email_address='$deleteEmail'";
$result=mysqli_query($conn,$sql);

if($result){
   echo 'item deleted';
}
else{
    echo 'not deleted';
}


    mysqli_close($conn);   

?>