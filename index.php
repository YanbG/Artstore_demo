<?php session_start()?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Art_Store</title>
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

    <header class = "viewport_header">
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
        <h1 style = "padding-top: 200pt" id = "hph1">Art Store
            <span id="motto"> tranquility is right under your feet</span></h1>
        <nav class = viewport_header>
            <ul>
                <li><a href = "index.php">Home</a>
                </li>
                <li><a href = "search.php">Search</a>
                    <span>
                                    </span>
                </li>
                <li><a href = "log_in_page.php">SignIn</a>
                    <span>
                                    </span>
                </li>
                <li><a href="sign_up_page.php">SignUp</a>
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
    </header>


    <section class = viewport_header>
        <style>
            section{background: black; filter: opacity(.66)}
        </style>
        <div class = hottest_art_gallery>
            <article style="padding-top: 100pt; padding-left: 100pt; padding-right:100pt;text-align: left; color: whitesmoke">

    <?php
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
    ?>
                <div class="slideshow">
                    <style>
                        .slides{
                            text-align: center;
                            padding-top: 70px;
                        }
                        .previous{
                            position: absolute;
                            top: 450px;
                        }
                        .description{
                            visibility: hidden;
                            text-align: center;
                        }
                        .description:hover{
                            visibility: visible;
                            transition-duration: 1s;
                        }
                        .hottest:hover{
                            opacity: 30%;
                            transition-duration: 3s;
                        }

                    </style>
                    <a class = "previous" onclick="plusSlides(-1)">&#10094;</a>

                    <div class="slides">
                        <a href="glossary.php?artworkID=<?php echo"$artworkID[0]"?>"><img class = hottest src="img/<?php echo"$artworkID[0]"?>.jpg" style="width: 70%"></a>
                    </div>
                    <div class="slides">
                        <a href="glossary.php?artworkID=<?php echo"$artworkID[1]"?>"><img class = hottest src="img/<?php echo"$artworkID[1]"?>.jpg" style="width: 70%"></a>
                    </div>
                    <div class="slides">
                        <a href="glossary.php?artworkID=<?php echo"$artworkID[2]"?>"><img class = hottest src="img/<?php echo"$artworkID[2]"?>.jpg" style="width: 70%">
                        </a>
                    </div>

                    <a class = "next" onclick="plusSlides(1)">&#10095;</a>


                </div>

            </article>
        </div>
    </section>


    <script>
        src="SharedMethod.js";

        arrayID = <?php echo json_encode($artworkID); ?>;
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n){
            showSlides(slideIndex+=n);
        }
        function showSlides(n){
            let i;
            let slides = document.getElementsByClassName("slides");
            if(n>slides.length){slideIndex = 1}
            if(n<1){slideIndex = slides.length}
            for(i=0;i<slides.length;i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }
    </script>

    <footer>
        <div style="color: whitesmoke">Website created by Yanbing Gong. All rights reserved.</div>
    </footer>
    <!--    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>-->
</body>
</html>




