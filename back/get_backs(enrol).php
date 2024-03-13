<?php
// Include the connection file
include 'connection.php';

// Get the enrollment number from user input
$enrollment_number = $_POST['enrollment_number']; // Assuming you're using a form with POST method

// Prepare the SQL statement to retrieve details based on enrollment number and conditions
$sql = "SELECT * FROM subject_marks 
        WHERE enrollment_number = ? 
        AND (theory_marks < 30 
        OR (term_marks < 10 AND theory_marks < 30 + (10 - term_marks))
        OR term_work < 10 
        OR practicals < 10)";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $enrollment_number);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Initialize an array to store the results
$details = array();

// Check if there are any results
if ($result->num_rows > 0) {
    // Fetch details and store them in the array
    while ($row = $result->fetch_assoc()) {
        $details[] = $row;
    }
} else {
    echo "No results found for enrollment number: " . $enrollment_number;
}

// Close statement and connection
$stmt->close();
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($details);
?>
