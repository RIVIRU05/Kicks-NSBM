<?php

    $country = $_POST["country"];
    $usrname = $_POST["name"];
    $email = $_POST["email"];
    $msg = $_POST["message"];
    

    $conn = new mysqli('localhost','root','','demo');
    if($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO joinus (country, usrname, email, msg) VALUES (?, ?, ?, ?)");
        if ($stmt === false) {
            die('Prepare failed: '.$conn->error);
        }
        $stmt->bind_param("ssss", $country, $usrname, $email, $msg);
        if($stmt->execute()){
            echo "Successful";
        } else {
            echo "Unexpected Error: ".$stmt->error;
        }
        $stmt->close();
        $conn->close();
    }
?>
