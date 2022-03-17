<?php session_start()?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="format-detection" content="telephone=no"/>
    <title>Digital Collection</title>

    <link href="stylesheet/main.css" rel="stylesheet" type="text/css"/>
    <link href="stylesheet/print.css" rel="stylesheet" type="text/css" media="print"/>


    <link rel="alternate" hreflang="de" href="https://sammlung.staedelmuseum.de/de"/>

    <script type="text/javascript" src="scripts/vendor.js"></script>
    <script type="text/javascript" src="scripts/main.js"></script>


</head>
<body class="isHomepage" data-message="[]">

<noscript>
    <iframe src="//www.googletagmanager.com/ns.html?id=GTM-KRNMP9" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<script>
    dataLayer = [{}];
</script>
<script>
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-KRNMP9');
</script>

<video autoplay muted loop id = "bgv" style="opacity: .5">
    <source src = "background/1.mp4" type="video/mp4">
</video>

<header class="dsHeader">

    <div class="dsHeader__container container">
        <div class="dsHeader__contentWrap">
            <div class="dsHeader__content branding current">
                <div class="dsHeaderBranding">
                    <div class="dsHeaderBranding__content default container current">
                        <a class="dsHeaderBranding__link" href="index.html">
                            <span class="dsHeaderBranding__left">Art</span>
                            <span class="dsHeaderBranding__right">Collection</span>
                        </a>
                    </div>

                </div>

                <div class="dsHeader__action">
                    <!--                        <a class="dsHeader__actionButton language" href="/de">-->
                    <!--                            <span class="dsHeader__actionButtonText">DE</span>-->
                    <!--                        </a>-->

                    <button class="dsHeader__actionButton search" data-action="search">
                        <svg class="dsHeader__actionButtonImage search" width="40" height="40" viewBox="0 0 40 40">
                            <path fill="none" stroke="#EDEAE3" stroke-width="3" d="M23.664 23.707c-1.543 1.52-3.66 2.46-5.998 2.46-4.718 0-8.54-3.824-8.54-8.542 0-4.717 3.822-8.542 8.54-8.542s8.54 3.825 8.54 8.542c0 2.38-.972 4.533-2.542 6.082l7.21 7.21-7.21-7.21z"></path>
                        </svg>

                        <span class="dsHeader__actionButtonCaption">Search</span>
                    </button>

                    <button class="dsHeader__actionButton menu" data-action="menu">
                        <svg class="dsHeader__actionButtonImage menu" width="40" height="40" viewBox="0 0 40 40">
                            <path fill="#EDEAE3" d="M2 28h35v3H2v-3zm0-10h35v3H2v-3zM2 8h35v3H2V8z"></path>
                        </svg>

                        <svg class="dsHeader__actionButtonImage close" width="40" height="40" viewBox="0 0 40 40">
                            <path fill="none" stroke="#EDEAE3" stroke-width="3" stroke-linecap="square" d="M20 20L9.5 9.5 20 20 9.5 30.5 20 20zm0 0l10.5 10.5L20 20 30.5 9.5 20 20z"></path>
                        </svg>

                        <span class="dsHeader__actionButtonCaption">Menu</span>
                    </button>
                </div>
            </div>

            <div class="dsHeader__content search" data-url-fulltext="/en/search/1/prompt/global" data-url-keyword="/en/search/1/prompt/facets" data-periods="{&quot;min&quot;:1290,&quot;max&quot;:2018,&quot;years&quot;:{&quot;1290-01-01T00:00:00Z&quot;:0.012639003479138967,&quot;1300-01-01T00:00:00Z&quot;:0.05055601391655587,&quot;1310-01-02T00:00:00Z&quot;:0.0309591093811518,&quot;1320-01-02T00:00:00Z&quot;:0.04729082072918186,&quot;1330-01-02T00:00:00Z&quot;:0.012639003479138967,&quot;1340-01-02T00:00:00Z&quot;:0.0309591093811518,&quot;1350-01-02T00:00:00Z&quot;:0.01787425013507906,&quot;1360-01-02T00:00:00Z&quot;:0.028261670947211073,&quot;1370-01-02T00:00:00Z&quot;:0.028261670947211073,&quot;1380-01-02T00:00:00Z&quot;:0.03574850027015812,&quot;1390-01-02T00:00:00Z&quot;:0.03574850027015812,&quot;1400-01-02T00:00:00Z&quot;:0.03574850027015812,&quot;1410-01-03T00:00:00Z&quot;:0.043782792365816996,&quot;1420-01-03T00:00:00Z&quot;:0.04729082072918186,&quot;1430-01-03T00:00:00Z&quot;:0.05362275040523718,&quot;1440-01-03T00:00:00Z&quot;:0.1049874479033203,&quot;1450-01-03T00:00:00Z&quot;:0.0379170104374169,&quot;1460-01-03T00:00:00Z&quot;:0.059282181107016566,&quot;1470-01-03T00:00:00Z&quot;:0.0703709931528346,&quot;1480-01-03T00:00:00Z&quot;:0.059282181107016566,&quot;1490-01-03T00:00:00Z&quot;:0.11090680542156955,&quot;1500-01-03T00:00:00Z&quot;:0.14299400108063248,&quot;1510-01-04T00:00:00Z&quot;:0.1270204129402608,&quot;1520-01-04T00:00:00Z&quot;:0.12318976763449249,&quot;1530-01-04T00:00:00Z&quot;:0.08191010423457444,&quot;1540-01-04T00:00:00Z&quot;:0.3307943774126089,&quot;1550-01-04T00:00:00Z&quot;:0.056523341894422145,&quot;1560-01-04T00:00:00Z&quot;:0.06319501739569483,&quot;1570-01-04T00:00:00Z&quot;:0.07477335296145975,&quot;1580-01-04T00:00:00Z&quot;:0.06319501739569483,&quot;1589-12-25T00:00:00Z&quot;:0.07893055142897323,&quot;1599-12-25T00:00:00Z&quot;:0.13195507028939765,&quot;1609-12-25T00:00:00Z&quot;:0.08572189225338879,&quot;1619-12-25T00:00:00Z&quot;:0.10111202783311174,&quot;1629-12-25T00:00:00Z&quot;:0.12056840885595824,&quot;1639-12-25T00:00:00Z&quot;:0.12951124638152905,&quot;1649-12-25T00:00:00Z&quot;:0.5132431493468156,&quot;1659-12-25T00:00:00Z&quot;:0.11923612035019478,&quot;1669-12-25T00:00:00Z&quot;:0.10798769306284463,&quot;1679-12-25T00:00:00Z&quot;:0.08383766452860089,&quot;1689-12-25T00:00:00Z&quot;:0.06806311673310972,&quot;1699-12-25T00:00:00Z&quot;:0.08756558473163399,&quot;1709-12-25T00:00:00Z&quot;:0.06687932005096368,&quot;1719-12-25T00:00:00Z&quot;:0.07893055142897323,&quot;1729-12-25T00:00:00Z&quot;:0.09373335848038722,&quot;1739-12-25T00:00:00Z&quot;:0.12511975094555342,&quot;1749-12-25T00:00:00Z&quot;:0.631570890033241,&quot;1759-12-25T00:00:00Z&quot;:0.1457600987574321,&quot;1769-12-25T00:00:00Z&quot;:0.20143256904533705,&quot;1779-12-25T00:00:00Z&quot;:0.1473948425712834,&quot;1789-12-25T00:00:00Z&quot;:0.1755866479163993,&quot;1799-12-25T00:00:00Z&quot;:0.14410681164656755,&quot;1809-12-25T00:00:00Z&quot;:0.526456597945896,&quot;1819-12-25T00:00:00Z&quot;:0.32715249348524034,&quot;1829-12-25T00:00:00Z&quot;:0.3224804028520837,&quot;1839-12-25T00:00:00Z&quot;:0.4550041252490028,&quot;1849-12-25T00:00:00Z&quot;:1,&quot;1859-12-25T00:00:00Z&quot;:0.5345865202227175,&quot;1869-12-25T00:00:00Z&quot;:0.472401248195985,&quot;1879-12-25T00:00:00Z&quot;:0.43379593559416757,&quot;1889-12-25T00:00:00Z&quot;:0.23947493148866666,&quot;1899-12-25T00:00:00Z&quot;:0.23133174662550127,&quot;1909-12-25T00:00:00Z&quot;:0.33272041626470866,&quot;1919-12-25T00:00:00Z&quot;:0.2748801655836774,&quot;1929-12-25T00:00:00Z&quot;:0.2884906186701794,&quot;1939-12-25T00:00:00Z&quot;:0.16624013579037955,&quot;1949-12-25T00:00:00Z&quot;:0.3795911706942215,&quot;1959-12-25T00:00:00Z&quot;:0.2571656767601664,&quot;1969-12-25T00:00:00Z&quot;:0.17421664013428945,&quot;1979-12-25T00:00:00Z&quot;:0.23029360340653854,&quot;1989-12-25T00:00:00Z&quot;:0.25119522593701166,&quot;1999-12-25T00:00:00Z&quot;:0.1690983418052287,&quot;2009-12-25T00:00:00Z&quot;:0.14130835473605538,&quot;2019-12-25T00:00:00Z&quot;:0},&quot;periods&quot;:{&quot;Gothic art&quot;:&quot;1140 - 1500&quot;,&quot;Renaissance&quot;:&quot;1420 - 1600&quot;,&quot;Mannerism&quot;:&quot;1520 - 1600&quot;,&quot;Baroque style&quot;:&quot;1575 - 1770&quot;,&quot;Rococo&quot;:&quot;1720 - 1780&quot;,&quot;Classicism&quot;:&quot;1770 - 1840&quot;,&quot;Romanticism&quot;:&quot;1800 - 1840&quot;,&quot;Realism&quot;:&quot;1840 - 1890&quot;,&quot;Impressionism&quot;:&quot;1850 - 1910&quot;,&quot;Symbolism&quot;:&quot;1880 - 1910&quot;,&quot;Art Nouveau&quot;:&quot;1890 - 1910&quot;,&quot;Expressionism&quot;:&quot;1905 - 1925&quot;,&quot;Cubism&quot;:&quot;1907 - 1915&quot;,&quot;Abstract Painting&quot;:&quot;1910 - 1950&quot;,&quot;Surrealism&quot;:&quot;1917 - 1950&quot;,&quot;New Objectivity&quot;:&quot;1918 - 1933&quot;,&quot;Tachisme&quot;:&quot;1945 - 1960&quot;,&quot;Pop art&quot;:&quot;1950 - 1960&quot;,&quot;Contemporary art&quot;:&quot;1960 - 2020&quot;,&quot;14th century&quot;:&quot;1301 - 1400&quot;,&quot;15th century&quot;:&quot;1401 - 1500&quot;,&quot;16th century&quot;:&quot;1501 - 1600&quot;,&quot;17th century&quot;:&quot;1601 - 1700&quot;,&quot;18th century&quot;:&quot;1701 - 1800&quot;,&quot;19th century&quot;:&quot;1801 - 1900&quot;,&quot;20th century&quot;:&quot;1901 - 2000&quot;,&quot;21th century&quot;:&quot;2001 - 2100&quot;}}" data-periods-placeholder="Period&lt;span class=&quot;visible-md-inline visible-lg-inline&quot;&gt; from - till or century&lt;/span&gt;" data-periods-error="Invalid period (please enter period from - till or century)">
                <form class="dsHeaderSearch" action="/en/search">
                    <div class="dsHeaderSearch__wrap">
                        <div class="dsHeaderSearch__field">
                            <label class="dsHeaderSearch__fieldLabel" for="dsHeaderSearchMode__query">Search term</label>

                            <input class="dsHeaderSearch__fieldInput" id="dsHeaderSearchMode__query" name="q" type="search" autocomplete="off"/>
                        </div>

                        <div class="dsHeaderSearchMode">
                            <label class="dsHeaderSearchMode__label" for="dsHeaderSearchMode__fulltext" data-mode="Fulltext">
                                <input class="dsHeaderSearchMode__input" id="dsHeaderSearchMode__fulltext" type="radio" name="mode" checked/>
                                <span class="dsHeaderSearchMode__caption">
                                            in
                                            <strong>full text</strong>
                                        </span>
                            </label>

                            <label class="dsHeaderSearchMode__label" for="dsHeaderSearchMode__keyword" data-mode="Keyword">
                                <input class="dsHeaderSearchMode__input" id="dsHeaderSearchMode__keyword" type="radio" name="mode"/>
                                <span class="dsHeaderSearchMode__caption">
                                            as
                                            <strong>Keyword</strong>
                                        </span>
                            </label>

                            <label class="dsHeaderSearchMode__label" for="dsHeaderSearchMode__period" data-mode="Period">
                                <input class="dsHeaderSearchMode__input" id="dsHeaderSearchMode__period" type="radio" name="mode"/>
                                <span class="dsHeaderSearchMode__caption">
                                            in
                                            <strong>period</strong>
                                        </span>
                            </label>
                        </div>
                    </div>

                    <div class="dsHeader__action">
                        <button class="dsHeader__actionButton cancel" data-action="cancel">
                            <svg class="dsHeader__actionButtonImage cancel" width="40" height="40" viewBox="0 0 40 40">
                                <path fill="none" stroke="#EDEAE3" stroke-width="3" stroke-linecap="square" d="M20 20L9.5 9.5 20 20 9.5 30.5 20 20zm0 0l10.5 10.5L20 20 30.5 9.5 20 20z"></path>
                            </svg>

                            <span class="dsHeader__actionButtonCaption">Cancel</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div class="dsHeaderMenu">
            <ul class="dsHeaderMenu__list">
                <li class="dsHeaderMenu__item">
                    <a class="dsHeaderMenu__link" href="homepage.html">Home</a>
                </li>

                <li class="dsHeaderMenu__item">
                    <a class="dsHeaderMenu__link" href="works.html">Works</a>
                </li>

                <li class="dsHeaderMenu__item">
                    <a class="dsHeaderMenu__link" href="artist.html">Artists</a>
                </li>

                <li class="dsHeaderMenu__item">
                    <a class="dsHeaderMenu__link" href="/en/user">Login</a>
                </li>

                <li class="dsHeaderMenu__item">
                    <ul class="dsHeaderMenu__list secondary">
                        <li class="dsHeaderMenu__item secondary-wide">
                            <a class="dsHeaderMenu__link" href="/en/concept">About the digital collection</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</header>

