$(() => {
   $(document).foundation({
      'magellan-expedition': {
         active_class: 'is-active'
      }
   });
   menu.init();
});

const menu = {
   stickyOffest: 200,
   stickyClass: 'is-sticky',

   init: () => {
      const $window = $(window);
      const $menu = $('.magellan-container');
      const _this = this;

      $window.scroll(() => {
         $window.scrollTop() > _this.stickyOffest
             ? $menu.addClass(_this.stickyClass)
             : $menu.removeClass(_this.stickyClass);
      });
   }
};
