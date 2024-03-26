<?php
include 'connection.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
if(isset($_GET['year'])) {
    // Retrieve the value of the 'year' parameter
    $year = $_GET['year'];
$sql = "SELECT * FROM personal_details where year =$year";
$result = $conn->query($sql);

$data = []; // Initialize an empty array to store the data

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = [
            'enrollment_number' => $row['enrollment_number'],
            'first_name' => $row['first_name'],
            'middle_name' => $row['middle_name'],
            'last_name' => $row['last_name'],
            'student_contact_number' => $row['student_contact_number'],
            'date_of_birth' => $row['date_of_birth'],
            'email' => $row['email'],
            'place_of_birth' => $row['place_of_birth'],
            'name_of_parent_guardian' => $row['name_of_parent_guardian'],
            'address' => $row['address'],
            'parent_contact_number' => $row['parent_contact_number'],
            'course' => $row['course'],
            'category' => $row['category'],
            'date_of_admission' => $row['date_of_admission'],
            'last_school_attended' => $row['last_school_attended'],
            'EPIC' => $row['EPIC'],
            'district' => $row['district'],
            'constituency' => $row['constituency'],
            'religion' => $row['religion'],
            'photo' => $row['photo'],
            'year'=>$row['year']
        ];
    }
}
}
echo json_encode($data);
?>
