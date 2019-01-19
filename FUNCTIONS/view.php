<?php

require_once('CLASSES/RegisterClass.php');
require_once('dbconn.php');

$class = new newUser(


            NULL,
            NULL,
            NULL,
            NULL,
            NULL,
            NULL
);
$data = $class->fetch();


header("HTTP/1.0 404 User not found");
if($data['status']){
    header("HTTP/1.0 200 Ok");
}
header('Content-Type:application/json');
print_r(json_encode($data));





?>