<?php
require_once(APP_ROOT . 'classes/Skill.php');

$skills = [
  new Skill('PHP', 90),
  new Skill('Java', 70),
  new Skill('ASP.NET', 70),
  new Skill('AngularJS', 60),
  new Skill('React', 40),
  new Skill('Node.js', 75),
  new Skill('Javascript', 85),
  new Skill('Sass', 90),
  new Skill('Drupal', 80),
  new Skill('WordPress', 70),
];
?>

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
