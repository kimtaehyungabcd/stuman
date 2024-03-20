<?php
include 'connection.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


$sql = "SELECT DISTINCT year FROM subject_marks";
$result = $conn->query($sql);

$rows = array();
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
}

// Close the database connection
$conn->close();

// Convert the result array to JSON
echo json_encode($rows);


?>