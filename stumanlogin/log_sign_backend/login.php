<?php
// Include the database connection script
require_once "../includes/db_connect.php";

// Login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Retrieve user data from the database
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Verify password
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            
            echo "<script>
            alert('Login successful!');
            window.location.href='http://localhost:3000/';
            </script>";
            
            
        } else {
            echo "<script>alert('Invalid username or password');</script>";
        }
    } else {
        echo "<script>alert('Invalid username or password');</script>";
    }
}

$conn->close();
?>