<script id="dsRandomTerms" type="application/json">
    ["still life", "watercolour", "Albrecht D\u00fcrer", "circle", "pearl necklace", "depiction of a saint", "distance", "tree trunk", "bonnet", "silver gelatin", "crown", "Giovanni Bellini", "painting", "abstraction", "Berlin", "diagonal", "smile", "Pieter Bruegel the Elder", "deer", "Alps", "sensuous", "Old Testament", "genre", "fruit", "flower", "halberd", "light reflection", "Modern Art, 1800-1945", "shape", "ease", "horseman", "horizon", "park landscape", "pointer", "bathing scene", "Portugal", "landscape", "Antoine Watteau", "sky", "Old Masters, 1300-1800", "figure seen from the back", "collage", "Joseph Beuys", "cloud", "shadow", "armour", "Max Beckmann", "ermine", "annoying", "Lucas Cranach the Elder", "musical instrument", "Rembrandt", "nocturne", "building", "Corinne Wasmuht", "Ernst Ludwig Kirchner", "Guido Reni", "19th century", "art print", "photograph", "Henri Matisse", "apostle", "pair of lovers", "updo", "Rosemarie Trockel", "fire", "glove", "Department of Prints and Drawings", "red", "brush drawing", "earring", "nudity", "putto", "gold chain", "Giovanni Battista Tiepolo", "scallop", "Isa Genzken", "Golgotha", "canvas", "Contemporary Art, 1945-present", "New Testament", "self-portrait", "denim jacket", "  sculpture", "drape", "pliss\u00e9", "green", "secret", "Hans Holbein the Elder", "Mary", "history", "window", "Passion", "Biblical portrayal", "Claude Monet", "portrait", "animal", "capital", "rock", "Pablo Picasso", "Indian ink", "rowboat", "crescent moon", "Anselm Kiefer"]
