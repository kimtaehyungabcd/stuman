<?php
// Include the connection file
include 'connection.php';

// Get the enrollment number from user input
$enrollment_number = $_POST['enrollment_number']; // Assuming you're using a form with POST method

// Prepare the SQL statement to retrieve all semester details based on the enrollment number
$sql = "SELECT * FROM subject_marks WHERE enrollment_number = ?";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $enrollment_number);

// Execute the query
$stmt->execute();

// Get the result
$result = $stmt->get_result();

// Initialize an array to store semester details
$semester_details = array();

// Check if there are any results
if ($result->num_rows > 0) {
    // Fetch all semester details
    while ($row = $result->fetch_assoc()) {
        // Store details based on semester
        $semester_details[$row['semester']][] = $row;
    }
} else {
    echo "No results found for enrollment number: " . $enrollment_number;
}

// Close statement and connection
$stmt->close();
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($semester_details);
?>
