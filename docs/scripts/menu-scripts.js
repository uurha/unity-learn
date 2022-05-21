let clicked;
const expanded = "expanded";
const menu = ".menu-label";

$(menu).mouseover(function (e) {
    reset();
    const target = $(e.target);
    const f = target.attr("for");
    const targetFor = $(`#${target.attr("for")}`)
    targetFor.mouseleave(function () {
        reset();
    })
    if (!clicked) {
        if (!target.hasClass(expanded))
            target.addClass(expanded);
    }
}).click(function (e) {
    const target = $(e.target);
    clicked = !clicked;
    if (clicked) {
        target.removeClass(expanded);
    } else {
        if (!target.hasClass(expanded))
            target.addClass(expanded);
    }
})


$(document).mouseup(function (e) {
    const container = $(menu);
    const target = $(e.target);

    if (!container.is(target) && container.has(target).length === 0) {
        container.removeClass(expanded);
    }
});

function reset() {
    $(menu).removeClass(expanded)
    clicked = false;
}