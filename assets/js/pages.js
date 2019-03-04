class Hashtags {
  constructor() {
    this._hashtags = {
      // < 100k, pick 8.
      'small': [],
      // < 500k, pick 16.
      'medium': [],
      // > 500k, pick 6.
      'large': [],
    };

    this._hashtags.small = [

    ];
  }

  init() {
    $('.js-hashtags-form').submit(() => {
      $('.js-hashtags').text('test');
      return false;
    });
  }
}

$(() => {
  const hashtags = new Hashtags();
  hashtags.init();
});

const hashtags = [

];