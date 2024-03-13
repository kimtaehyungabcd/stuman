<?php
// Include the connection file
include 'connection.php';

// Get the sub_code from user input
$sub_code = $_POST['sub_code']; // Assuming you're using a form with POST method

// Prepare the SQL statement to retrieve enrollment number and name based on sub_code and conditions
$sql = "SELECT pd.enrollment_number, pd.first_name, pd.middle_name, pd.last_name
        FROM subject_marks sm
        INNER JOIN personal_details pd ON sm.enrollment_number = pd.enrollment_number
        WHERE sm.sub_code = ? 
        AND (sm.theory_marks < 30 
        OR (sm.term_marks < 10 AND sm.theory_marks < 30 + (10 - sm.term_marks))
        OR sm.term_work < 10 
        OR sm.practicals < 10)";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $sub_code);

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
    echo "No results found for sub_code: " . $sub_code;
}

// Close statement and connection
$stmt->close();
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($details);
?>
