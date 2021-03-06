<?php session_start();?>
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <title>Log In</title>
    <link rel="stylesheet"  type="text/css" href="style.css" media="all">
</head>

<body>
    <?php

    //get heroku db connection information
    $cleardb_url        = parse_url(getenv("CLEARDB_DATABASE_URL"));
    $cleardb_server     = $cleardb_url["host"];
    $cleardb_username   = $cleardb_url["user"];
    $cleardb_password   = $cleardb_url["pass"];
    $cleardb_db         = substr($cleardb_url["path"],1);

    $active_group   = 'default';
    $query_builder  = TRUE;

    //connect to DB
    $conn=mysqli_connect($cleardb_server, $cleardb_username,$cleardb_password, $cleardb_db);
    ?>

    <video autoplay muted loop id = "bgv">
        <source src = "background/1.mp4" type="video/mp4">
    </video>

    <?php

    if(isset($_SESSION['username'])){
        $url = "index.php";
        echo '<html><head><script>alert("you already logged in~" );</script></head></html>' .
            "<meta http-equiv=\"refresh\" content=\"0;url=" . $url . "\">";
    }

    ?>
    <div class = container style = "position: absolute; top:0; right: 0">
        <?php
        if(empty($_SESSION['username'])&&empty($_SESSION['password'])) {
            if(isset($_SESSION['username']))
                echo "successfully logged in，" . $_SESSION['username'] . "<a href='log_out.php' >log out</a>";
            else
                echo "You are not logged in,<a href='log_in_page.php'>go log in</a>";
        }else{
            echo "successfully logged in, welcome:".$_SESSION['username']."<a href='log_out.php'>log out</a>";
        }

        ?>
    </div>

    <nav class = viewport_header>
        <ul>
            <li><a href = "index.php">Home</a>
            </li>
            <li><a href = "search.php">Search</a>
                <span>
                                    </span>
            </li>
            <li><a href = "log_in_page.php">Sign In</a>
                <span>
                                    </span>
            </li>
            <li><a href="sign_up_page.php">Sign Up</a>
                <span>
                                    </span>
            </li>
            <?php
            if (isset($_SESSION['username'])&&isset($_SESSION['password'])){
                echo"<li><a href = favorites.php>Personal</a></li>";
            }
            ?>
        </ul>
    </nav>

    <div class = viewport_header style = "padding-top: 100pt; text-align: center">
        <form name = "logInForm" onsubmit="validateForm()" action = 'log_in_page.php'method="post">
            <p><h3>please enter your username</h3></p>
            <style>
                input:focus{background:darkgrey; transition-duration: 1s}
            </style>

            <br><input type = "text" name="username" placeholder="type username here"></br>

            <p style="padding-top: 20pt"><h3>please enter your password</h3></p>

            <br><input type="password" name = "password" placeholder = "password goes in here"></br>

            <!--                <t1 style = "position: relative; top: 30px">-->
            <br style = "position: relative; top:30px">
            <input type = "submit"  name = "submit" value = "submit"/>
            <!--                   <button type="button" onclick="validateForm()"> Submit</button>-->
            <!--                </t1>-->
            </br>
        </form>

        <?php

        //echo $username, $password;
        if(isset($_POST['username']) && isset($_POST['password'])) {
            //echo '<script>alert("yeah")</script>';
            $username = $_POST['username'];
            $password = $_POST['password'];

            $sql = "SELECT * FROM users WHERE name ='".$username."';";
            $findUser = mysqli_query($conn, $sql);
            $user = mysqli_fetch_assoc($findUser);

            if (isset($user)) {
                if ($password == $user['password']) {
                    $_SESSION['username'] = $username;
                    $_SESSION['password'] = $password;
                    $_SESSION['uid']=$user['userID'];
                    $_SESSION['logged_in'] = true;

                    if (isset ($_SESSION['id'])) {
                        $artworkID = $_SESSION['id'];
                        echo '<html><head><script>alert("successfully logged in!!" );</script></head></html>' .
                            "<meta http-equiv=\"refresh\" content=\"0;url=glossary.php?artworkID=" . $artworkID . "\">";
                    } else {
                        $url = "index.php";
                        echo '<html><head><script>alert("successfully logged in!!" );</script></head></html>' .
                            "<meta http-equiv=\"refresh\" content=\"0;url=" . $url . "\">";
                    }
                }else{

                    echo '<script>alert("username and password dont match")</script>';

                }
            } else {
                //echo $sql;
                echo '<html><head><script>alert("the user doesnt seem to exist, try create an account with this username~" );</script></head></html>' .
                    "<meta http-equiv=\"refresh\" content=\"0;url=sign_up_page.php\">";
            }

        }
        ?>
    </div>
    <div class = viewport_header style = "padding-top: 30pt; text-align: center">
        <p> don't have an account yet?</p>
        <style>
            a:link:hover{color: black}
            a:visited{color: black}
        </style>
        <br><a href="sign_up_page.php" > create an account</a><br>
        <br><a href = "index.php">Back to Home Page</a></br>


    </div>
    </div>

    <footer>
        <div style="color: whitesmoke">Website created by Yanbing Gong. All rights reserved.</div>
    </footer>
    <script src="someFunctions.js" type="text/javascript"></script>

</body>