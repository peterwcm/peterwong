class NavButton {
  constructor() { }

  init() {
    $('.js-nav-button').click(e => {
      const $button = $(e.currentTarget);
      const currentClass = $button.data('currentClass');
      const targetClass = $button.data('targetClass');

      console.log('here', currentClass, targetClass);

      $(`.${currentClass}`).hide();
      $(`.${targetClass}`).show();
    });
  }
}

$(() => {
  const navButton = new NavButton();
  navButton.init();
});
