let enterMenuContent;
const expanded = "expanded";
const menu = ".menu-label";
const menuSelector = $(menu);

menuSelector.mouseenter(function (e) {
    reset(menuSelector);
    const target = $(e.target);
    const f = target.attr("for");
    const targetFor = $(`#${target.attr("for")}`);

    targetFor.mouseenter(function () {
        enterMenuContent = true;
    }).mouseleave(function () {
        reset(menuSelector);
    })

    if (!target.hasClass(expanded))
        target.addClass(expanded);
}).mouseleave(function (e) {
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