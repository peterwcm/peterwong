class Hashtags {
  constructor() {
    this._hashtags = {
      // < 100k, pick 9 (30%).
      'small': [],
      // < 500k, pick 15 (50%).
      'medium': [],
      // > 500k, pick 6 (20%).
      'large': [],
    };
    this._maxHashtagsNum = 30;
    this._sHashtagsNum = 9;
    this._mHashtagsNum = 15;
    this._lHashtagsNum = 6;
  }

  /**
   * Get certain hashtags type from the global collection.
   *
   * @param {string} hashtagType
   *   The hashtag type.
   *
   * @returns {array}
   *   The list of hashtag objects array.
   * @private
   */
  _getFilteredHashtags(hashtagType) {
    return $.grep(hashtags, obj => obj.types.indexOf(type[hashtagType]) !== -1);
  }

  /**
   * Shuffle the list items.
   *
   * @param {array} items
   *   The list.
   *
   * @returns {*}
   *   List of shuffled items.
   * @private
   */
  _shuffle(items) {
    let currentIndex = items.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = items[currentIndex];
      items[currentIndex] = items[randomIndex];
      items[randomIndex] = temporaryValue;
    }

    return items;
  }

  /**
   * Check if the hashtags collection is completely empty.
   *
   * @returns {boolean}
   *   True if the collection is completely empty, otherwise, false.
   * @private
   */
  _isHashtagsEmpty() {
    for (let list of Object.values(this._hashtags)) {
      if (list.length) {
        return false;
      }
    }

    return true;
  }

  /**
   * Trim hashtags, remove duplicates and make sure it's less than or equal the maximum number of hashtags.
   *
   * @param {array} hashtags
   *   The list of hashtags.
   *
   * @returns {*}
   *   List of clean hashtags.
   * @private
   */
  _clean(hashtags) {
    const cleanHashtags = hashtags.map(hashtag => hashtag.trim());
    return cleanHashtags.sort().filter((e, i, a) => i === a.indexOf(e)).slice(0, this._maxHashtagsNum);
  }

  init() {
    $('.js-hashtags-form').submit(() => {

      // Combine all hashtag objects based on user selections.
      let filteredHashtags = this._getFilteredHashtags('any');
      $('input[type="checkbox"]:checked').each((index, elem) => {
        $.merge(filteredHashtags, this._getFilteredHashtags($(elem).val()));
      });

      // Randomise hashtag objects.
      filteredHashtags = this._shuffle(filteredHashtags);

      // Fill large, medium, small hashtags.
      filteredHashtags.forEach(elem => {
        switch(elem.size) {
          case 'small':
            if (this._hashtags.small.length < this._sHashtagsNum) {
              this._hashtags.small.push(elem.name);
            }
            break;
          case 'medium':
            if (this._hashtags.medium.length < this._mHashtagsNum) {
              this._hashtags.medium.push(elem.name);
            }
            break;
          case 'large':
            if (this._hashtags.large.length < this._lHashtagsNum) {
              this._hashtags.large.push(elem.name);
            }
            break;
          default:
            break;
        }
      });

      // Start with custom hashtags and add from large, medium, small while not reaching 30.
      let hashtagsOutput = this._clean($('#custom_hashtags').val().split('\n'));
      while (hashtagsOutput.length < this._maxHashtagsNum && !this._isHashtagsEmpty()) {
        for (let list of Object.values(this._hashtags)) {
          if (list.length) {
            hashtagsOutput.push(list.shift());
          }
        }
      }

      // Output hashtag results.
      $('.js-hashtags').text(this._clean(hashtagsOutput).map(text => `#${text}`).join(' '));
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
  couples: 7,
  chinese: 8
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
  // ---------- Any (M) ----------
  // ---------- Any (S) ----------

  // ---------- Travel (L) ----------
  {'name': 'explorer', 'size': 'large', 'types': [type.travel]},
  {'name': 'instatravel', 'size': 'large', 'types': [type.travel]},
  {'name': 'travel', 'size': 'large', 'types': [type.travel]},
  {'name': 'traveling', 'size': 'large', 'types': [type.travel]},
  {'name': 'travelphotography', 'size': 'large', 'types': [type.travel]},
  {'name': 'trip', 'size': 'large', 'types': [type.travel]},
  {'name': 'wanderlust', 'size': 'large', 'types': [type.travel]},
  // ---------- Travel (M) ----------
  // ---------- Travel (S) ----------

  // ---------- Landscape (L) ----------
  {'name': 'landscape', 'size': 'large', 'types': [type.landscape]},
  {'name': 'landscapephotography', 'size': 'large', 'types': [type.landscape]},
  // ---------- Landscape (M) ----------
  {'name': 'landscaper', 'size': 'medium', 'types': [type.landscape]},
  // ---------- Landscape (S) ----------

  // ---------- Nature (L) ----------
  {'name': 'naturelover', 'size': 'large', 'types': [type.nature]},
  {'name': 'naturelovers', 'size': 'large', 'types': [type.nature]},
  {'name': 'naturephotography', 'size': 'large', 'types': [type.nature]},
  {'name': 'natures', 'size': 'large', 'types': [type.nature]},
  // ---------- Nature (M) ----------
  {'name': 'naturepicture', 'size': 'medium', 'types': [type.nature]},
  {'name': 'naturescape', 'size': 'medium', 'types': [type.nature]},
  // ---------- Nature (S) ----------

  // ---------- Food (L) ----------
  {'name': 'yum', 'size': 'large', 'types': [type.food]},
  {'name': 'yummy', 'size': 'large', 'types': [type.food]},
  {'name': 'tasty', 'size': 'large', 'types': [type.food]},
  // ---------- Food (M) ----------
  // ---------- Food (S) ----------
  {'name': 'tastytasty', 'size': 'small', 'types': [type.food]}

  // ---------- Chinese (L) ----------
  // ---------- Chinese (M) ----------
  // ---------- Chinese (S) ----------
];
