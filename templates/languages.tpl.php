<?php
require_once(APP_ROOT . 'classes/Skill.php');

$languages = [
  new Skill('English', 95),
  new Skill('Chinese', 90),
  new Skill('Cantonese', 100),
  new Skill('Korean', 35),
];
?>

<?php foreach($languages as $language): ?>
    <section class="skill">
        <h5 class="skill__name"><?=$language->getName()?></h5>
        <div class="skill__level">
            <div class="progress">
                <div class="progress__bar"
                     style="width: <?=$language->getLevel()?>%;"></div>
            </div>
        </div>
    </section>
<?php endforeach; ?>
