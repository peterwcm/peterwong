class Invoice {
  constructor() { }

  init() {
    this._syncUrlParams();
    this._initInputs();
    this.sync();
  }

  _syncUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);

    for (let param of urlParams) {

      // Toggle edit mode.
      if (param[0] === 'is-edit') {
        $('body').toggleClass('is-edit', param[1] === 'true');
        continue;
      }

      const $field = $(`.js-${param[0]}`);

      if (!$field.length) {
        continue;
      }

      if ($field.is('input')) {
        $field.val(param[1]);
      }
      else {
        $field.text(param[1]);
      }
    }
  }

  _initInputs() {
    // Setup default input values.
    $('.js-invoice-date').val(new Date().toISOString().substr(0, 10));

    // Setup edit toggle event.
    $(document).dblclick(e => {
      const $target = $(e.target);

      if ($target.hasClass('js-input')) {
        return;
      }

      const $body = $('body');

      $body.toggleClass('is-edit');

      if (!$body.hasClass('is-edit')) {
        this.sync();
      }
    });
  }

  sync() {
    this._syncEditableLabels();
    this._syncPriceLabels();
    this._syncInvoiceLabels();
  }

  _syncInvoiceLabels() {
    const $invoiceDate = $('.js-invoice-date');
    const invoiceDateVal = $invoiceDate.val();
    const invoiceNumber = invoiceDateVal.replace(/-/g, '');

    // Update invoice date label.
    $invoiceDate.next('.js-label').text(
      new Date(invoiceDateVal).toLocaleString('en-AU',{month:'long', year:'numeric', day:'numeric'})
    );

    // Update invoice number.
    $('.js-invoice-number').text(`#${invoiceNumber}`);

    // Update document title.
    document.title = `Peter's Invoice ${invoiceNumber}`;
  }

  _formatPrice(price) {
    if (!price) {
      return '$0.00';
    }

    return `$${Number(price).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
  }

  _syncEditableLabels() {
    $('.js-editable').each((i, elem) => {
      const $elem = $(elem);
      const inputVal = $elem.find('.js-input').val();

      $elem.find('.js-label').text(inputVal);
    });
  }

  _syncPriceLabels() {
    const $rate = $('.js-rate');
    const hours = $('.js-hours').val();
    const rate = $rate.val();
    const subtotal = hours * rate;
    const gst = subtotal * 0.1;
    const total = subtotal + gst;

    $rate.next('.js-label').text(this._formatPrice(rate));
    $('.js-subtotal').text(this._formatPrice(subtotal));
    $('.js-gst').text(this._formatPrice(gst));
    $('.js-total').text(this._formatPrice(total));
  }
}

$(() => {
  const invoice = new Invoice();
  invoice.init();
});