</script>

<div class="dsSlideshow">
    <ul class="dsSlideshow__slides">
        <li class="dsSlideshow__slide">

            <div class="dsArtworkViewer" data-path="/images/108065/pyramid_files/" data-info="{&quot;type&quot;:&quot;pyramid&quot;,&quot;width&quot;:4320,&quot;height&quot;:2880,&quot;overlap&quot;:1,&quot;tile&quot;:510,&quot;format&quot;:&quot;jpg&quot;}" data-center="{&quot;x&quot;:0.2666015625,&quot;y&quot;:0.41874084919472915}" data-scale-mode="Home"></div>
            <img class = "" src="img/32.jpg" style="  display: block;margin-left: auto;margin-right: auto;width: 100%;">
            <a class="dsSlideshow__slideLink" href="">

                        <span class="dsSlideshow__slideAction">
                            <span class="dsSlideshow__slideActionCaption">Explore this work</span>

                            <svg class="dsSlideshow__slideActionWidget" width="15" height="15" viewBox="0 0 15 15">
                                <path fill="none" stroke="#fff" stroke-linecap="square" d="M13 7.5H2M8.5 12L13 7.5 8.5 3"></path>
                            </svg>
                        </span>
            </a>
        </li>
        <li class="dsSlideshow__slide">
            <div class="dsArtworkViewer" data-path="/images/109085/pyramid_files/" data-info="{&quot;type&quot;:&quot;pyramid&quot;,&quot;width&quot;:5773,&quot;height&quot;:4584,&quot;overlap&quot;:1,&quot;tile&quot;:510,&quot;format&quot;:&quot;jpg&quot;}" data-center="{&quot;x&quot;:0.49853515625,&quot;y&quot;:0.528290282902829}" data-scale-mode="Home"></div>

            <a class="dsSlideshow__slideLink" href="/en/work/the-sleep">
                        <span class="dsSlideshow__slideAction">
                            <span class="dsSlideshow__slideActionCaption">Explore this work</span>

                            <svg class="dsSlideshow__slideActionWidget" width="15" height="15" viewBox="0 0 15 15">
                                <path fill="none" stroke="#fff" stroke-linecap="square" d="M13 7.5H2M8.5 12L13 7.5 8.5 3"></path>
                            </svg>
                        </span>
            </a>
        </li>
        <li class="dsSlideshow__slide">
            <div class="dsArtworkViewer" data-path="/images/4998/pyramid_files/" data-info="{&quot;type&quot;:&quot;pyramid&quot;,&quot;width&quot;:4033,&quot;height&quot;:5520,&quot;overlap&quot;:1,&quot;tile&quot;:510,&quot;format&quot;:&quot;jpg&quot;}" data-center="{&quot;x&quot;:0.4177807486631016,&quot;y&quot;:0.48095703125}" data-scale-mode="Home"></div>

            <a class="dsSlideshow__slideLink" href="/en/work/17507-alma-3">
                        <span class="dsSlideshow__slideAction">
                            <span class="dsSlideshow__slideActionCaption">Explore this work</span>

                            <svg class="dsSlideshow__slideActionWidget" width="15" height="15" viewBox="0 0 15 15">
                                <path fill="none" stroke="#fff" stroke-linecap="square" d="M13 7.5H2M8.5 12L13 7.5 8.5 3"></path>
                            </svg>
                        </span>
            </a>
        </li>
        <li class="dsSlideshow__slide">
            <div class="dsArtworkViewer" data-path="/images/982/pyramid_files/" data-info="{&quot;type&quot;:&quot;pyramid&quot;,&quot;width&quot;:3899,&quot;height&quot;:5035,&quot;overlap&quot;:1,&quot;tile&quot;:510,&quot;format&quot;:&quot;jpg&quot;}" data-center="{&quot;x&quot;:0.5794451450189155,&quot;y&quot;:0.27783203125}" data-scale-mode="Home"></div>

            <a class="dsSlideshow__slideLink" href="/en/work/bishop-julians-finding-of-the-true-child">
                        <span class="dsSlideshow__slideAction">
                            <span class="dsSlideshow__slideActionCaption">Explore this work</span>

                            <svg class="dsSlideshow__slideActionWidget" width="15" height="15" viewBox="0 0 15 15">
                                <path fill="none" stroke="#fff" stroke-linecap="square" d="M13 7.5H2M8.5 12L13 7.5 8.5 3"></path>
                            </svg>
                        </span>
            </a>
        </li>
        <li class="dsSlideshow__slide">
            <div class="dsArtworkViewer" data-path="/images/6698/pyramid_files/" data-info="{&quot;type&quot;:&quot;pyramid&quot;,&quot;width&quot;:5773,&quot;height&quot;:9542,&quot;overlap&quot;:1,&quot;tile&quot;:510,&quot;format&quot;:&quot;jpg&quot;}" data-center="{&quot;x&quot;:0.5,&quot;y&quot;:0.544921875}" data-scale-mode="Home"></div>

            <a class="dsSlideshow__slideLink" href="/en/work/assumption-of-the-virgin-1">
                        <span class="dsSlideshow__slideAction">
                            <span class="dsSlideshow__slideActionCaption">Explore this work</span>

                            <svg class="dsSlideshow__slideActionWidget" width="15" height="15" viewBox="0 0 15 15">
                                <path fill="none" stroke="#fff" stroke-linecap="square" d="M13 7.5H2M8.5 12L13 7.5 8.5 3"></path>
                            </svg>
                        </span>
            </a>
        </li>
    </ul>

    <div class="dsSlideshow__title">
        <div class="dsSlideshow__titleWrap">
            <h1 class="dsSlideshow__titleHeading">
                        <span class="dsSlideshow__titleBrand">
                            Digital
                            <br>
                            <strong>Collection</strong>
                        </span>
            </h1>

            <form class="dsSlideshowSearch" action="/en/search" data-url="/en/search/1/prompt/global" data-label-base="Search for %s" data-label-wrap="“%s”">
                <div class="dsSlideshowSearch__field">
                    <label class="dsSlideshowSearch__fieldLabel" for="dsSlideshowSearch__query">Search term</label>

                    <input class="dsSlideshowSearch__fieldInput" id="dsSlideshowSearch__query" name="q" type="search" autocomplete="off"/>
                </div>
            </form>
        </div>
    </div>

    <button class="dsSlideshowScroller">
        <svg class="dsSlideshowScroller__image" width="30" height="40" viewBox="0 0 30 40">
            <path class="dsSlideshowScroller__arrow first" fill="#F3F3F3" d="M15 17.414L.293 2.707l1.414-1.414L15 14.586 28.293 1.293l1.414 1.414"></path>
            <path class="dsSlideshowScroller__arrow second" fill="#F3F3F3" d="M15 28.414L.293 13.707l1.414-1.414L15 25.586l13.293-13.293 1.414 1.414"></path>
            <path class="dsSlideshowScroller__arrow third" fill="#F3F3F3" d="M15 39.414L.293 24.707l1.414-1.414L15 36.586l13.293-13.293 1.414 1.414"></path>
        </svg>
    </button>
</div>




