<?php
require_once(APP_ROOT . 'classes/Reference.php');

$references = [
  new Reference('Peter'),
];
?>

<?php foreach($references as $key => $reference): ?>
    <section class="reference">
        <h5 class="reference__name"><?=$reference->getName()?></h5>
        <div class="reference__contacts"></div>
    </section>
<?php endforeach; ?>
