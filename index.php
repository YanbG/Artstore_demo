<?php session_start();?>
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
    mysqli_select_db($conn, "artworks");
    if($conn ->connect_error){
        die("connection failed:".$conn->error);
    }else{
        echo"connected successfully";
    }
?>

<?php

$findRecentSQL = "SELECT * FROM artworks ORDER BY timeReleased DESC LIMIT 3";
$find = mysqli_query($conn, $findRecentSQL);
for($i = 0; $i < 1; $i++){
    $each = mysqli_fetch_assoc($find);
    $recentID[] = $each['artworkID'];
    $recentFile[] = $each['imageFileName'];
}

echo"$recentID[0]";
?>