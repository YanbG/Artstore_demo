
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

    echo"bomb";
    $sql = "SELECT * FROM artworks ORDER BY view DESC LIMIT 3;";
    $result = mysqli_query($conn,$sql);
    for($i = 0; $i<3; $i++){
        $row = mysqli_fetch_assoc($result);
        $artworkID[]=$row['artworkID'];
        $title[] = $row['title'];
        $artist[] = $row['artist'];
        $date[] = $row['yearOfWork'];
        $genre[] = $row['genre'];
        $description[] = $row['description'];
        $fileName[] = $row['imageFileName'];
    }
    echo"$artworkID[0]";

    //test connection
    mysqli_select_db($conn, "artworks");
    if($conn ->connect_error){
        die("connection failed:".$conn->error);
    }else{
        echo"connected successfully";
    }


?>

