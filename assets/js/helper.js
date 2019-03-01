class Prefill {
  constructor() {
    this._currentYear = new Date().getFullYear();
  }

  init() {
    $('.js-prefill-year').text(this._currentYear);
  }
}

$(() => {
  const prefill = new Prefill();
  prefill.init();
});
