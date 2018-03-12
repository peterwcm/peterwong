class Page {
  constructor() { }

  init() {
    const targetPage = this._loadPageNum();
    history.replaceState({targetPage}, 'Page ' + targetPage, '?page=' + targetPage);
    this.goTo(targetPage);
    this._initNavButton();
  }

  goTo(targetPage) {
    if (!this._isPageExist(targetPage)) {
      return false;
    }

    $('.page').hide();
    $(`.page[data-page=${targetPage}]`).show();
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
