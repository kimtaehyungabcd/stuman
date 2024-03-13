<?php
// Include the connection file
include 'connection.php';

// Get the year from user input
$year = $_POST['year']; // Assuming you're using a form with POST method
// Prepare the SQL statement to retrieve enrollment numbers and subject names based on year and conditions
$sql = "SELECT Distinct enrollment_number 
        FROM subject_marks 
        WHERE year = ? 
        AND (theory_marks < 30 
        OR (term_marks < 10 AND theory_marks < 30 + (10 - term_marks))
        OR term_work < 10 
        OR practicals < 10)";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $year);

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
    echo "No results found for the year: " . $year;
}

// Close statement and connection
$stmt->close();
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($details);
?>
