
(function () {
    "use strict";
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    window.addEventListener('load', () => {
        let menuContainer = select('.vad-menu');
        if (menuContainer) {
            let menuIsotope = new Isotope(menuContainer, {
                itemSelector: '.menu-item',
                layoutMode: 'fitRows'
            });

            let menuFilters = select('#menu-cat li', true);

            on('click', '#menu-cat li', function (e) {
                e.preventDefault();
                menuFilters.forEach(function (el) {
                    el.classList.remove('cat-active');
                });
                this.classList.add('cat-active');

                menuIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });

            }, true);
        }

    });
})()