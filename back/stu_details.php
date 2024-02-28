<?php
// Assuming you have established a database connection already
include 'connection.php';


// Check if a file is uploaded
if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
    // File upload directory
    $targetDir = "uploads/";
    $fileName = basename($_FILES["photo"]["name"]);
    $targetFile = $targetDir . $fileName;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Check if the file is an actual image
    $check = getimagesize($_FILES["photo"]["tmp_name"]);
    if ($check === false) {
        die("Error: File is not an image.");
    }

    // Check file size (maximum 5MB)
    if ($_FILES["photo"]["size"] > 5 * 1024 * 1024) {
        die("Error: Sorry, your file is too large.");
    }

    // Allow only certain file formats
    $allowedFormats = ["jpg", "jpeg", "png", "gif"];
    if (!in_array($imageFileType, $allowedFormats)) {
        die("Error: Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
    }

    // Generate a unique filename to avoid overwriting existing files
    $uniqueFilename = uniqid() . "_" . $fileName;
    $targetFile = $targetDir . $uniqueFilename;

    // Upload file
    if (!move_uploaded_file($_FILES["photo"]["tmp_name"], $targetFile)) {
        die("Error: Sorry, there was an error uploading your file.");
    }
} else {
    die("Error: No file uploaded or file upload error occurred.");
}

// Prepare SQL statement for inserting form data
$sql = "INSERT INTO personal_details (enrollment_number, first_name, middle_name, last_name, student_contact_number, date_of_birth, email, place_of_birth, name_of_parent_guardian, address, parent_contact_number, category, last_school_attended, district, constituency, religion, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

// Set parameters and execute
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssssssssssss", $_POST['enroll'], $_POST['name'], $_POST['middleName'], $_POST['lastName'], $_POST['contact'], $_POST['dobw'], $_POST['email'], $_POST['pob'], $_POST['parent_name'], $_POST['address'], $_POST['parent_num'], $_POST['category'], $_POST['school'], $_POST['district'], $_POST['constituency'], $_POST['religion'], $targetFile);

if ($stmt->execute()) {
    echo "Records inserted successfully.";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement
$stmt->close();

// Close connection
$conn->close();
?>
