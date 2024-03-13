<?php
// Include the connection file
include 'connection.php';

// Get the enrollment number from user input
$enrollment_number = $_POST['enrollment_number']; // Assuming you're using a form with POST method
//$enrollment_number = 1;
// Prepare the SQL statement to retrieve personal details based on the enrollment number
$sql = "SELECT * FROM personal_details WHERE enrollment_number = ?";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $enrollment_number);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Initialize an empty array to store the personal details
$personal_details = array();

// Check if there are any results
if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        // Add personal details to the array
        $personal_details[] = $row;
    }
}

// Close statement and connection
$stmt->close();
$conn->close();

// Encode the personal details array as JSON
$json_response = json_encode($personal_details);

// Output the JSON response
header('Content-Type: application/json');
echo $json_response;
?>
