<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

$conn = mysqli_connect("localhost:3306", "root", "", "registration_form");

$sql="SELECT * FROM `department`";

$result=mysqli_query($conn,$sql);
$department_count=0;
if($result){
     while($row=mysqli_fetch_assoc($result)){
             if(isset($row['department_name'])){
                $department_count++;
             }
     }
}
$obj=['department_count'=>$department_count];
echo json_encode($obj);
    mysqli_close($conn);   

?>