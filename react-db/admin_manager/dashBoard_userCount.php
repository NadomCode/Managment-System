<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

$conn = mysqli_connect("localhost:3306", "root", "", "registration_form");

$sql="SELECT * FROM `registration`";

$result=mysqli_query($conn,$sql);
$user_count=0;
$male_count=0;
$female_count=0;
$married_status_count=0;
$unmarried_status_count=0;
if($result){
     while($row=mysqli_fetch_assoc($result)){
             $user_count++;
             if($row['sex']==='male'){
                $male_count++;
             }
             elseif ($row['sex']==='female') {
                $female_count++;
             }
             if ($row['martial_status']==='married') {
                $married_status_count++;
             }
             elseif ($row['martial_status']==='unmarried') {
                $unmarried_status_count++;
             }
     }
}
$obj=['user_count'=>$user_count,'male_count'=>$male_count,'female_count'=>$female_count,'married_status_count'=>$married_status_count,'unmarried_status_count'=>$unmarried_status_count];
echo '['.json_encode($obj).']';
    mysqli_close($conn);   

?>