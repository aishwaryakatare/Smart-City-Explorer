<?php
// Start session for storing user data
session_start();

// Database connection
$conn = new mysqli("localhost", "root", "", "smartcityusers");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $conn->real_escape_string($_POST['username']);
    $password = $_POST['password'];

    // Check if user exists
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Directly compare the entered password with the stored password
        if ($password == $user['password']) {
            // Successful login, set session variables
            $_SESSION['username'] = $user['username'];  // Store username in session
            header("Location: index.php");  // Redirect to the index page
            exit; // Make sure the script stops executing after redirect
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "No user found with the given username.";
    }

    $conn->close();
}
?>
