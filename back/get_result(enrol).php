<?php
// Include the connection file
include 'connection.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// Check if the 'enrollment_number' parameter is set in the URL
if(isset($_GET['enrollment_number'])) {
    // Retrieve the value of the 'enrollment_number' parameter
    $enrollment_number = $_GET['enrollment_number'];
   
    // Prepare the SQL statement to retrieve all semester details based on the enrollment number
    $sql = "SELECT * FROM subject_marks WHERE enrollment_number = $enrollment_number";

    // Prepare and bind parameters
    $stmt = $conn->prepare($sql);
  

    // Execute the query
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Initialize an array to store semester details
    $details = array();

    // Check if there are any results
    if ($result->num_rows > 0) {
        // Fetch all semester details
        while ($row = $result->fetch_assoc()) {
            
            $details[] = $row;
        }
    } else {
        echo "<script>alert('Details are NULL'); window.location.href = 'another_page.php';</script>";
    }
    
    // Close statement and connection
    $stmt->close();
    $conn->close();
    
    // Send JSON response
    header('Content-Type: application/json');
  
    echo  json_encode($details);
    
    
    
}
?>
