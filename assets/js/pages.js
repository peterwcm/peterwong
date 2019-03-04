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

const type = {
  any: 0,
  travel: 1,
};

const hashtags = [
  {'name': 'bestoftheday', 'size': 'large', 'types': [type.any]},
  {'name': 'explorer', 'size': 'large', 'types': [type.travel]},
  {'name': 'instadaily', 'size': 'large', 'types': [type.any]},
  {'name': 'instatravel', 'size': 'large', 'types': [type.travel]},
  {'name': 'photooftheday', 'size': 'large', 'types': [type.any]},
  {'name': 'picoftheday', 'size': 'large', 'types': [type.any]},
  {'name': 'travel', 'size': 'large', 'types': [type.travel]},
  {'name': 'traveling', 'size': 'large', 'types': [type.travel]},
  {'name': 'wanderlust', 'size': 'large', 'types': [type.travel]},
  {'name': '', 'size': '', 'types': []},
  {'name': '', 'size': '', 'types': []}

];