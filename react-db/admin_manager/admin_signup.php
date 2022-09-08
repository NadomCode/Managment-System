<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

$conn = mysqli_connect("localhost:3306", "root", "", "admin_manager");

$name=$data->name;
$email=$data->email;
$password=$data->password;
$whereYouBorn=$data->whereYouBorn;
$yourPrimarySchoolName=$data->yourPrimarySchoolName;
$yourNickname=$data->yourNickname;
$yourFatherFullName=$data->yourFatherFullName;
$check=true;

$selectSql="SELECT * FROM `admin_manager_singup`";

$selectResult=mysqli_query($conn,$selectSql);
if($check){

if($selectResult){
  $row = mysqli_fetch_assoc($selectResult);
   if(is_null($row)){
  if($name && $email && $password  && $whereYouBorn && $yourPrimarySchoolName && $yourNickname && $yourFatherFullName ){

    $sql="INSERT INTO `admin_manager_singup`(`name`, `email`, `password`,`whereYouBorn`, `yourPrimarySchoolName`, `yourNickname`, `yourFatherFullName`) VALUES ('$name','$email','$password','$whereYouBorn','$yourPrimarySchoolName','$yourNickname','$yourFatherFullName')";
    
    $result=mysqli_query($conn,$sql);
      if($result){
         $signal='Signup successfully';
         echo json_encode(['signal'=>$signal]);
      }
      $check=false;
      
    }
  }

}
}
if($check){
  $signal='memory full';
  echo json_encode(['signal'=>$signal]);
}
mysqli_close($conn);   
?>