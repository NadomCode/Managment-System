<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods:GET, POST, OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");




include ("connection.php");


$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

$first_name=$request->first_name;
$middle_name=$request ->middle_name;
$last_name=$request ->last_name;
$email_address=$request ->email_address;
$phone_number=$request ->phone_number;
$age=$request ->age;
$sex=$request ->sex;
$martial_status=$request ->martial_status;
$educaion=$request ->education;
$department_name=$request ->department_name;
$department_manager=$request ->department_manager;

if(($first_name) && ($middle_name) && ($last_name) && ($email_address) && ($phone_number) && ($age) && ($sex) && ($martial_status) && ($educaion) && ($department_name)&& ($department_manager)){
  $sql ="INSERT INTO registration(  first_name,middle_name,last_name,email_address,phone_number,age,sex, martial_status, education,department_name,department_manager) 
  VALUES('$first_name','$middle_name','$last_name','$email_address', '$phone_number', '$age','$sex', '$martial_status', '$educaion','$department_name','$department_manager')";

 $result=mysqli_query($con,$sql);
 if($result){
  echo "working.";
 }
 else{
  echo "not working.";
 }
}
}

?>