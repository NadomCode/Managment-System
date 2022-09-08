<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$conn = mysqli_connect("localhost:3306", "root", "", "admin_manager");

$sql="SELECT `recoveryCode` FROM `admin_manager_assign_visitor`";

$result=mysqli_query($conn,$sql);
if($result){
  $row = mysqli_fetch_assoc($result);
  $recoveryCode=$row['recoveryCode'];
 $obj=['recoveryCode'=>$recoveryCode];
 echo  json_encode($obj);

}


  
    mysqli_close($conn);  

?>