let windowHeight = $(window).height();

const menu = {
   stickyOffest: 200,
   stickyClass: 'is-sticky',
   init: () => {
      const $window = $(window);
      const $menu = $('.magellan-container');
      const _this = menu;
      $window.scroll(() => {
         $window.scrollTop() > _this.stickyOffest
             ? $menu.addClass(_this.stickyClass)
             : $menu.removeClass(_this.stickyClass);
      });
   }
};

const section = {
   init: () => {
      const LOADING_TIME = 1000;
      // Update section min height.
      section.updateHeight(windowHeight);
      // Create a fake loading effect by setting a 1s time out.
      setTimeout(() => {
         $('body').addClass('section-loaded');
      }, LOADING_TIME);
      // Initial window resize handler to update min height.
      $(window).resize(() => {
         const currentHeight = $(window).height();
         if(currentHeight && currentHeight !== windowHeight) {
            windowHeight = currentHeight;
            section.updateHeight(windowHeight);
         }
      });
   },
   updateHeight: height => {
      $('.section--full-page').css('min-height', height);
      $('.block--full-page').css('min-height', height);
   }
};

const copyright = {
   init: () => {
      const date = new Date();
      $('.copyright__year').text(date.getFullYear());
   }
};

$(() => {
   $(document).foundation({
      'magellan-expedition': {
         active_class: 'is-active'
      }
   });

   menu.init();
   section.init();
   copyright.init();
});
