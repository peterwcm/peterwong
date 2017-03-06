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
        this._scrollOffsets = [];
    }

    init() {
        // Create a fake loading effect.
        this._loadPage(() => {
            // Update section min height and scroll offsets.
            this._updateHeight();
            this.refreshScroll();
            // Initial window resize handler to update min height.
            this._initResizeHandler();
            // Initial scroll handler.
            this._initScrollHandler();
        });
    }

    refreshScroll() {
        this._updateScrollOffsets();
        this._updateScroll();
    }

    _loadPage(onFinishedLoading) {
        setTimeout(() => {
            $('body').addClass('section-loaded');
            onFinishedLoading();
        }, this._loadingTime);
    }

    _updateScrollOffsets() {
        this._scrollOffsets = [];
        $('.block--content').each((i, elem) => {
            this._scrollOffsets.push({
                $elem: $(elem).prev('.block--title'),
                start: $(elem).offset().top,
                end: $(elem).offset().top + $(elem).outerHeight() - this._windowHeight
            });
        });
    }

    _initScrollHandler() {
        $(window).scroll(() => {
            this._updateScroll();
        });
    }

    _initResizeHandler() {
        const $window = $(window);
        $window.resize(() => {
            const currentHeight = $window.height();
            if (currentHeight && currentHeight !== this._windowHeight) {
                this._windowHeight = currentHeight;
                this._updateHeight();
            }
            this.refreshScroll();
        });
    }

    _updateScroll() {
        const $window = $(window);
        this._scrollOffsets.forEach(offset => {
            if ($window.scrollTop() >= offset.start
                && $window.scrollTop() < offset.end) {
                offset.$elem
                    .removeClass('scroll-start scroll-end')
                    .addClass('scroll-start');
            } else if ($window.scrollTop() >= offset.end) {
                offset.$elem
                    .removeClass('scroll-start scroll-end')
                    .addClass('scroll-end');
            } else {
                offset.$elem.removeClass('scroll-start scroll-end');
            }
        });
    }

    _updateHeight() {
        $('.section--full-page, .block--full-page')
            .css('min-height', this._windowHeight);
    }
}

class Work {
    constructor(section) {
        this._menuHeight = 60;
        this._section = section;
        this._delay = 500;
    }

    init() {
        $('.work__more').click(e => {
            const $elem = $(e.currentTarget);
            const id = $elem.data('id');
            const $details = $(`.work__details[data-id='${id}']`);
            $details.slideDown();
            setTimeout(() => {
                this._section.refreshScroll();
                $('html, body').animate({
                    scrollTop: $details.offset().top - this._menuHeight
                });
            }, this._delay);
        });


        $('.work__less').click(e => {
            const $elem = $(e.currentTarget);
            const id = $elem.data('id');
            const $details = $(`.work__details[data-id='${id}']`);
            $details.slideUp();
            setTimeout(() => {
                this._section.refreshScroll();
            }, this._delay);
        });
    }
}

class Copyright {
    constructor() {
    }

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
    const work = new Work(section);
    work.init();
    const copyright = new Copyright();
    copyright.init();
});
