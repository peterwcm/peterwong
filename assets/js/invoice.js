class Invoice {
  constructor() { }

  init() {
    this._initInputEvents();
  }

  _initInputEvents() {
    $(document).dblclick(() => {
      const $body = $('body');

      $body.toggleClass('is-edit');

      if (!$body.hasClass('is-edit')) {
        this._syncLabel();
        this.updatePrice();
      }
    });
  }

  _formatPrice(price) {
    if (!price) {
      return '$0.00';
    }

    return '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  _syncLabel() {
    $('.js-editable').each((i, elem) => {
      const $elem = $(elem);
      const inputVal = $elem.find('.js-input').val();

      $elem.find('.js-label').text(inputVal);
    });
  }

  updatePrice() {
    const hours = $('.js-hours').val();
    const rate = $('.js-rate').val();
    const subtotal = hours * rate;
    const gst = subtotal * 0.1;
    const total = subtotal + gst;

    $('.js-subtotal').text(this._formatPrice(subtotal));
    $('.js-gst').text(this._formatPrice(gst));
    $('.js-total').text(this._formatPrice(total));
  }
}

$(() => {
  const invoice = new Invoice();
  invoice.init();
});
