<?php
require_once(APP_ROOT . 'classes/Education.php');

$educations = [
  new Education(
    '2012 - 2013',
    'The University of Queensland (UQ)',
    'Master of Computer Science',
    6.375
  ),
  new Education(
    '2010 - 2012',
    'Queensland University of Technology (QUT)',
    'Bachelor of Information Technology',
    6.813,
    'Software Engineering and Database Warehousing'
  )
];
?>

<?php foreach($educations as $education): ?>
    <section class="education">
        <div class="education__overview">
            <h5 class="education__period"><?=$education->getPeriod()?></h5>
        </div>
        <div class="education__details">
            <h4 class="education__title"><?=$education->getTitle()?></h4>
            <h5 class="education__institution"><?=$education->getInstitution()?></h5>
            <p class="education__description">
              <?php printf('Course GPA: %s (on a %s point ascending scale)', $education->getGpa(), $education->getMaxGpa());?>
            </p>
            <?php if (!empty($education->getSpecialisation())): ?>
                <p class="education__description">
                  <?php printf('Specialisations: %s', $education->getSpecialisation());?>
                </p>
            <?php endif; ?>
        </div>
    </section>
<?php endforeach; ?>
