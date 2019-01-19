<?php
require_once('/CLASSES/LoginClass.php');
require_once('dbconn.php');




$class = new userLogin(
    $_POST['userid'],
    $_POST['password']
);

$data = $class->login();


header("HTTP/1.0 404 User not found");
if($data['status']){
    header("HTTP/1.0 200 OK");
}
header('Content-Type: application/json');
print_r(json_encode($data));






?>