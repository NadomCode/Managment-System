<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods:GET, POST,PUT, OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
$hostname="localhost:3306";
$username= "root";
$password="";
$database="registration_form";

$con = mysqli_connect($hostname, $username, $password,$database);
$email_address="email_address";

$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case 'GET':
        if(isset($_GET['email_address'])){
            $email_address=$_GET['email_address'];
        }
        $sql = "select * from registration".($email_address?" where email_address=$email_address":'');
        break; 
        
          
}
$result = mysqli_query($con,$sql);

if(!$result){
    http_response_code(404);
    die(mysqli_error($con));
}
if($result){
    echo '[';
    for ($i=0; $i < mysqli_num_rows($result); $i++) { 
        
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result) );   
      }
   echo ']';
}
    $con->close(); 
?>