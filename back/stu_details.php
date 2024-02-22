<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $enrollmentNo = $_POST['enroll'];
    $address = $_POST['address'];
    $contactNo = $_POST['contact'];
    $email = $_POST['email'];
    $placeOfBirth = $_POST['pob'];
    $dateOfBirthInWords = $_POST['dobw'];
    $guardianAddress = $_POST['guardian_address'];
    $parentNumber = $_POST['parent_num'];
    $religion = $_POST['religion'];
    $category = $_POST['category'];
    $lastSchoolAttended = $_POST['school'];
    $district = $_POST['district'];
    $constituency = $_POST['constituency'];

    // Display the retrieved data
    echo "<h2>Form Data</h2>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Enrollment No:</strong> $enrollmentNo</p>";
    echo "<p><strong>Address:</strong> $address</p>";
    echo "<p><strong>Contact No:</strong> $contactNo</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Place of Birth:</strong> $placeOfBirth</p>";
    echo "<p><strong>Date of Birth in Words:</strong> $dateOfBirthInWords</p>";
    echo "<p><strong>Guardian Address:</strong> $guardianAddress</p>";
    echo "<p><strong>Parent Number:</strong> $parentNumber</p>";
    echo "<p><strong>Religion:</strong> $religion</p>";
    echo "<p><strong>Category:</strong> $category</p>";
    echo "<p><strong>Last School Attended:</strong> $lastSchoolAttended</p>";
    echo "<p><strong>District:</strong> $district</p>";
    echo "<p><strong>Constituency:</strong> $constituency</p>";
}
?>
