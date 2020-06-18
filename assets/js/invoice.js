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
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // Fill in default invoice dates.
    $('.js-invoice-date').val(this._dateValue(firstDayOfMonth));
    $('.js-due-date').val(this._dateValue(lastDayOfMonth));
    // Fill in default project dates.
    $('.js-start-date').val(this._dateValue(firstDayOfMonth));
    $('.js-end-date').val(this._dateValue(lastDayOfMonth));

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
    // Invoice date.
    const $invoiceDate = $('.js-invoice-date');
    const invoiceDateVal = $invoiceDate.val();
    const invoiceDate = new Date(invoiceDateVal);
    // Due date.
    const $dueDate = $('.js-due-date');
    const dueDate = new Date($dueDate.val());
    // Invoice number.
    const invoiceNumber = invoiceDateVal.replace(/-/g, '');

    // Update invoice date label.
    $invoiceDate.next('.js-label').text(this._formatDate(invoiceDate, {month: 'long'}));
    $dueDate.next('.js-label').text(this._formatDate(dueDate, {month: 'long'}));

    // Update invoice number.
    $('.js-invoice-number').text(`#${invoiceNumber}`);

    // Special handling for job notes.
    const startDateVal = $('.js-start-date').val();
    const endDateVal = $('.js-end-date').val();

    if (startDateVal && endDateVal) {
      const startDate = this._formatDate(new Date(startDateVal));
      const endDate = this._formatDate(new Date(endDateVal));

      $('.js-job-notes').text(`${startDate} - ${endDate}`);
    }

    // Update document title.
    document.title = `Peter's Invoice ${invoiceNumber}`;
  }

  _dateValue(date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  }

  _formatDate(date, settings = {}) {
    return date.toLocaleString('en-AU', Object.assign({month: 'short', year: 'numeric', day: 'numeric'}, settings));
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
