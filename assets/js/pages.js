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

  _getFilteredHashtags(hashtagType) {
    return $.grep(hashtags, (obj) => {
      return obj.types.indexOf(type[hashtagType]) !== -1;
    });
  }

  init() {
    $('.js-hashtags-form').submit(() => {
      let filteredHashtags = this._getFilteredHashtags('any');

      $('input[type="checkbox"]:checked').each((index, elem) => {
        $.merge(filteredHashtags, this._getFilteredHashtags($(elem).val()));
      });

      $('.js-hashtags').text(filteredHashtags.map(elem => `#${elem.name}`).join(' '));
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
  landscape: 2,
  portrait: 3,
  urban: 4,
  nature: 5,
  food: 6,
  couples: 7
};

const hashtags = [
  // ---------- Any (L) ----------
  {'name': 'bestoftheday', 'size': 'large', 'types': [type.any]},
  {'name': 'follow', 'size': 'large', 'types': [type.any]},
  {'name': 'followme', 'size': 'large', 'types': [type.any]},
  {'name': 'igers', 'size': 'large', 'types': [type.any]},
  {'name': 'instadaily', 'size': 'large', 'types': [type.any]},
  {'name': 'instagood', 'size': 'large', 'types': [type.any]},
  {'name': 'instagram', 'size': 'large', 'types': [type.any]},
  {'name': 'like4like', 'size': 'large', 'types': [type.any]},
  {'name': 'likeforlike', 'size': 'large', 'types': [type.any]},
  {'name': 'photo', 'size': 'large', 'types': [type.any]},
  {'name': 'photography', 'size': 'large', 'types': [type.any]},
  {'name': 'photooftheday', 'size': 'large', 'types': [type.any]},
  {'name': 'picoftheday', 'size': 'large', 'types': [type.any]},
  // ---------- Travel (L) ----------
  {'name': 'explorer', 'size': 'large', 'types': [type.travel]},
  {'name': 'instatravel', 'size': 'large', 'types': [type.travel]},
  {'name': 'travel', 'size': 'large', 'types': [type.travel]},
  {'name': 'traveling', 'size': 'large', 'types': [type.travel]},
  {'name': 'travelphotography', 'size': 'large', 'types': [type.travel]},
  {'name': 'trip', 'size': 'large', 'types': [type.travel]},
  {'name': 'wanderlust', 'size': 'large', 'types': [type.travel]},
  // ---------- Landscape (L) ----------
  {'name': 'landscape', 'size': 'large', 'types': [type.landscape]},
  {'name': 'landscapephotography', 'size': 'large', 'types': [type.landscape]},
  // ---------- Landscape (M) ----------
  {'name': 'landscaper', 'size': 'medium', 'types': [type.landscape]},
  // ---------- Nature (L) ----------
  {'name': 'naturelover', 'size': 'large', 'types': [type.nature]},
  {'name': 'naturelovers', 'size': 'large', 'types': [type.nature]},
  {'name': 'naturephotography', 'size': 'large', 'types': [type.nature]},
  {'name': 'natures', 'size': 'large', 'types': [type.nature]},
  // ---------- Nature (M) ----------
  {'name': 'naturepicture', 'size': 'medium', 'types': [type.nature]},
  {'name': 'naturescape', 'size': 'medium', 'types': [type.nature]},
  // ---------- Food (L) ----------
  {'name': 'yum', 'size': 'large', 'types': [type.food]},
  {'name': 'yummy', 'size': 'large', 'types': [type.food]},
  {'name': 'tasty', 'size': 'large', 'types': [type.food]},
  // ---------- Food (S) ----------
  {'name': 'tastytasty', 'size': 'small', 'types': [type.food]}
];
