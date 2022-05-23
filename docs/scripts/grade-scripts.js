let grades = [
    'junior', 'middle', 'senior'
]

$(window).load(function () {
    grades.forEach((value => {
        const gradesMenu = $(`#grades ul`);
        gradesMenu.append(`<li><a href="#${value}" class="item control category">${value.toProperCase()}</a></li>`)
    }));
});

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

$("body").on('DOMSubtreeModified', "#diagram", function () {
    grades.forEach((value => {
        const selector = `#grade-name="${value}"`;
        const elements = $(`div > :contains(${selector}):last-child`);
        var element = $(elements[elements.length - 1])
        
        if(element.attr("id") !== value) {
            element.attr('id', value);
            element.addClass("scroll-bottom")
            element.addClass("blink-anchor")

            let t = element.text();
            t = t.replace(selector, '');
            element.text(t);
        }
    }));
});