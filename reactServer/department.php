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
   
   $department_name=$request->department_name;
   $department_manager=$request->department_manager; 
   $department_description=$request->department_description;
   
   
   if($department_name&&$department_manager&&$department_description){
$sql="INSERT INTO department(department_name,department_manager,department_description) VALUES('$department_name','$department_manager','$department_description')";
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