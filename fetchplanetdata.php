<?php
include 'config.php';

function fetchDataFromTable($tableName)
{
    global $conn;
    $sql = "SELECT * FROM $tableName ORDER BY id DESC LIMIT 1";
    $result = $conn->query($sql);
    return $result->fetch_assoc();
}

$planets = ['Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];
$data = [];

foreach ($planets as $planet) {
    $data[$planet] = fetchDataFromTable(strtolower($planet));
}

header('Content-Type: application/json');
echo json_encode($data);
?>