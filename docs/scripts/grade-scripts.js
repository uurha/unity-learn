let grades = [
    'junior', 'middle', 'senior'
]

const id = `id`;
const scrollBottomClass = `scroll-bottom`
const blinkAnchorClass = `blink-anchor`
const gradesMenu = $(`#grades ul`);

$(window).load(function () {
    grades.forEach(value => {
        gradesMenu.append(`<li><a href="#${value}" class="item control category">${value.toProperCase()}</a></li>`)
    });
});

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

$("body").on('DOMSubtreeModified', "#diagram", function () {
    grades.forEach(value => {
        const selector = `#grade-name="${value}"`;
        const elements = $(`div > :contains(${selector}):last-child`);
        var element = $(elements[elements.length - 1])
        
        if(element.attr(id) !== value) {
            element.attr(id, value);
            element.addClass(scrollBottomClass)
            element.addClass(blinkAnchorClass)

            let t = element.text();
            t = t.replace(selector, '');
            element.text(t);
        }
    });
});