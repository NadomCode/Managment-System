<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$conn = mysqli_connect("localhost:3306", "root", "", "admin_manager");

$sql="SELECT `whereYouBorn`,`yourPrimarySchoolName`,`yourNickname`,`yourFatherFullName` FROM `admin_manager_singup`";

$result=mysqli_query($conn,$sql);
if($result){
  $row = mysqli_fetch_assoc($result);
  $whereYouBorn=$row['whereYouBorn'];
  $yourPrimarySchoolName=$row['yourPrimarySchoolName'];
  $yourNickname=$row['yourNickname'];
  $yourFatherFullName=$row['yourFatherFullName'];
 $obj=['whereYouBorn'=>$whereYouBorn,'yourPrimarySchoolName'=>$yourPrimarySchoolName,'yourNickname'=>$yourNickname,'yourFatherFullName'=>$yourFatherFullName];
 echo  json_encode($obj);

}


  
    mysqli_close($conn);   

?>