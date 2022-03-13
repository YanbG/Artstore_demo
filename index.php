<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HI</title>
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
    <div>
        <a href="https://www.artic.edu/iiif/2/a62a08bb-6775-dc38-330e-8fae4271d9a4/full/600,/0/default.jpg">click me</a>
    </div>
</body>
</html>




