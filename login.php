<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$email = $_POST["email"] ?? null;
$pw = $_POST["pw"] ?? null;

$conn = new mysqli('localhost', 'root', '', 'demo');

if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

$stmt = $conn->prepare("SELECT pw FROM signup WHERE email = ?");
if ($stmt === false) {
    die('Prepare failed: ' . $conn->error);
}

$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    echo "No user found with that email.";
    $stmt->close();
    $conn->close();
    exit;
}

$stmt->bind_result($hashed_pw);
$stmt->fetch();
$stmt->close();

if (password_verify($pw, $hashed_pw)) {
    echo "Login Successful";
} else {
    echo "Invalid credentials.";
}

$conn->close();
?>
