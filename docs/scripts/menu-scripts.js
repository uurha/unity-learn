let enterMenuContent;
const expanded = "expanded";
const menu = "menu-label";
const menuSelector = $(`.${menu}`);
const forAttribute = `for`;

function isTouchDevice() {
    return ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

function setupTouchDevice() {
    menuSelector.click(function (e) {
        const target = $(e.target);
        if (target.attr(forAttribute) !== undefined) {
            if (target.hasClass(expanded)) {
                target.removeClass(expanded);
            } else {
                reset(menuSelector);
                target.addClass(expanded);
            }
        }
    });
}

function setupNonTouchDevice() {
    menuSelector.mouseenter(function (e) {
        const target = $(e.target);
        reset(menuSelector);
        if (target.attr(forAttribute) !== undefined) {
            const targetFor = $(`#${target.attr(forAttribute)}`);

            targetFor.mouseenter(function () {
                enterMenuContent = true;
            }).mouseleave(function () {
                reset(menuSelector);
            })

            if (!target.hasClass(expanded))
                target.addClass(expanded);
        }
    });

    menuSelector.mouseleave(function (e) {
        const target = $(e.target);
        setTimeout(function () {
            if (enterMenuContent) return;
            reset(target);
        }, 20)
    });
}

$(window).load(function () {
    if (isTouchDevice()) {
        setupTouchDevice();
    } else {
        setupNonTouchDevice();
    }
});


function reset(target) {
    target.removeClass(expanded)
    enterMenuContent = false;
}