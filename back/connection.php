<?php
// Database connection parameters
$host = "localhost"; // If MySQL server is on the same server as PHP
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$database = "student_management"; // Name of your MySQL database

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
   echo "connected";
}


?>
