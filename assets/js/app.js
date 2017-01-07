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

$(() => {
   $(document).foundation({
      'magellan-expedition': {
         active_class: 'is-active'
      }
   });

   menu.init();

   const date = new Date();
   $('.copyright__year').text(date.getFullYear());
});
