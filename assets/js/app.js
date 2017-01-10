class Menu {
   constructor() {
      this._stickyOffest = 200;
      this._stickyClass = 'is-sticky';
   }

   init() {
      const $window = $(window);
      const $menu = $('.magellan-container');
      $window.scroll(() => {
         $window.scrollTop() > this._stickyOffest
             ? $menu.addClass(this._stickyClass)
             : $menu.removeClass(this._stickyClass);
      });
   }
}

class Section {
   constructor(loadingTime) {
      this._loadingTime = loadingTime;
      this._windowHeight = $(window).height();
   }

   init() {
      // Update section min height.
      this._updateHeight();
      // Create a fake loading effect.
      this._loadPage();
      // Initial window resize handler to update min height.
      this._initResizeHandler();
   }

   _loadPage() {
      setTimeout(() => {
         $('body').addClass('section-loaded');
      }, this._loadingTime);
   }

   _initResizeHandler() {
      $(window).resize(() => {
         const currentHeight = $(window).height();
         if(currentHeight && currentHeight !== this._windowHeight) {
            this._windowHeight = currentHeight;
            this._updateHeight();
         }
      });
   }

   _updateHeight() {
      $('.section--full-page, .block--full-page').css(
          'min-height', this._windowHeight
      );
   }
}

class Copyright {
   constructor() {}

   init() {
      const date = new Date();
      $('.copyright__year').text(date.getFullYear());
   }
}

$(() => {
   $(document).foundation({
      'magellan-expedition': {
         active_class: 'is-active',
         destination_threshold: 0
      }
   });

   const menu = new Menu();
   menu.init();
   const section = new Section(3000);
   section.init();
   const copyright = new Copyright();
   copyright.init();
});
