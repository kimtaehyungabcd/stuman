<?php
// Include the connection file
include 'connection.php';

// Get the year and month from user input
$year = $_POST['year']; // Assuming you're using a form with POST method
$month = $_POST['month']; // Assuming you're using a form with POST method
//$year = 2020;
$month = "February";
// Prepare the SQL statement to retrieve enrollment number, name, and percentage based on year, month, and conditions
$sql = "SELECT pd.enrollment_number, pd.first_name, pd.middle_name, pd.last_name, sm.percentage_column
        FROM subject_marks sm
        INNER JOIN personal_details pd ON sm.enrollment_number = pd.enrollment_number
        WHERE sm.year = ? AND sm.month = ? 
        AND (sm.theory_marks > 30 
        OR (sm.term_marks < 10 AND sm.theory_marks > 30 + (10 - sm.term_marks))
        OR sm.term_work > 10 
        OR sm.practicals > 10)
        ORDER BY sm.percentage_column DESC";

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
    $current_enrollment_number = null;
    $total_percentage = 0;
    $count = 0;
    
    // Fetch details and store them in the array
    while ($row = $result->fetch_assoc()) {
        // Check if enrollment number changed
        if ($current_enrollment_number !== $row['enrollment_number']) {
            // If not the first enrollment number, calculate average percentage and add to array
            if ($current_enrollment_number !== null) {
                $details[] = [
                    'enrollment_number' => $current_enrollment_number,
                    'first_name' => $first_name,
                    'middle_name' => $middle_name,
                    'last_name' => $last_name,
                    'average_percentage' => $total_percentage / $count
                ];
            }
            // Reset variables for the new enrollment number
            $current_enrollment_number = $row['enrollment_number'];
            $first_name = $row['first_name'];
            $middle_name = $row['middle_name'];
            $last_name = $row['last_name'];
            $total_percentage = 0;
            $count = 0;
        }
        
        // Add percentage to total
        $total_percentage += $row['percentage_column'];
        $count++;
    }
    // Add the last enrollment number to the array
    $details[] = [
        'enrollment_number' => $current_enrollment_number,
        'first_name' => $first_name,
        'middle_name' => $middle_name,
        'last_name' => $last_name,
        'average_percentage' => $total_percentage / $count
    ];
} else {
    echo "No results found for year: " . $year . " and month: " . $month;
}

// Close statement and connection
$stmt->close();
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($details);
?>