<div class="dsHome">


    <div class="dsRollTheDice" data-url="/en?random=json">
        <div class="dsRollTheDicePreview" data-pyramid-url="/images/105813/pyramid_files/" data-pyramid-data="{&quot;type&quot;:&quot;pyramid&quot;,&quot;width&quot;:4866,&quot;height&quot;:7291,&quot;overlap&quot;:1,&quot;tile&quot;:510,&quot;format&quot;:&quot;jpg&quot;}" data-center="{&quot;x&quot;:0.5783308931185944,&quot;y&quot;:0.3330078125}">
            <div class="dsRollTheDicePreview__caption">
                <div class="dsRollTheDicePreview__captionTitle">Tobias Rehberger</div>

                <div class="dsRollTheDicePreview__captionLabel">Suck and pull your pants down (for peace)</div>

                <a class="dsRollTheDicePreview__link" href="/en/work/suck-and-pull-your-pants-down">
                    <span class="dsRollTheDicePreview__linkCaption">Explore this work</span>

                    <svg class="dsRollTheDicePreview__linkWidget" width="15" height="15" viewBox="0 0 15 15">
                        <path fill="none" stroke="#fff" stroke-linecap="square" d="M13 7.5H2M8.5 12L13 7.5 8.5 3"></path>
                    </svg>
                </a>
            </div>
        </div>

        <div class="dsRollTheDice__formWrapper">
            <div class="dsRollTheDice__form">
                <div class="dsRollTheDice__intro">
                    <h2 class="dsRollTheDice__introTitle">
                        So much
                        <br>
                        <strong>to explore</strong>
                    </h2>

                    <p class="dsRollTheDice__introBody">Bet you haven&#039;t seen everything of our collection? Just dice three words and we&#039;ll show you one of the matching artworks!</p>
                </div>

                <div class="dsRollTheDice__playArea">
                    <ul class="dsRollTheDice__dices">
                        <li class="dsRollTheDice__dice">
                            <a class="dsRollTheDice__diceLink" href="/en/search?scope=all&amp;q=term(12047)">
                                <span class="dsRollTheDice__diceLabel">function</span>
                            </a>
                        </li>
                        <li class="dsRollTheDice__dice">
                            <a class="dsRollTheDice__diceLink" href="/en/search?scope=all&amp;q=term(2819)">
                                <span class="dsRollTheDice__diceLabel">machine</span>
                            </a>
                        </li>
                        <li class="dsRollTheDice__dice">
                            <a class="dsRollTheDice__diceLink" href="/en/search?scope=all&amp;q=term(3041)">
                                <span class="dsRollTheDice__diceLabel">white</span>
                            </a>
                        </li>
                    </ul>

                    <div class="dsRollTheDice__buttonContainer">
                        <button class="dsRollTheDice__button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="dsRollTheDice__buttonImage" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#EDEAE3" d="M2.958 6.026C-.405 11.012.916 17.806 5.9 21.17c4.987 3.363 11.782 2.042 15.146-2.943 3.307-4.902 2.076-11.547-2.704-14.965l2.236-.496c.316-.07.572-.305.67-.615.097-.31.02-.647-.2-.887-.218-.24-.55-.343-.866-.272l-4.3.94c-.27.06-.5.24-.62.488-.082.17-.11.36-.078.547l.74 4.338c.054.32.273.588.578.702.304.114.646.058.896-.148.252-.207.373-.53.32-.852l-.383-2.228c3.96 2.87 4.957 8.35 2.203 12.434-2.814 4.172-8.45 5.268-12.62 2.454-4.172-2.814-5.268-8.45-2.454-12.62 1.232-1.827 2.988-3.064 4.94-3.64.447-.166.69-.648.56-1.106-.13-.46-.595-.738-1.06-.64-2.347.694-4.477 2.19-5.946 4.368z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="dsAccent">
        <div class="dsArtworkRelated">
            <div class="dsArtworkRelated__header container">
                <div class="dsArtworkRelated__tabsWrap noMarginTop">
                    <div class="dsArtworkRelated__tabsLine"></div>
                    <ul class="dsArtworkRelated__tabsList">
                        <li class="dsArtworkRelated__tab" data-index="1">Horse</li>
                        <li class="dsArtworkRelated__tab" data-index="2">Boat</li>
                        <li class="dsArtworkRelated__tab" data-index="3">Still life</li>
                        <li class="dsArtworkRelated__tab" data-index="4">Shape</li>
                        <li class="dsArtworkRelated__tab" data-index="5">Beckmann</li>
                        <li class="dsArtworkRelated__tab" data-index="6">Pair</li>
                    </ul>
                </div>

                <div class="dsArtworkScrollerArrows">
                    <button class="dsArtworkScrollerArrows__button backward">
                        <svg class="dsArtworkScrollerArrows__image" width="16" height="16" viewBox="0 0 16 16">
                            <path fill="none" stroke="#EEEBE4" d="M11.5 1l-7 7 7 7"/>
                        </svg>
                    </button>
                    <button class="dsArtworkScrollerArrows__button forward">
                        <svg class="dsArtworkScrollerArrows__image" width="16" height="16" viewBox="0 0 16 16">
                            <path fill="none" stroke="#EEEBE4" d="M4.5 15l7-7-7-7"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="dsArtworkRelated__container">
                <div class="dsArtworkRelatedItem" data-index="1">
                    <div class="dsArtworkScroller" data-has-toc-padding="false">
                        <div class="dsArtworkScroller__view">
                            <ul class="dsArtworkScroller__list">

                                <li class="dsArtworkScrollerItem">
                                    <a class="dsArtworkScrollerItem__link" href="/en/work/the-adoration-of-the-magi">
                                        <div class="dsArtworkImage">
                                            <img class="dsArtworkImage__image" width="753" height="1024" alt="The Adoration of the Magi, Master of the von Groote Adoration" data-srcset="/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-sm.jpg 94w,/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-md.jpg 188w,/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-lg.jpg 376w,/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-xl.jpg"/>
                                            <noscript>
                                                <img class="dsArtworkImage__imageNoJS" src="/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-xl.jpg" width="753" height="1024" alt="The Adoration of the Magi, Master of the von Groote Adoration"/>
                                            </noscript>
                                        </div>
                                        <span class="dsArtworkScrollerItem__creator">Master of the von Groote Adoration</span>
                                        <span class="dsArtworkScrollerItem__title">The Adoration of the Magi</span>
                                    </a>
                                </li>
                                <li class="dsArtworkScrollerItem">
                                    <a class="dsArtworkScrollerItem__link" href="/en/work/the-adoration-of-the-magi">
                                        <div class="dsArtworkImage">
                                            <img class="dsArtworkImage__image" width="753" height="1024" alt="The Adoration of the Magi, Master of the von Groote Adoration" data-srcset="/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-sm.jpg 94w,/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-md.jpg 188w,/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-lg.jpg 376w,/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-xl.jpg"/>
                                            <noscript>
                                                <img class="dsArtworkImage__imageNoJS" src="/images/103215/meister-der-von-grooteschen-anbetung-adoration-magi-2253a--thumb-xl.jpg" width="753" height="1024" alt="The Adoration of the Magi, Master of the von Groote Adoration"/>
                                            </noscript>
                                        </div>
                                        <span class="dsArtworkScrollerItem__creator">Master of the von Groote Adoration</span>
                                        <span class="dsArtworkScrollerItem__title">The Adoration of the Magi</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="dsArtworkRelatedItem" data-index="2" data-url="/en?interest=boot"></div>
                <div class="dsArtworkRelatedItem" data-index="3" data-url="/en?interest=stillleben"></div>
                <div class="dsArtworkRelatedItem" data-index="4" data-url="/en?interest=form"></div>
                <div class="dsArtworkRelatedItem" data-index="5" data-url="/en?interest=beckmann"></div>
                <div class="dsArtworkRelatedItem" data-index="6" data-url="/en?interest=paar"></div>
            </div>
        </div>
        <div class="dsArtworkRelated">
            <div class="dsArtworkRelated__header container">
                <div class="dsArtworkRelated__tabsWrap noMarginTop">
                    <div class="dsArtworkRelated__tabsLine"></div>
                    <ul class="dsArtworkRelated__tabsList">
                        <li class="dsArtworkRelated__tab" data-index="1">Most viewed</li>
                        <li class="dsArtworkRelated__tab" data-index="2">Recently added</li>
                    </ul>
                </div>

                <div class="dsArtworkScrollerArrows">
                    <button class="dsArtworkScrollerArrows__button backward">
                        <svg class="dsArtworkScrollerArrows__image" width="16" height="16" viewBox="0 0 16 16">
                            <path fill="none" stroke="#EEEBE4" d="M11.5 1l-7 7 7 7"/>
                        </svg>
                    </button>
                    <button class="dsArtworkScrollerArrows__button forward">
                        <svg class="dsArtworkScrollerArrows__image" width="16" height="16" viewBox="0 0 16 16">
                            <path fill="none" stroke="#EEEBE4" d="M4.5 15l7-7-7-7"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="dsArtworkRelated__container">
                <div class="dsArtworkRelatedItem" data-index="1">
                    <div class="dsArtworkScroller" data-has-toc-padding="false">
                        <div class="dsArtworkScroller__view">
                            <ul class="dsArtworkScroller__list">

                                <li class="dsArtworkScrollerItem">
                                    <a class="dsArtworkScrollerItem__link" href="/en/work/the-courtyard-of-the-orphanage-in-amsterdam">
                                        <div class="dsArtworkImage">
                                            <img class="dsArtworkImage__image" width="1024" height="755" alt="The Courtyard of the Orphanage in Amsterdam: Free Period in the Amsterdam Orphanage, Max Liebermann" data-srcset="/images/1341/max-liebermann-courtyard-orphanage-amsterdam-1351--thumb-sm.jpg 128w,/images/1341/max-liebermann-courtyard-orphanage-amsterdam-1351--thumb-md.jpg 256w,/images/1341/max-liebermann-courtyard-orphanage-amsterdam-1351--thumb-lg.jpg 512w,/images/1341/max-liebermann-courtyard-orphanage-amsterdam-1351--thumb-xl.jpg"/>
                                            <noscript>
                                                <img class="dsArtworkImage__imageNoJS" src="/images/1341/max-liebermann-courtyard-orphanage-amsterdam-1351--thumb-xl.jpg" width="1024" height="755" alt="The Courtyard of the Orphanage in Amsterdam: Free Period in the Amsterdam Orphanage, Max Liebermann"/>
                                            </noscript>
                                        </div>
                                        <span class="dsArtworkScrollerItem__creator">Max Liebermann</span>
                                        <span class="dsArtworkScrollerItem__title">The Courtyard of the Orphanage in Amsterdam: Free Period in the Amsterdam Orphanage</span>
                                    </a>
                                </li>



                            </ul>
                        </div>
                    </div>
                </div>
                <div class="dsArtworkRelatedItem" data-index="2" data-url="/en?interest=recently-added"></div>
            </div>
        </div>
    </div>


    <div class="dsHome__bgBlock">
        <div class="dsHome__bgBlockImage dsImage" data-scale-mode="Cover" data-focus-y="0">
            <img class="dsImage__image" width="2000" height="1091" data-srcset="/assets/images/index-museum-1024w.jpg 1024w, /assets/images/index-museum-2000w.jpg">
        </div>
        <div class="dsHomeBlock container museum">
            <div class="row">
                <div class="col-md-8">
                    <h2 class="dsHomeTitle noMarginTop">
                        About the
                        <br>
                        <strong>Städel Museum</strong>
                    </h2>
                    <p class="dsHomeCopy withMediumMarginTop">Established as a civic foundation in 1815 by the banker and businessman Johann Friedrich Städel, the Städel Museum ranks as Germany’s oldest museum foundation. Under a single roof, its collection offers a virtually complete survey of seven hundred years of European art from the early fourteenth century to the present, with focuses on the Renaissance, the Baroque, early Modern art and much more.</p>
                    <p class="withMediumMarginTop">
                        <a class="dsButton milky" href="https://www.staedelmuseum.de">Visit the Städel Museum</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<footer class="dsFooter">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <p class="dsFooter__caption">Legal info</p>

                <ul class="dsFooter__links">
                    <li class="dsFooter__linksItem">
                        <a class="dsFooter__linksLink" href="" target="_blank">Imprint</a>
                    </li>

                    <li class="dsFooter__linksItem">
                        <a class="dsFooter__linksLink" href="" target="_blank">Privacy</a>
                    </li>

                    <li>
                        website layout template
                        <br/>
                        Copyright © 2022 Städel Museum
                    </li>
                </ul>
            </div>

            <div class="col-sm-4">
                <p class="dsFooter__caption">Digital Collection</p>

                <ul class="dsFooter__links">
                    <li class="dsFooter__linksItem">
                        <a class="dsFooter__linksLink" href="/en">Home</a>
                    </li>

                    <li class="dsFooter__linksItem">
                        <a class="dsFooter__linksLink" href="/en/search">Works</a>
                    </li>

                    <li class="dsFooter__linksItem">
                        <a class="dsFooter__linksLink" href="/en/person">Artists</a>
                    </li>

                    <li class="dsFooter__linksItem">
                        <a class="dsFooter__linksLink" href="/en/album">Albums</a>
                    </li>

                    <li class="dsFooter__linksItem">
                        <a class="dsFooter__linksLink" href="/en/concept">About the digital collection</a>
                    </li>
                </ul>
            </div>

            <div class="col-sm-4">
                <p class="dsFooter__caption">Social Media</p>

                <ul class="dsFooter__social">
                    <li class="dsFooter__socialItem">
                        <a class="dsFooter__socialLink circle" href="http://facebook.com/staedelmuseum" target="_blank">
                            <svg class="dsFooter__socialImage" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#EDEAE3" d="M12.0384615,18 L12.0384615,10 L15,10 L15,7 L12.0384615,7 L12,6 C12.1927268,5.21791631 11.4,5 13,5 L15,5 L15,2 C13.9255895,2 13.0922562,2 12.5,2 C10.2960958,2 9.32622136,2.82551475 8.96153846,5.5 L8.96153846,7 L6,7 L6,10 L8.96153846,10 L8.96153846,18 L12.0384615,18 Z"/>
                            </svg>
                        </a>
                    </li>

                    <li class="dsFooter__socialItem">
                        <a class="dsFooter__socialLink circle" href="http://twitter.com/staedelmuseum" target="_blank">
                            <svg class="dsFooter__socialImage" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#EDEAE3" d="M16.7191686,6.94418652 C16.7191686,6.79121416 16.7160034,6.63893201 16.7090327,6.48733834 C17.4100891,5.98845842 18.0194454,5.36589153 18.5,4.6571917 C17.8566937,4.93867326 17.1643873,5.1281655 16.4381299,5.21360938 C17.1794373,4.77605472 17.7485425,4.08389335 18.0169954,3.25874219 C17.3232885,3.66356562 16.555031,3.95779526 15.737073,4.11662343 C15.0818666,3.42962938 14.1491074,3 13.1162476,3 C11.1334781,3 9.52556196,4.58277384 9.52556196,6.53385008 C9.52556196,6.81119674 9.55706195,7.08096495 9.61866311,7.33970656 C6.63453435,7.19190327 3.98850728,5.78552963 2.21784061,3.64702832 C1.90948715,4.16933666 1.73168601,4.77605472 1.73168601,5.42342756 C1.73168601,6.64961235 2.36554176,7.73212759 3.32945096,8.36537482 C2.3125,8.25 1.4375,7.79665175 1.4375,7.8125 C1.4375,9.52412757 3.29458389,10.9886416 4.9375,11.3125 C4.0625,11.75 3.625,11.75 3.1875,11.75 C3.64460402,13.1543065 5.11598387,13.4714031 6.6875,13.5 C5.45863733,14.4481473 3.5574661,15.25 1.875,15.25 C1.58554653,15.25 1.28105288,15.2827174 1,15.25 C2.58901612,16.2525849 4.47588454,17 6.50380351,17 C13.1078336,17 16.7191686,11.6142981 16.7191686,6.94418652 Z"/>
                            </svg>
                        </a>
                    </li>

                    <li class="dsFooter__socialItem">
                        <a class="dsFooter__socialLink circle" href="http://youtube.com/staedelmuseum" target="_blank">
                            <svg class="dsFooter__socialImage" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#EDEAE3" d="M18.8068951,6.00389702 C18.8068951,6.00389702 18.6306635,4.62756211 18.0925945,4.02280889 C17.4101656,3.22828829 16.6452453,3.22411758 16.2946568,3.17823975 C13.7824185,2.97596022 10.0103114,3.00098449 10.0103114,3.00098449 C10.0103114,3.00098449 6.23820435,2.97596022 3.72596605,3.17823975 C3.37537756,3.22411758 2.61045724,3.22828829 1.92802833,4.02280889 C1.38995938,4.62756211 1.21372774,6.00389702 1.21372774,6.00389702 C1.21372774,6.00389702 1.03374648,7.6179625 1,9.23411333 L1,10.7480817 C1.03374648,12.3642326 1.21372774,13.978298 1.21372774,13.978298 C1.21372774,13.978298 1.38808457,15.354633 1.92802833,15.9593862 C2.61045724,16.7539068 3.5084887,16.7288825 3.9078221,16.8122967 C5.31955005,16.9624424 9.85095303,16.9978934 10.0084366,16.9999788 C10.0103114,16.9999788 13.7842933,17.0062348 16.2965316,16.8039553 C16.6471201,16.7580775 17.4120404,16.7539068 18.0944693,15.9593862 C18.6325383,15.354633 18.8087699,13.978298 18.8087699,13.978298 C18.8087699,13.978298 18.9887512,12.3621472 19,10.7480817 L19,9.23411333 C18.9868764,7.6179625 18.8068951,6.00389702 18.8068951,6.00389702 Z M8.17675242,12.7959012 L8.17675242,7.16544026 L13.0024997,9.98067075 L8.17675242,12.7959012 Z"/>
                            </svg>
                        </a>
                    </li>

                    <li class="dsFooter__socialItem">
                        <a class="dsFooter__socialLink circle" href="http://instagram.com/staedelmuseum" target="_blank">
                            <svg class="dsFooter__socialImage" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#EDEAE3" fill-rule="evenodd" d="M10,2 C12.1726754,2 12.4451409,2.00915232 13.2984102,2.04814609 C14.1499261,2.08703466 14.7314663,2.22225047 15.240314,2.41998957 C15.7664143,2.62442634 16.2125283,2.89797886 16.6572747,3.34272527 C17.1020211,3.78747167 17.3755737,4.2336558 17.5800104,4.75972105 C17.7778197,5.26860379 17.9130355,5.85014399 17.951889,6.70165995 C17.9908477,7.55492923 18,7.82732457 18,10 C18,12.1727456 17.9908477,12.4451409 17.951889,13.2984102 C17.9130355,14.1499261 17.7778197,14.7314663 17.5800104,15.2403491 C17.3755737,15.7664143 17.1020211,16.2125985 16.6572747,16.6573449 C16.2125283,17.1020913 15.7664143,17.3756438 15.240314,17.5800806 C14.7314663,17.7778197 14.1499261,17.9130355 13.2984102,17.951924 C12.4451409,17.9908477 12.1726754,18.0000701 10,18.0000701 C7.82732457,18.0000701 7.55489417,17.9908477 6.70162489,17.951924 C5.85007386,17.9130355 5.26853366,17.7778197 4.75972105,17.5800806 C4.23362073,17.3756438 3.78747167,17.1020913 3.34272527,16.6573449 C2.89797886,16.2125985 2.62442634,15.7664143 2.42002463,15.2403491 C2.22218034,14.7314663 2.08696453,14.1499261 2.04814609,13.2984102 C2.00918738,12.4451409 2,12.1727456 2,10 C2,7.82732457 2.00918738,7.55492923 2.04814609,6.70165995 C2.08696453,5.85014399 2.22218034,5.26860379 2.42002463,4.75972105 C2.62442634,4.2336558 2.89797886,3.78747167 3.34272527,3.34272527 C3.78747167,2.89797886 4.23362073,2.62442634 4.75972105,2.41998957 C5.26853366,2.22225047 5.85007386,2.08703466 6.70162489,2.04814609 C7.55489417,2.00915232 7.82732457,2 10,2 Z M10,3.44143702 C7.86389876,3.44143702 7.61093018,3.44957241 6.76730414,3.48804019 C5.98735858,3.52363252 5.56372212,3.65400918 5.2818238,3.76352136 C4.90840233,3.90866095 4.64189814,4.08202894 4.36196354,4.36196354 C4.082064,4.64193321 3.90869601,4.90840233 3.76355643,5.2818238 C3.65400918,5.56372212 3.52366759,5.98735858 3.48804019,6.76730414 C3.44960748,7.61093018 3.44143702,7.86389876 3.44143702,10 C3.44143702,12.1361714 3.44960748,12.38914 3.48804019,13.2326959 C3.52366759,14.0127115 3.65400918,14.436348 3.76355643,14.7182463 C3.90869601,15.0916327 4.082064,15.3581369 4.36196354,15.6381066 C4.64189814,15.9180412 4.90840233,16.0914092 5.2818238,16.2365137 C5.56372212,16.346061 5.98735858,16.4764376 6.76730414,16.5119598 C7.61078991,16.5504977 7.86372343,16.558598 10,16.558598 C12.1362766,16.558598 12.3892101,16.5504977 13.2326959,16.5119598 C14.0126765,16.4764376 14.4362779,16.346061 14.7181762,16.2365137 C15.0916327,16.0914092 15.3581369,15.9180412 15.6380365,15.6381066 C15.9180412,15.3581369 16.0914092,15.0916327 16.2364786,14.7182463 C16.3459908,14.436348 16.4763675,14.0127115 16.5119598,13.2326959 C16.5504276,12.38914 16.558598,12.1361714 16.558598,10 C16.558598,7.86389876 16.5504276,7.61093018 16.5119598,6.76730414 C16.4763675,5.98735858 16.3459908,5.56372212 16.2364786,5.2818238 C16.0914092,4.90840233 15.9180412,4.64193321 15.6380365,4.36196354 C15.3581369,4.08202894 15.0916327,3.90866095 14.7181762,3.76352136 C14.4362779,3.65400918 14.0126765,3.52363252 13.2326959,3.48804019 C12.3890698,3.44957241 12.1361012,3.44143702 10,3.44143702 Z M10,5.891908 C12.2688273,5.891908 14.108092,7.73120773 14.108092,10 C14.108092,12.2688975 12.2688273,14.1081271 10,14.1081271 C7.73117266,14.1081271 5.891908,12.2688975 5.891908,10 C5.891908,7.73120773 7.73117266,5.891908 10,5.891908 Z M10,12.66669 C11.4727863,12.66669 12.66669,11.4727863 12.66669,10 C12.66669,8.52724874 11.4727863,7.33334502 10,7.33334502 C8.52724874,7.33334502 7.33330996,8.52724874 7.33330996,10 C7.33330996,11.4727863 8.52724874,12.66669 10,12.66669 Z M15.2304604,5.72958591 C15.2304604,6.25975392 14.8006522,6.68959713 14.2704492,6.68959713 C13.7402811,6.68959713 13.3104379,6.25975392 13.3104379,5.72958591 C13.3104379,5.19938283 13.7402811,4.76957469 14.2704492,4.76957469 C14.8006522,4.76957469 15.2304604,5.19938283 15.2304604,5.72958591 Z"/>
                            </svg>
                        </a>
                    </li>

                    <li class="dsFooter__socialItem">
                        <a class="dsFooter__socialLink circle" href="http://www.tripadvisor.de/Attraction_Review-g187337-d190231-Reviews-Staedel_Museum-Frankfurt_Hesse.html" target="_blank">
                            <svg class="dsFooter__socialImage" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#EDEAE3" d="M4.9625,8.33375 C3.63,8.33375 2.5475,9.4175 2.5475,10.75125 C2.5475,12.085 3.63,13.1675 4.96375,13.1675 C6.30125,13.1675 7.38125,12.08875 7.38125,10.75125 C7.38125,9.4175 6.3,8.335 4.965,8.335 L4.9625,8.33375 Z M4.9625,12.425 C4.04,12.425 3.29,11.675 3.29,10.75 C3.29,9.825 4.04,9.0775 4.965,9.0775 C5.89,9.0775 6.6375,9.8275 6.6375,10.7525 C6.6375,11.675 5.8875,12.425 4.9625,12.425 Z M20,5.855 L16.675,5.855 C14.975,4.7125 12.66,4 10,4 C7.34,4 4.86625,4.7125 3.17,5.855 L0,5.855 C0.5175,6.46 0.9,7.2775 0.995,7.84 C0.3975,8.66125 0.045,9.67 0.045,10.7625 C0.045,13.5125 2.2725,15.7425 5.0225,15.7425 C6.5825,15.7425 7.975,15.0225 8.8875,13.89875 C9.25875,14.33375 9.875,15.21125 10,15.465 C10,15.465 10.715,14.3975 11.11875,13.9075 C12.03125,15.02625 13.42125,15.745 14.97875,15.745 C17.72875,15.745 19.95625,13.515 19.95625,10.76375 C19.95625,9.67125 19.6025,8.66375 19.00625,7.8425 C19.09875,7.28 19.48375,6.45875 20,5.855 Z M5.0225,14.77125 C2.81,14.77125 1.015,12.97625 1.015,10.7625 C1.015,8.55 2.80875,6.755 5.0225,6.755 C7.23625,6.755 9.03125,8.55 9.03125,10.7625 C9.03125,12.975 7.235,14.77125 5.0225,14.77125 Z M5.02875,5.78625 C6.45375,5.165 8.2225,4.83125 10.00125,4.83125 C11.785,4.83125 13.39875,5.16875 14.82625,5.79 C12.145,5.87125 10,8.065 10,10.7625 C10,8.01625 7.775,5.79 5.02875,5.7875 L5.02875,5.78625 Z M14.97875,14.77125 C12.76375,14.77125 10.96875,12.97625 10.96875,10.7625 C10.96875,8.55 12.765,6.755 14.9775,6.755 C17.19,6.755 18.98625,8.55 18.98625,10.7625 C18.98625,12.975 17.19125,14.77125 14.97625,14.77125 L14.97875,14.77125 Z M14.975,8.32375 C13.6425,8.32375 12.55875,9.405 12.55875,10.74 C12.55875,12.0725 13.64,13.1575 14.975,13.1575 C16.31,13.1575 17.39375,12.075 17.39375,10.73875 C17.39375,9.4025 16.3125,8.3225 14.975,8.3225 L14.975,8.32375 Z M14.975,12.415 C14.0525,12.415 13.3025,11.6625 13.3025,10.74 C13.3025,9.815 14.0525,9.065 14.975,9.065 C15.9,9.065 16.65,9.815 16.65,10.74 C16.65,11.665 15.90375,12.415 14.975,12.415 Z"/>
                            </svg>
                        </a>
                    </li>

                    <li class="dsFooter__socialItem">
                        <a class="dsFooter__socialLink" href="http://blog.staedelmuseum.de/" title="Städel Blog" target="_blank">
                            <svg class="dsFooter__socialImage" width="90" viewBox="0 0 90 34" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
                                <path fill="#EDEAE3" d="M6.842 21.71c1.218 0 2.072-.728 2.072-1.652 0-1.022-.84-1.428-2.212-1.834-1.232-.364-2.548-.896-2.548-2.45 0-1.386 1.176-2.38 2.8-2.38 1.008 0 1.89.28 2.632.756l-.322.784c-.658-.448-1.512-.728-2.296-.728-1.316 0-1.946.7-1.946 1.498 0 .966.868 1.33 2.212 1.75 1.26.378 2.534.952 2.534 2.534 0 1.442-1.204 2.52-2.954 2.52A5.258 5.258 0 0 1 4 21.696l.322-.798c.7.476 1.526.812 2.52.812zm8.028-7.294v7.91h-.896v-7.91h-3.08v-.84h7.056v.84h-3.08zm6.39-2.73c0 .378-.265.7-.671.7-.392 0-.658-.322-.658-.7 0-.364.266-.686.658-.686.406 0 .672.322.672.686h-.001zm2.703 0c0 .378-.266.7-.658.7-.406 0-.686-.322-.686-.7 0-.364.28-.686.686-.686.392 0 .658.322.658.686zm1.806 10.64h-.91l-.924-2.506h-3.962l-.924 2.506h-.91l3.318-8.75h1.05l3.262 8.75zm-3.809-7.868l-1.68 4.55h3.346l-1.666-4.55zm12.508 3.43c0 2.758-1.722 4.438-4.704 4.438h-2.31v-8.75h2.38c2.87 0 4.634 1.736 4.634 4.312zm-.896.07c0-2.226-1.4-3.556-3.794-3.556H28.35V21.5h1.456c2.24 0 3.766-1.148 3.766-3.542zm3.03 4.368v-8.75h5.292v.826H37.5v3.136h3.668v.812H37.5v3.15h4.396v.826h-5.294zm7.455 0v-8.75h.896v7.91h4.326v.84h-5.222zm12.313-4.578c1.12.21 1.89.952 1.89 2.03 0 1.4-.742 2.548-3.542 2.548h-3.822v-8.75h3.794c2.604 0 3.304.994 3.304 2.282 0 .994-.616 1.61-1.624 1.89zm-.602-1.526c0-.644-.448-.98-1.288-.98h-1.428v2.016h1.316c.924 0 1.4-.378 1.4-1.036zm.252 3.43c0-.742-.602-1.008-1.54-1.008h-1.428v2.016h1.498c1.008 0 1.47-.322 1.47-1.008zm3.913 2.674v-8.75h2.226v6.888h3.668v1.862h-5.894zm15.867-4.41c0 2.772-2.002 4.62-4.606 4.62-2.59 0-4.564-1.61-4.564-4.564 0-2.772 1.988-4.606 4.592-4.606 2.604 0 4.578 1.596 4.578 4.55zm-2.24.056c0-1.68-.882-2.814-2.366-2.814s-2.324 1.12-2.324 2.758c0 1.68.868 2.828 2.366 2.828 1.47 0 2.324-1.134 2.324-2.772zm11.864 3.752c-.952.518-2.198.812-3.472.812-2.8 0-4.704-1.666-4.704-4.55 0-2.87 1.848-4.62 4.718-4.62 1.12 0 2.45.252 3.29.756l-.7 1.862c-.826-.476-1.68-.728-2.52-.728-1.568 0-2.576 1.05-2.576 2.674 0 1.75.882 2.786 2.548 2.786.504 0 1.036-.112 1.4-.266v-1.288h-2.156v-1.764h4.172v4.326z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>



