<?php
require_once(APP_ROOT . 'classes/Experience.php');

$experiences = [
  new Experience(
    'May 2017 - Present',
    'Flight Centre',
    'Full Stack Drupal Developer',
    'Develop and maintain the corporate travel websites using Drupal. Create new custom modules and features based on new project\'s needs.'
  ),
  new Experience(
    'May 2016 - Present',
    'Blossom Days',
    'Full Stack WordPress Developer',
    'Designed, developed and maintained the website in WordPress.'
  ),
  new Experience(
    'May 2016 - Mar 2017',
    'Auto & General',
    'Full Stack Web Developer',
    'Built Node.js websites using tech stacks such as Angular, Webpack and Jest. Back-end REST API was built in Java using Spring.'
  ),
  new Experience(
    'Jun 2013 - May 2016',
    'Zippity',
    'Full Stack PHP Web Developer',
    'Built the website in PHP with CodeIgniter and jQuery.'
  )
];
?>

<?php foreach($experiences as $key => $experience): ?>
    <section class="experience">
        <div class="experience__overview">
            <h5 class="experience__employer"><?=$experience->getEmployer()?></h5>
            <h5 class="experience__period"><?=$experience->getPeriod()?></h5>
        </div>
        <div class="experience__details">
            <h4 class="experience__title"><?=$experience->getTitle()?></h4>
            <p class="experience__description"><?=$experience->getDescription()?></p>
        </div>
    </section>
<?php endforeach; ?>
