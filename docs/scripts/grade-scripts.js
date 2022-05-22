let grades = [
    'junior', 'middle', 'senior'
]

$("body").on('DOMSubtreeModified', "#diagram", function () {
    
});

$(window).load(function () {
    grades.forEach((value => {
        const selector = `#grade-name="${value}"`;
        const element = $(`div > :contains(${selector})`);
        if (element == null) return;
        element.attr('id', value);
        let t = element.text();
        t = t.replace(selector, '');
        element.text(t);

        var gradesMenu = $(`#grades ul`);
        gradesMenu.append(`<li><a href="${value}" class="item control category">${value.toProperCase()}</a></li>`)
    }));
});

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};