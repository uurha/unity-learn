let grades = [
    'junior', 'middle', 'senior'
];

const id = `id`;
const inner = `inner`;
const link = `link`;
const customAttribute = `custom-attribute`;

const diagram = `#diagram`;
const gradesMenu = `#grades`;

const scrollBottomClass = `scroll-bottom`;
const blinkAnchorClass = `blink-anchor`;
const gradeName = `grade-name`;
const timeoutTime = 100;

const diagramContainer = `geDiagramContainer`;

$(window).load(function () {
    grades.forEach(value => {
        $(`${gradesMenu} ul`).append(`<li><a href="#${value}" class="item control category">${value.toProperCase()}</a></li>`)
    });
});

function onModified() {
    const container = $(`.${diagramContainer}`)
    if (container !== undefined) {
        if (!container.hasClass(inner)) {
            container.addClass(inner);
        }
        
        grades.forEach(value => {
            const element = setup(value, gradeName, [scrollBottomClass, blinkAnchorClass]);
            if (element.attr(id) !== value) {
                element.attr(id, value);
            }
        });
        
        setup(link, customAttribute, [link])
    }
}

function setup(lookupValue, lookupAttribute, classesToAdd) {
    const textSelector = `#${lookupAttribute}="${lookupValue}"`;
    const element = $(`div:contains(${textSelector}):last`);

    classesToAdd.forEach(value => {
        if (!element.hasClass(value))
            element.addClass(value)
    })

    let t = element.text();
    t = t.replace(textSelector, '');
    element.text(t);

    return element;
}

let timeoutID;
$("body").on('DOMSubtreeModified', diagram, function () {
    if (timeoutID !== undefined) {
        clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(onModified, timeoutTime);
});

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};