class Prefill {
  constructor() {
    this._currentYear = new Date().getFullYear();
  }

  init() {
    $('.js-prefill[data-type="current-year"]').text(this._currentYear);
    $('.js-prefill[data-type="work-years-total"]').text(this._currentYear - 2012);
  }
}

$(() => {
  const prefill = new Prefill();
  prefill.init();
});
