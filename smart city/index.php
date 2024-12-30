<?php
// Start session to check if user is logged in
session_start();

// Check if user is logged in
if (isset($_SESSION['username'])) {
    // User is already logged in, no need to show signup or login page
    $userLoggedIn = true;
} else {
    // User is not logged in
    $userLoggedIn = false;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart City Application</title>
    <link rel="stylesheet" href="index.css">
    <style>
        /* General reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }

        /* Sticky heading */
        h1 {
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            padding: 20px 0;
            background-color: #15385e;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 2px;
            position: sticky;
            top: 0;
            z-index: 10;
            margin: 0;
        }

        /* Blur effect */
        .blur-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            z-index: 1;
        }

        .content-container {
            width: 100%;
            max-width: 1300px;
            padding: 20px;
        }

        /* Align containers in one row */
        .container-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            padding: 10px;
            flex-wrap: nowrap;
            overflow-x: auto;
        }

        .container {
            width: 300px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .container img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        .container-content {
            padding: 10px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 180px;
        }

        .container-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .container-description {
            font-size: 14px;
            color: #555;
            margin: 10px 0;
        }

        .button-container {
            display: flex;
            justify-content: center;
            gap: 10px;
        }

        .button {
            display: inline-block;
            padding: 10px;
            background-color: #15385e;
            color: white;
            text-align: center;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            width: 120px;
        }

        .button:hover {
            background-color: #0056b3;
        }

        form {
            background: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }

        input {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 12px;
            background-color: #15385e;
            color: #fff;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .login-link {
            text-align: center;
            margin-top: 15px;
        }

        .login-link a {
            color: #15385e;
            text-decoration: none;
        }

        .login-link a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            .container-grid {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <!-- Blur background until user logs in -->
    <?php if (!$userLoggedIn): ?>
    <div class="blur-background"></div>
    <?php endif; ?>

    <h1>Smart City Explorer</h1>
    <!-- Main page content -->
    <div class="content-container">
        <!-- Smart city exploration sections -->
        <div class="container-grid">
            <div class="container" onclick="window.location.href='Pune/pune.html'">
                <img src="Images/Pune.avif" alt="Pune">
                <div class="container-content">
                    <div class="container-title">Pune</div>
                    <div class="container-description">Pune is a vibrant city known for its rich cultural heritage, educational institutions, and thriving IT industry.</div>
                    <div class="button-container">
                        <a href="Pune/pune.html" class="button">Explore Pune</a>
                    </div>
                </div>
            </div>
            <div class="container" onclick="window.location.href='MumbaiHtml/mumbai.html'">
                <img src="Images/Mumbai.jpg" alt="Mumbai">
                <div class="container-content">
                    <div class="container-title">Mumbai</div>
                    <div class="container-description">The financial capital of India, offers a blend of culture, commerce, and iconic landmarks like Gateway of India.</div>
                    <div class="button-container">
                        <a href="MumbaiHtml/mumbai.html" class="button">Explore Mumbai</a>
                    </div>
                </div>
            </div>
            <div class="container" onclick="window.location.href='Delhi/Delhi.html'">
                <img src="Images/delhi.jpg" alt="Delhi">
                <div class="container-content">
                    <div class="container-title">Delhi</div>
                    <div class="container-description">Delhi, the capital city, is a vibrant blend of history, culture, and modernity with iconic landmarks.</div>
                    <div class="button-container">
                        <a href="Delhi/Delhi.html" class="button">Explore Delhi</a>
                    </div>
                </div>
            </div>
            <div class="container" onclick="window.location.href='BangloreHtml/Banglore.html'">
                <img src="Images/banglore.jpg" alt="Banglore">
                <div class="container-content">
                    <div class="container-title">Banglore</div>
                    <div class="container-description">Bangalore, India’s tech hub, is known for its vibrant startup culture and pleasant climate.</div>
                    <div class="button-container">
                        <a href="BangloreHtml/Banglore.html" class="button">Explore Banglore</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Signup form for users not logged in -->
        <?php if (!$userLoggedIn): ?>
        <form action="signup.php" method="POST">
            <h2>Sign Up</h2>
            <input type="text" name="username" placeholder="Username" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Signup</button>
            <div class="login-link">
                <p>Already have an account? <a href="login.html">Login here</a></p>
            </div>
        </form>
        <?php endif; ?>
    </div>
</body>
</html>
