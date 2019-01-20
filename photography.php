<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
  <title>Photography - Peter Wong</title>

  <!-- Meta Tags -->
  <meta name="keywords"
        content="portfolio, web design, filters, presets, lightroom, freelance, freelancer, photography, australia"/>
  <meta name="description" content="Free lightroom preset."/>

  <!-- Canonical Link -->
  <link rel="canonical" href="http://peterwong.name/photography">

  <!-- Favicon -->
  <link rel="icon" href="favicon.png" type="image/x-icon"/>
  <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>

  <!-- CSS -->
  <link media="all"
        type="text/css"
        rel="stylesheet"
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
  <link href="build/css/photography.min.css?v=<?php echo date("ymdGi", filemtime("build/css/photography.min.css")); ?>"
        rel="stylesheet">

  <!-- Fonts -->
  <link href="http://fonts.googleapis.com/css?family=
				Open+Sans:300normal,300italic,400normal,400italic,600normal,600italic,700normal,700italic,800normal,800italic|
				Open+Sans+Condensed:300normal|
				League+Script|
				Montserrat:400normal|
				Muli&subset=all" rel="stylesheet" type="text/css">
</head>

<?php
  define('APP_ROOT', realpath(dirname(__FILE__)) . '/');
?>

<body>
<div class="page">
  <header>
    <h1 class="top-bar">Free download</h1>
  </header>
  <section class="main">
    <section class="compare">
      <div class="compare__image compare__image--left">
        <img src="./build/images/presets/beach-before.jpg"/>
      </div>
      <div class="compare__image compare__image--right">
        <img src="./build/images/presets/beach-after.jpg"/>
      </div>
    </section>
    <section class="compare">
      <div class="compare__image compare__image--left">
        <img src="./build/images/presets/temple-before.jpg"/>
      </div>
      <div class="compare__image compare__image--right">
        <img src="./build/images/presets/temple-after.jpg"/>
      </div>
    </section>
    <section class="compare">
      <div class="compare__image compare__image--left">
        <img src="./build/images/presets/tree-before.jpg"/>
      </div>
      <div class="compare__image compare__image--right">
        <img src="./build/images/presets/tree-after.jpg"/>
      </div>
    </section>
  </section>
</div>
</body>
</html>
