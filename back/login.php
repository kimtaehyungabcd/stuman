<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if all required fields are provided
    if (isset($_POST['username']) && isset($_POST['password'])) {
        // Connect to your database
        $conn = new mysqli("localhost", "root", "", "stuman");

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Escape special characters to prevent SQL injection
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);

        // Query the database to check for user existence
        $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // User found, return success status
            echo json_encode(["status" => "success"]);
        } else {
            // User not found, return error status
            http_response_code(401);
            echo json_encode(["status" => "error", "message" => "Invalid username or password"]);
        }

        $conn->close();
    } else {
        // Required fields missing, return error status
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Username and password are required"]);
    }
} else {
    // Invalid request method
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
