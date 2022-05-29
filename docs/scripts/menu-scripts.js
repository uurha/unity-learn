let enterMenuContent;
const expanded = "expanded";
const menu = "menu-label";
const menuSelector = $(`.${menu}`);
const forAttribute = `for`;

menuSelector.mouseenter(function (e) {
    reset(menuSelector);
    const target = $(e.target);
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

function reset(target) {
    target.removeClass(expanded)
    enterMenuContent = false;
}