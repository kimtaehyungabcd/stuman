<?php
// Include the database connection script
require_once "../includes/db_connect.php";

// Function to check if password meets criteria
function is_password_valid($password) {
    // Password Policy Criteria
    $minimum_length = 8;
    $has_uppercase = preg_match("/[A-Z]/", $password);
    $has_lowercase = preg_match("/[a-z]/", $password);
    $has_number = preg_match("/[0-9]/", $password);
    $has_special_character = preg_match("/[^A-Za-z0-9]/", $password);

    // Check if password meets criteria
    if (strlen($password) < $minimum_length || !$has_uppercase || !$has_lowercase || !$has_number || !$has_special_character) {
        return false;
    }

    return true;
}

// Signup form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if password meets criteria
    if (!is_password_valid($password)) {
        echo "<script>alert('Error: Password does not meet criteria. Please make sure it has at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.');</script>";
        exit;
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into the database
    $sql = "INSERT INTO users (email, username, password) VALUES ('$email', '$username', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        // Display success message
        echo "<script>alert('Signup successful!');</script>";
        echo "<script>setTimeout(function(){ window.location.href = '../login.html'; }, 1000);</script>";
        exit;
    } else {
        echo "<script>alert('Error: " . $sql . "\\n" . $conn->error . "');</script>";
    }
}

$conn->close();
?>
