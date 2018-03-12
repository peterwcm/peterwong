class Page {
  constructor() { }

  init() {
    this._loadPageNum();
    this._initNavButton();
  }

  _goTo(targetPage) {
    var $targetPage = $(`.page[data-page=${targetPage}]`);

    if (!$targetPage.length) {
      return;
    }

    $('.page').hide();
    $targetPage.show();
  }

  _loadPageNum() {
    const url = new URL(window.location.href);
    const targetPage = url.searchParams.get('page');

    if (targetPage) {
      this._goTo(targetPage);
    }
  }

  _initNavButton() {
    $('.js-nav-button').click(e => {
      const $button = $(e.currentTarget);
      const targetPage = $button.data('targetPage');

      this._goTo(targetPage);
    });
  }
}

$(() => {
  const page = new Page();
  page.init();
});
