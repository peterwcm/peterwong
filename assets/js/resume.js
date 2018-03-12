class Page {
  constructor() { }

  init() {
    const targetPage = this._loadPageNum();
    history.replaceState({targetPage}, 'Page ' + targetPage, '?page=' + targetPage);
    this.goTo(targetPage);
    this._initNavButton();
    this._animateProgress();
  }

  goTo(targetPage) {
    if (!this._isPageExist(targetPage)) {
      return false;
    }

    $('.page').hide();
    $(`.page[data-page=${targetPage}]`).show();
    this._animateProgress();
    return true;
  }

  _isPageExist(targetPage) {
    return !!$(`.page[data-page=${targetPage}]`).length;
  }

  _loadPageNum() {
    const url = new URL(window.location.href);
    const targetPage = url.searchParams.get('page');

    if (!targetPage || !this._isPageExist(targetPage)) {
      return 1;
    }

    return targetPage;
  }

  _initNavButton() {
    $('.js-nav-button').click(e => {
      const $button = $(e.currentTarget);
      const targetPage = $button.data('targetPage');

      if (this.goTo(targetPage)) {
        history.pushState({targetPage}, 'Page ' + targetPage, '?page=' + targetPage);
      }
    });
  }

  _animateProgress() {
    $('.js-progress').css('width', 0);

    setTimeout(() => {
      $('.js-progress').each((i, elem) => {
        const $progress = $(elem);
        if ($progress.data('progress')) {
          $progress.css('width', $progress.data('progress') + '%');
        }
      });
    }, 500);
  }
}

$(() => {
  const page = new Page();
  page.init();

  window.addEventListener('popstate', event => {
    if (!event.state || !event.state.targetPage) {
      return;
    }

    page.goTo(event.state.targetPage);
  });
});
