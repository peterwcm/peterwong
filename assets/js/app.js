$(function() {
   $(document).foundation({
      'magellan-expedition': {
         active_class: 'is-active'
      }
   });
   menu.init();
});

var menu = {
   stickyOffest: 200,
   stickyClass: 'is-sticky',

   init: function() {
      var $window = $(window),
          $menu = $('.magellan-container'),
          _this = this;
      $window.scroll(function() {
         if ($window.scrollTop() > _this.stickyOffest) {
            $menu.addClass(_this.stickyClass);
         }
         else {
            $menu.removeClass(_this.stickyClass);
         }
      });
   }
};
