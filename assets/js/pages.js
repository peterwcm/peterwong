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
   * Get hashtags from the global collection filtered by hashtag types and languages.
   *
   * @param {array} hashtagTypes
   *   The hashtag types.
   * @param {array} languages
   *   The languages to be loaded.
   *
   * @returns {array}
   *   The list of hashtag objects array.
   * @private
   */
  _getFilteredHashtags(hashtagTypes, languages) {
    return $.grep(hashtags, obj => obj.types.every(type => hashtagTypes.indexOf(type) !== -1) && languages.indexOf(obj.language) !== -1);
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
    return cleanHashtags.sort().filter((e, i, a) => i === a.indexOf(e) && e).slice(0, this._maxHashtagsNum);
  }

  init() {
    $('.js-hashtags-form').submit(() => {

      // Get all languages.
      const languages = $('.hashtag-language:checkbox:checked').map((i, elem) => language[$(elem).val()]).get();

      // Combine all hashtag objects based on user selections.
      const hashtagTypes = $('.hashtag-type:checkbox:checked').map((i, elem) => type[$(elem).val()]).get();
      let filteredHashtags =  this._getFilteredHashtags(hashtagTypes, languages);

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
      const finalHashtags = this._clean(hashtagsOutput);
      $('.js-hashtags-count').text(`Total: ${finalHashtags.length}`);
      $('.js-hashtags').text(finalHashtags.map(text => `#${text}`).join(' '));
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
  taiwan: 8,
  a7iii: 9,
  asia: 10
};

const language = {
  english: 0,
  chinese: 1
};

const hashtags = [
  // ---------- Any (L) ----------
  {'name': 'bestoftheday', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'follow', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'followme', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'igers', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'instadaily', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'instagood', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'instagram', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'like4like', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'likeforlike', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'photo', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'photography', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'photooftheday', 'size': 'large', 'types': [type.any], 'language': language.english},
  {'name': 'picoftheday', 'size': 'large', 'types': [type.any], 'language': language.english},
  // ---------- Any (M) ----------
  // ---------- Any (S) ----------

  // ====================================================================================================

  // ---------- Travel (L) ----------
  {'name': 'explorer', 'size': 'large', 'types': [type.travel], 'language': language.english},
  {'name': 'instatravel', 'size': 'large', 'types': [type.travel], 'language': language.english},
  {'name': 'instatrip', 'size': 'large', 'types': [type.travel], 'language': language.english},
  {'name': 'travel', 'size': 'large', 'types': [type.travel], 'language': language.english},
  {'name': 'traveling', 'size': 'large', 'types': [type.travel], 'language': language.english},
  {'name': 'travelphotography', 'size': 'large', 'types': [type.travel], 'language': language.english},
  {'name': 'trip', 'size': 'large', 'types': [type.travel], 'language': language.english},
  {'name': 'wanderlust', 'size': 'large', 'types': [type.travel], 'language': language.english},
  // ---------- Travel (M) ----------
  {'name': 'travelcommunity', 'size': 'large', 'types': [type.travel], 'language': language.english},
  // ---------- Travel (S) ----------

  // ====================================================================================================

  // ---------- Landscape (L) ----------
  {'name': 'landscape', 'size': 'large', 'types': [type.landscape], 'language': language.english},
  {'name': 'landscapephotography', 'size': 'large', 'types': [type.landscape], 'language': language.english},
  // ---------- Landscape (M) ----------
  {'name': 'landscaper', 'size': 'medium', 'types': [type.landscape], 'language': language.english},
  // ---------- Landscape (S) ----------

  // ====================================================================================================

  // ---------- Nature (L) ----------
  {'name': 'naturelover', 'size': 'large', 'types': [type.nature], 'language': language.english},
  {'name': 'naturelovers', 'size': 'large', 'types': [type.nature], 'language': language.english},
  {'name': 'naturephotography', 'size': 'large', 'types': [type.nature], 'language': language.english},
  {'name': 'natures', 'size': 'large', 'types': [type.nature], 'language': language.english},
  // ---------- Nature (M) ----------
  {'name': 'naturepicture', 'size': 'medium', 'types': [type.nature], 'language': language.english},
  {'name': 'naturescape', 'size': 'medium', 'types': [type.nature], 'language': language.english},
  // ---------- Nature (S) ----------

  // ====================================================================================================

  // ---------- Food (L) ----------
  {'name': 'food', 'size': 'large', 'types': [type.food], 'language': language.english},
  {'name': 'foodphotography', 'size': 'large', 'types': [type.food], 'language': language.english},
  {'name': 'tasty', 'size': 'large', 'types': [type.food], 'language': language.english},
  {'name': 'yum', 'size': 'large', 'types': [type.food], 'language': language.english},
  {'name': 'yummy', 'size': 'large', 'types': [type.food], 'language': language.english},
  // ---------- Food (M) ----------
  // ---------- Food (S) ----------
  {'name': 'tastytasty', 'size': 'small', 'types': [type.food], 'language': language.english},

  // ====================================================================================================

  // ---------- Couples (L) ----------
  {'name': 'instalove', 'size': 'large', 'types': [type.couples], 'language': language.english},
  {'name': 'love', 'size': 'large', 'types': [type.couples], 'language': language.english},
  // ---------- Couples (M) ----------
  // ---------- Couples (S) ----------

  // ====================================================================================================

  // ---------- Taiwan (L) ----------
  {'name': 'taiwan', 'size': 'large', 'types': [type.taiwan], 'language': language.english},
  // ---------- Taiwan (M) ----------
  // ---------- Taiwan (S) ----------

  // ====================================================================================================

  // ---------- a7 III (L) ----------
  {'name': 'camera', 'size': 'large', 'types': [type.a7iii], 'language': language.english},
  {'name': 'mirrorless', 'size': 'large', 'types': [type.a7iii], 'language': language.english},
  {'name': 'sony', 'size': 'large', 'types': [type.a7iii], 'language': language.english},
  // ---------- a7 III (M) ----------
  {'name': 'a7iii', 'size': 'medium', 'types': [type.a7iii], 'language': language.english},
  {'name': 'mirrorlesscamera', 'size': 'medium', 'types': [type.a7iii], 'language': language.english},
  // ---------- a7 III (S) ----------

  // ====================================================================================================

  // ---------- Asia (L) ----------
  {'name': 'asia', 'size': 'large', 'types': [type.asia], 'language': language.english},
  // ---------- Asia (M) ----------
  // ---------- Asia (S) ----------

  // ====================================================================================================

  // ---------- Mixed (L) ----------
  // ---------- Mixed (M) ----------
  {'name': 'taiwantravel', 'size': 'medium', 'types': [type.taiwan, type.travel], 'language': language.english},
  {'name': 'taiwanfood', 'size': 'medium', 'types': [type.taiwan, type.food], 'language': language.english},
  // ---------- Mixed (S) ----------
  {'name': 'traveltaiwan', 'size': 'small', 'types': [type.taiwan, type.travel], 'language': language.english},
  {'name': 'taiwanfoodie', 'size': 'small', 'types': [type.taiwan, type.food], 'language': language.english},
  {'name': 'travelinasia', 'size': 'small', 'types': [type.asia, type.travel], 'language': language.english},
  {'name': 'travelintaiwan', 'size': 'small', 'types': [type.taiwan, type.travel], 'language': language.english},

  // ====================================================================================================

  // ---------- Chinese (L) ----------
  // <<<<<<<<<< Any >>>>>>>>>>
  {'name': '攝影', 'size': 'large', 'types': [type.any], 'language': language.chinese},

  // <<<<<<<<<< Travel >>>>>>>>>>
  {'name': '旅行', 'size': 'large', 'types': [type.travel], 'language': language.chinese},

  // <<<<<<<<<< Food >>>>>>>>>>
  {'name': '美食', 'size': 'large', 'types': [type.food], 'language': language.chinese},

  // <<<<<<<<<< Taiwan >>>>>>>>>>
  {'name': '台灣', 'size': 'large', 'types': [type.taiwan], 'language': language.english},

  // <<<<<<<<<< Mixed >>>>>>>>>>

  // ====================================================================================================

  // ---------- Chinese (M) ----------
  // <<<<<<<<<< Travel >>>>>>>>>>
  {'name': '旅遊', 'size': 'medium', 'types': [type.travel], 'language': language.chinese},

  // <<<<<<<<<< Mixed >>>>>>>>>>
  {'name': '台灣美食', 'size': 'medium', 'types': [type.taiwan, type.food], 'language': language.chinese},

  // ====================================================================================================

  // ---------- Chinese (S) ----------
  // <<<<<<<<<< Mixed >>>>>>>>>>
  {'name': '台灣旅行', 'size': 'small', 'types': [type.taiwan, type.travel], 'language': language.chinese},
];
