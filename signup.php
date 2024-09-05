<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$email = $_POST["email"] ?? null;
$usrname = $_POST["usrname"] ?? null;
$pw = $_POST["pw"] ?? null;
$repw = $_POST["repw"] ?? null;

$conn = new mysqli('localhost', 'root', '', 'demo');

if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO signup (email, usrname, pw, repw) VALUES (?, ?, ?, ?)");
if ($stmt === false) {
    die('Prepare failed: ' . $conn->error);
}

$stmt->bind_param("ssss", $email, $usrname, $hashed_pw, $repw); 
if ($stmt->execute()) {
    echo "Successful";
} else {
    echo "Unexpected Error: " . $stmt->error;
}


$stmt->close();
$conn->close();
?>
