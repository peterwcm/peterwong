<?php
require_once(APP_ROOT . 'classes/Referee.php');

$referees = [
  new Referee(
    "Libby O'Brien",
    'Head of Digital',
    'Flight Centre Travel Group',
    '0466 501 644',
    'libby_obrien@flightcentre.com'
  ),
  new Referee(
    'Adam Awada',
    'Global Tech Lead',
    'Flight Centre Travel Group',
    '0435 960 214',
    'adam_awada@flightcentre.com'
  ),
];
?>

<?php foreach($referees as $referee): ?>
    <section class="referee">
        <h5 class="referee__name"><?=$referee->getName()?></h5>
        <h5 class="referee__title"><?=$referee->getTitle()?></h5>
        <h5 class="referee__company"><?=$referee->getCompany()?></h5>
        <h5 class="referee__phone"><?=$referee->getPhone()?></h5>
        <h5 class="referee__email"><?=$referee->getEmail()?></h5>
    </section>
<?php endforeach; ?>
