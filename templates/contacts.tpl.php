<?php
require_once(APP_ROOT . 'classes/Contact.php');

$contacts = [
  new Contact('Website', 'globe', 'peterwong.name', 'http://peterwong.name'),
  new Contact('Email', 'envelope', 'peterwong.brisbane@gmail.com', 'mailto:peterwong.brisbane@gmail.com', ContactType::Email),
  new Contact('Phone', 'phone', '0421957638', '', ContactType::Phone),
  new Contact('LinkedIn', 'linkedin', 'linkedin.com/in/peterwcm', 'https://www.linkedin.com/in/peterwcm'),
  new Contact('GitHub', 'github', 'github.com/peterwcm', 'https://github.com/peterwcm'),
  new Contact('StackOverflow', 'stack-overflow', 'stackoverflow.com/users/731968', 'https://stackoverflow.com/users/731968/peter-wong'),
];
?>

<?php foreach ($contacts as $key => $contact): ?>
    <section class="contact-info">
        <div class="contact-info__icon">
            <i class="fa fa-<?= $contact->getIcon() ?>"
               aria-hidden="true"></i>
        </div>
        <div class="contact-info__details">
            <h5 class="contact-info__heading">
              <?= $contact->getName() ?>
            </h5>
            <div class="contact-info__text">
              <?php if ($contact->getType() !== ContactType::Phone): ?>
                  <a href="<?= $contact->getUrl() ?>"
                    <?= $contact->getType() === ContactType::Link ? 'target="_blank"' : '' ?>>
                    <?= $contact->getDetails() ?>
                  </a>
              <?php else: ?>
                <?= $contact->getDetails() ?>
              <?php endif; ?>
            </div>
        </div>
    </section>
<?php endforeach; ?>
