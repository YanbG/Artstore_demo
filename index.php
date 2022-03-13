
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


//    $sql = "SELECT * FROM artworks ORDER BY view DESC LIMIT 3;";
//    $result = mysqli_query($conn,$sql);
//    for($i = 0; $i<3; $i++){
//        $row = mysqli_fetch_assoc($result);
//        $artworkID[]=$row['artworkID'];
//        $title[] = $row['title'];
//        $artist[] = $row['artist'];
//        $date[] = $row['yearOfWork'];
//        $genre[] = $row['genre'];
//        $description[] = $row['description'];
//        $fileName[] = $row['imageFileName'];
//    }
//    echo"$artworkID[0]";

//    //test connection
//    mysqli_select_db($conn, "artworks");
//    if($conn ->connect_error){
//        die("connection failed:".$conn->error);
//    }else{
//        echo"connected successfully";
//    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HI</title>
</head>
<body>
<div>
    <img>
    <a href="https://www.artic.edu/iiif/2/a62a08bb-6775-dc38-330e-8fae4271d9a4/full/600,/0/default.jpg"></a>
    </img>
</div>
</body>
</html>
