<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <title>Resume - Peter Wong</title>

    <!-- Meta Tags -->
    <meta name="keywords"
          content="portfolio, web design, web development, freelance, freelancer, resume, brisbane, australia" />
    <meta name="description"
          content="I have recently commenced work as a freelance web developer. Come check out my online portfolio." />

    <!-- Canonical Link -->
    <link rel="canonical" href="http://peterwong.name/resume">

    <!-- Favicon -->
    <link rel="icon" href="favicon.png" type="image/x-icon"/>
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>

    <!-- CSS -->
    <link media="all"
          type="text/css"
          rel="stylesheet"
          href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    <link href="build/css/resume.min.css?v=<?php echo date("ymdGi", filemtime("build/css/app.min.css")); ?>" rel="stylesheet">

    <!-- Fonts -->
    <link href="http://fonts.googleapis.com/css?family=
				Open+Sans:300normal,300italic,400normal,400italic,600normal,600italic,700normal,700italic,800normal,800italic|
				Open+Sans+Condensed:300normal|
				League+Script|
				Montserrat:400normal|
				Muli&subset=all" rel="stylesheet" type="text/css">
</head>

<?php
    define('APP_ROOT', realpath(dirname(__FILE__)) . '/' );
?>

<body>
    <div class="page page--one" data-page="1">
        <div class="top-bar"></div>

        <section class="header">
            <div class="header__left">
                <div class="profile-pic"></div>
                <h4 class="full-name">Peter Wong</h4>
                <h5 class="job-title">Full Stack Web Developer</h5>
            </div>
            <div class="header__right">
                <?php include 'templates/contacts.tpl.php'; ?>
            </div>
        </section>

        <section class="main">
            <section class="experiences">
                <h3 class="experiences__title">Work Experience</h3>
                <?php include 'templates/experiences.tpl.php'; ?>
            </section>
            <section class="skills">
                <h3 class="skills__title">Professional Skills</h3>
                <?php include 'templates/skills.tpl.php'; ?>
            </section>
        </section>

        <div class="bottom-bar"></div>

        <a href="javascript:void(0)"
           class="js-nav-button nav-button nav-button--next"
           data-target-page="2">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </a>
    </div>
    <div class="page page--two" data-page="2">
        <div class="top-bar"></div>

        <section class="main">
            <section class="educations">
                <h3 class="educations__title">Educations</h3>
              <?php include 'templates/educations.tpl.php'; ?>
            </section>
            <section class="skills skills--language">
                <h3 class="skills__title">Languages</h3>
                <?php include 'templates/languages.tpl.php'; ?>
            </section>
            <section class="references">
                <h3 class="references__title">References</h3>
                <?php include 'templates/references.tpl.php'; ?>
            </section>
        </section>

        <div class="bottom-bar"></div>

        <a href="javascript:void(0)"
           class="js-nav-button nav-button nav-button--previous"
           data-target-page="1">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
        </a>
    </div>

    <!-- JS -->
    <script src="build/js/resume.min.js?v=<?php echo date("ymdGi", filemtime("build/js/resume.min.js")); ?>"></script>
</body>
</html>
