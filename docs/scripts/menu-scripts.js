let clicked;
const expanded = "expanded";
const menu = ".menu";

$(menu).mouseover(function (e) {
    reset();
    const target = $(e.target);
    if (!clicked) {
        if (!target.hasClass(expanded))
            target.addClass(expanded);
    }
}).mouseout(function (e) {
    if (!clicked) {
        $(e.target).removeClass(expanded);
    }
}).click(function (e) {
    const target = $(e.target);
    if (clicked) {
        target.removeClass(expanded);
    } else {
        if (!target.hasClass(expanded))
            target.addClass(expanded);
    }
    clicked = !clicked;
});

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