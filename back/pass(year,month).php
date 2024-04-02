<?php
// Include the connection file
include 'connection.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// Get the enrollment number from user input
$year = $_GET['year']; // Assuming you're using GET method for year
$month = $_GET['month']; // Assuming you're using GET method for month

// Prepare the SQL statement to retrieve details based on year and month
$sql = "SELECT * FROM subject_marks 
        WHERE enrollment_number = ? 
        AND (theory_marks >= 30 
        AND (term_marks >= 10 OR term_work >= 10 OR practicals >= 10))";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("is", $year, $month);

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
    echo "No results found for the selected month and year.";
}

// Close statement and connection
$stmt->close();
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($details);
?>