</body>
</html>


<!--<!DOCTYPE html>-->
<!--<html lang="en">-->
<!--<head>-->
<!--    <meta charset="UTF-8">-->
<!--    <title>Art_Store</title>-->
<!--    <link rel="stylesheet"  type="text/css" href="style.css" media="all">-->
<!--</head>-->
<!---->
<!--<body>-->
<!--    --><?php
//
//        //get heroku db connection information
//        $cleardb_url        = parse_url(getenv("CLEARDB_DATABASE_URL"));
//        $cleardb_server     = $cleardb_url["host"];
//        $cleardb_username   = $cleardb_url["user"];
//        $cleardb_password   = $cleardb_url["pass"];
//        $cleardb_db         = substr($cleardb_url["path"],1);
//
//        $active_group   = 'default';
//        $query_builder  = TRUE;
//
//        //connect to DB
//        $conn=mysqli_connect($cleardb_server, $cleardb_username,$cleardb_password, $cleardb_db);
//    ?>
<!---->
<!--    <video autoplay muted loop id = "bgv">-->
<!--        <source src = "background/1.mp4" type="video/mp4">-->
<!--    </video>-->
<!---->
<!--    <header class = "viewport_header">-->
<!--        <div class = container style = "position: absolute; top:0; right: 0">-->
<!--            --><?php
//            if(empty($_SESSION['username'])&&empty($_SESSION['password'])) {
//                if(isset($_SESSION['username']))
//                    echo "successfully logged in，" . $_SESSION['username'] . "<a href='log_out.php' >log out</a>";
//                else
//                    echo "You are not logged in,<a href='log_in_page.php'>go log in</a>";
//            }else{
//                echo "successfully logged in, welcome:".$_SESSION['username']."<a href='log_out.php'>log out</a>";
//            }
//
//            ?>
<!--        </div>-->
<!--        <h1 style = "padding-top: 200pt" id = "hph1">Art Store-->
<!--            <span id="motto"> tranquility is right under your feet</span></h1>-->
<!--        <nav class = viewport_header>-->
<!--            <ul>-->
<!--                <li><a href = "index.php">Home</a>-->
<!--                </li>-->
<!--                <li><a href = "search.php">Search</a>-->
<!--                    <span>-->
<!--                                    </span>-->
<!--                </li>-->
<!--                <li><a href = "log_in_page.php">Sign In</a>-->
<!--                    <span>-->
<!--                                    </span>-->
<!--                </li>-->
<!--                <li><a href="sign_up_page.php">Sign Up</a>-->
<!--                    <span>-->
<!--                                    </span>-->
<!--                </li>-->
<!--                --><?php
//                if (isset($_SESSION['username'])&&isset($_SESSION['password'])){
//                    echo"<li><a href = favorites.php>Personal</a></li>";
//                }
//                ?>
<!--            </ul>-->
<!--        </nav>-->
<!--    </header>-->
<!---->
<!---->
<!--    <section class = viewport_header>-->
<!--        <style>-->
<!--            section{background: black; filter: opacity(.66)}-->
<!--        </style>-->
<!--        <div class = hottest_art_gallery>-->
<!--            <article style="padding-top: 100pt; padding-left: 100pt; padding-right:100pt;text-align: left; color: whitesmoke">-->
<!---->
<!--    --><?php
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
//    ?>
<!--                <div class="slideshow">-->
<!--                    <style>-->
<!--                        .slides{-->
<!--                            text-align: center;-->
<!--                            padding-top: 70px;-->
<!--                        }-->
<!--                        .previous{-->
<!--                            position: absolute;-->
<!--                            top: 450px;-->
<!--                        }-->
<!--                        .description{-->
<!--                            visibility: hidden;-->
<!--                            text-align: center;-->
<!--                        }-->
<!--                        .description:hover{-->
<!--                            visibility: visible;-->
<!--                            transition-duration: 1s;-->
<!--                        }-->
<!--                        .hottest:hover{-->
<!--                            opacity: 30%;-->
<!--                            transition-duration: 3s;-->
<!--                        }-->
<!---->
<!--                    </style>-->
<!--                    <a class = "previous" onclick="plusSlides(-1)">&#10094;</a>-->
<!---->
<!--                    <div class="slides">-->
<!--                        <a href="glossary.php?artworkID=--><?php //echo"$artworkID[0]"?><!--"><img class = hottest src="img/--><?php //echo"$artworkID[0]"?><!--.jpg" style="width: 70%"></a>-->
<!--                    </div>-->
<!--                    <div class="slides">-->
<!--                        <a href="glossary.php?artworkID=--><?php //echo"$artworkID[1]"?><!--"><img class = hottest src="img/--><?php //echo"$artworkID[1]"?><!--.jpg" style="width: 70%"></a>-->
<!--                    </div>-->
<!--                    <div class="slides">-->
<!--                        <a href="glossary.php?artworkID=--><?php //echo"$artworkID[2]"?><!--"><img class = hottest src="img/--><?php //echo"$artworkID[2]"?><!--.jpg" style="width: 70%">-->
<!--                            <!--                        <table class = description>-->-->
<!--                            <!--                            <tr>-->-->
<!--                            <!--                                <th>Name</th-->-->
<!--                            <!--                                <th>-->--><?php ////echo".$title[2]." ?><!--<!--</th>-->-->
<!--                            <!--                            </tr>-->-->
<!--                            <!---->-->
<!--                            <!--                        </table></img>-->-->
<!--                        </a>-->
<!--                    </div>-->
<!---->
<!--                    <a class = "next" onclick="plusSlides(1)">&#10095;</a>-->
<!---->
<!---->
<!--                </div>-->
<!---->
<!--            </article>-->
<!--        </div>-->
<!--    </section>-->
<!---->
<!--    <section class = viewport_header style="filter:opacity(.80); color: whitesmoke">-->
<!---->
<!--        --><?php
//
//        $findRecentSQL = "SELECT * FROM artworks ORDER BY timeReleased DESC LIMIT 3";
//        $find = mysqli_query($conn, $findRecentSQL);
//        for($i = 0; $i < 1; $i++){
//            $each = mysqli_fetch_assoc($find);
//            $recentID[] = $each['artworkID'];
//            $recentFile[] = $each['imageFileName'];
//        }
//        ?>
<!--        <div class="slideshow">-->
<!--            <style>-->
<!--                .slides{-->
<!--                    text-align: center;-->
<!--                    padding-top: 70px;-->
<!--                }-->
<!--                .previous{-->
<!--                    position: absolute;-->
<!--                    top: 450px;-->
<!--                }-->
<!--                .description{-->
<!--                    visibility: hidden;-->
<!--                    text-align: center;-->
<!--                }-->
<!--                .description:hover{-->
<!--                    visibility: visible;-->
<!--                    transition-duration: 1s;-->
<!--                }-->
<!--                .hottest:hover{-->
<!--                    opacity: 30%;-->
<!--                    transition-duration: 3s;-->
<!--                }-->
<!---->
<!--            </style>-->
<!--            <a class = "previous" onclick="plusSlides(-1)">&#10094;</a>-->
<!---->
<!--            <div class="slides">-->
<!--                <a href="glossary.php?artworkID=--><?php //echo"$recentID[0]"?><!--"><img class = hottest src="img/--><?php //echo"$recentID[0]"?><!--.jpg" style="width: 70%"></a>-->
<!--            </div>-->
<!--            <div class="slides">-->
<!--                <a href="glossary.php?artworkID=--><?php //echo"$recentID[1]"?><!--"><img class = hottest src="img/--><?php //echo"$recentID[1]"?><!--.jpg" style="width: 70%"></a>-->
<!--            </div>-->
<!--            <div class="slides">-->
<!--                <a href="glossary.php?artworkID=--><?php //echo"$recentID[2]"?><!--"><img class = hottest src="img/--><?php //echo"$recentID[2]"?><!--.jpg" style="width: 70%">-->
<!--                    <!--                        <table class = description>-->-->
<!--                    <!--                            <tr>-->-->
<!--                    <!--                                <th>Name</th-->-->
<!--                    <!--                                <th>-->--><?php ////echo".$title[2]." ?><!--<!--</th>-->-->
<!--                    <!--                            </tr>-->-->
<!--                    <!---->-->
<!--                    <!--                        </table></img>-->-->
<!--                </a>-->
<!--            </div>-->
<!---->
<!--            <a class = "next" onclick="plusSlides(1)">&#10095;</a>-->
<!---->
<!---->
<!--        </div>-->
<!---->
<!---->
<!---->
<!--    </section>-->
<!---->
<!--    <script>-->
<!--        src="SharedMethod.js";-->
<!---->
<!--        arrayID = --><?php //echo json_encode($artworkID); ?>//;
//        let slideIndex = 1;
//        showSlides(slideIndex);
//
//        function plusSlides(n){
//            showSlides(slideIndex+=n);
//        }
//        function showSlides(n){
//            let i;
//            let slides = document.getElementsByClassName("slides");
//            if(n>slides.length){slideIndex = 1}
//            if(n<1){slideIndex = slides.length}
//            for(i=0;i<slides.length;i++) {
//                slides[i].style.display = "none";
//            }
//            slides[slideIndex-1].style.display = "block";
//        }
//    </script>
//
//    <footer>
//        <div style="color: whitesmoke">Website created by Yanbing Gong. All rights reserved.</div>
//    </footer>
//    <!--    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>-->
//</body>
//</html>




