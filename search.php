<?php session_start();?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Search</title>
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

<nav class = viewport_header>
    <ul>
        <li><a href = "index.php">Home</a>
        </li>
        <li><a href = "search.php">Search</a>
            <span>
                                    </span>
        </li>
        <li><a href = "log_in_page.php">Sign_In</a>
            <span>
                                    </span>
        </li>
        <li><a href="sign_up_page.php">Sign_Up</a>
            <span>
                                    </span>
        </li>
        <li><a href="search.php">Search</a>
        </li>
    </ul>
</nav>

<div class = 'viewport_header' style = "text-align: center; padding-top: 0pt" class = 'search'>
    <form method = 'POST'>
        <input class = 'search' name = 'search' type = "text" placeholder="Search..." style = "border-radius: 10px" >
        <?php
        $keyword=$_POST['search'];
        if(isset($keyword)){
            $sql = "SELECT * FROM artworks WHERE artist like '%{$keyword}%' OR title like '%{$keyword}%' OR genre like '%{$keyword}%'";
            $searchResult=mysqli_query($conn, $sql);
            $numOfRow = mysqli_num_rows($searchResult);
            while($row =$searchResult->fetch_assoc()){
                echo "<div> artwork id is:".$row['artworkID']." <button action = 'glossary.php' method = 'POST'> <a href='glossary.php?artworkID=".$row['artworkID']."'> more </a></button>";
            }

        }
        ?>

    </form>
    <p style = 'padding-bottom: 0pt'>
        search here
    </p>
</div>



<footer>
    <div style="color: whitesmoke">Website created by Yanbing Gong. All rights reserved.</div>
</footer>
</body>
</html>
