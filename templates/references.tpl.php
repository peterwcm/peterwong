<?php
require_once(APP_ROOT . 'classes/Reference.php');

$references = [
  new Reference(
    "Libby O'Brien",
    'Head of Digital',
    'Flight Centre Travel Group',
    '0466 501 644',
    'libby_obrien@flightcentre.com'
  ),
  new Reference(
    'Adam Awada',
    'Global Tech Lead',
    'Flight Centre Travel Group',
    '0435 960 214',
    'adam_awada@flightcentre.com'
  ),
  new Reference(
    'Simon Collier-Baker',
    'Development Manager',
    'Auto & General Insurance Company',
    '0405 444 528',
    'simon.collierbaker@autogeneral.com.au'
  ),
  new Reference(
    'Dev Mayur Zaveri',
    'Lead Developer',
    'Auto & General Insurance Company',
    '07 3377 8704',
    'dev.zaveri@autogeneral.com.au'
  ),
  new Reference(
    'Roxy Roberts',
    'Project Manager',
    'Auto & General Insurance Company',
    '0424 737 193',
    'roxy.roberts@autogeneral.com.au'
  ),
  new Reference(
    'Luis Landaverde',
    'Digital Experience Leader',
    'Flight Centre Travel Group',
    '07 3170 8041',
    'luis_landaverde@flightcentre.com'
  ),
  new Reference(
    'Roger Wee',
    'Development Team Leader',
    'Flight Centre Travel Group',
    '07 3170 7050',
    'roger_wee@flightcentre.com',
    FALSE
  ),
];
?>

<?php foreach($references as $reference): ?>
    <?php if ($reference->active): ?>
        <section class="reference">
            <h3 class="reference__name"><?=$reference->getName()?></h3>
            <h5 class="reference__title"><?=$reference->getTitle()?></h5>
            <div class="reference__company">
                <i class="fa fa-building" aria-hidden="true"></i>
                <?=$reference->getCompany()?>
            </div>
            <div class="reference__phone">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <?=$reference->getPhone()?>
            </div>
            <a href="mailto:<?=$reference->getEmail()?>" class="reference__email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <?=$reference->getEmail()?>
            </a>
        </section>
    <?php endif; ?>
<?php endforeach; ?>
