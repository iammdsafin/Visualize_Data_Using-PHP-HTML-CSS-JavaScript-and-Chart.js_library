<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "planet_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Unable to connect to the database:" . $conn->connect_error);
}
?>