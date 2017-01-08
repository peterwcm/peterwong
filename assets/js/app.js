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
      section.updateHeight(windowHeight);

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
