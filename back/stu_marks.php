<?php
include 'connection.php';

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Data received from the frontend team
$enrollment_number = $_POST['enrollment_number']; // Assuming you receive this via POST
$semester = $_POST['semester']; // Assuming you receive this via POST
$year = $_POST['year']; // Assuming you receive this via POST
$month = $_POST['month']; // Assuming you receive this via POST
$sub_code = $_POST['sub_code']; // Assuming you receive this via POST
$sub_name = $_POST['sub_name']; // Assuming you receive this via POST
$theory_marks = $_POST['theory_marks']; // Assuming you receive this via POST
$term_marks = $_POST['term_marks']; // Assuming you receive this via POST
$practicals = $_POST['practicals']; // Assuming you receive this via POST
$term_work = $_POST['term_work']; // Assuming you receive this via POST
$total_marks = $_POST['total_marks']; // Assuming you receive this via POST

// Prepare and bind the INSERT statement
$sql = "INSERT INTO student_management (enrollment_number, semester, year, month, sub_code, sub_name, theory_marks, term_marks, practicals, term_work, total_marks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iiisssdddd", $enrollment_number, $semester, $year, $month, $sub_code, $sub_name, $theory_marks, $term_marks, $practicals, $term_work, $total_marks);

// Execute the statement
if ($stmt->execute()) {
    echo "Data inserted successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
