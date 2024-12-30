<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "smartcityusers");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $conn->real_escape_string($_POST['username']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']); // No encryption, just store as is

    // Insert user into the database
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "<div style='
                max-width: 400px;
                margin: 50px auto;
                padding: 20px;
                text-align: center;
                background-color: #f0f9ff;
                border: 1px solid #d1e7dd;
                border-radius: 8px;
                font-family: Arial, sans-serif;
                color: #0f5132;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);'>
                <h2 style='color: #0d6efd;'>Signup Successful!</h2>
                <p>You can now <a href='login.html' style='color: #0d6efd; text-decoration: none;'>Login here</a>.</p>
              </div>";
    } else {
        echo "<div style='
                max-width: 400px;
                margin: 50px auto;
                padding: 20px;
                text-align: center;
                background-color: #fff3cd;
                border: 1px solid #ffeeba;
                border-radius: 8px;
                font-family: Arial, sans-serif;
                color: #856404;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);'>
                <h2>Error</h2>
                <p>Something went wrong. Please try again later.</p>
                <p>Error Details: " . $conn->error . "</p>
              </div>";
    }

    $conn->close();
}
?>
