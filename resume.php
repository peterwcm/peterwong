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
    require_once('classes/Contact.php');
    require_once('classes/Skill.php');

    $contacts = [
        new Contact('Website', 'globe', 'peterwong.name', 'http://peterwong.name'),
        new Contact('Email', 'envelope', 'peterwong.brisbane@gmail.com', 'mailto:peterwong.brisbane@gmail.com', ContactType::Email),
        new Contact('Phone', 'phone', '0421957638', '', ContactType::Phone),
        new Contact('LinkedIn', 'linkedin', 'linkedin.com/in/peterwcm', 'https://www.linkedin.com/in/peterwcm'),
        new Contact('GitHub', 'github', 'github.com/peterwcm', 'https://github.com/peterwcm'),
        new Contact('StackOverflow', 'stack-overflow', 'stackoverflow.com/users/731968', 'https://stackoverflow.com/users/731968/peter-wong'),
    ];

    $skills = [
        new Skill('PHP', 90),
        new Skill('Java', 70),
        new Skill('ASP.NET', 70),
        new Skill('AngularJS', 60),
        new Skill('React', 30),
        new Skill('Sass', 90),
        new Skill('Node.js', 75),
        new Skill('Laravel', 75),
        new Skill('WordPress', 70),
        new Skill('Drupal', 80),
    ];
?>

<body>
    <div class="page">
        <div class="top-bar"></div>

        <section class="header">
            <div class="header__left">
                <div class="profile-pic"></div>
                <h4 class="full-name">Peter Wong</h4>
                <h5 class="job-title">Full Stack Web Developer</h5>
            </div>
            <div class="header__right">
                <?php foreach($contacts as $key => $contact): ?>
                    <section class="contact-info">
                        <div class="contact-info__icon">
                            <i class="fa fa-<?=$contact->getIcon()?>"
                               aria-hidden="true"></i>
                        </div>
                        <div class="contact-info__details">
                            <h5 class="contact-info__heading">
                              <?=$contact->getName()?>
                            </h5>
                            <div class="contact-info__text">
                                <?php if ($contact->getType() !== ContactType::Phone): ?>
                                    <a href="<?=$contact->getUrl()?>"
                                       <?=$contact->getType() === ContactType::Link ? 'target="_blank"' : ''?>>
                                      <?=$contact->getDetails()?>
                                    </a>
                                <?php else: ?>
                                  <?=$contact->getDetails()?>
                                <?php endif; ?>
                            </div>
                        </div>
                    </section>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="main">
            <section class="work-experience">
<!--                <h3>Work Experience</h3>-->
            </section>
            <section class="pro-skills">
                <h3 class="pro-skills__title">Professional Skills</h3>
                <?php foreach($skills as $key => $skill): ?>
                    <section class="skill">
                        <h5 class="skill__name"><?=$skill->getName()?></h5>
                        <div class="skill__level">
                            <div class="progress">
                                <div class="progress__bar"
                                     style="width: <?=$skill->getLevel()?>%;"></div>
                            </div>
                        </div>
                    </section>
                <?php endforeach; ?>
            </section>
        </section>

        <div class="bottom-bar"><div>
    </div>
</body>
</html>
