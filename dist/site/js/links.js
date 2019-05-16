// adding links, adapted from https://blog.parkermoore.de/2014/08/01/header-anchor-links-in-vanilla-javascript-for-github-pages-and-jekyll/
/**
 * Generates an anchor for a given id
 * @param {string} id ID of anchor to generate
 */
var anchorForId = function (id) {
    var anchor = document.createElement("a");
    anchor.className = "header-link";
    anchor.href = "#" + id;
    anchor.innerHTML = "<i class=\"fa fa-link\"></i>";
    return anchor;
};

/**
 * Checks if a given element has a class
 * @param {HTMLElement} element 
 * @param {string} className 
 */
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

/**
 * Turns text into a slug
 * @param {string} text 
 */
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

/**
 * Linkifies anchors for a given level of heading
 * @param {number} level Heading Level to add links to. Between 1 and 6. 
 * @param {HTMLElement} containingElement Element to linkify anchors in
 */
var linkifyAnchors = function (level, containingElement) {
    var headers = containingElement.getElementsByTagName("h" + level);
    for (var h = 0; h < headers.length; h++) {
        var header = headers[h];
        if (hasClass(header, 'uk-card-title') || hasClass(header, 'uk-article-title') || hasClass(header, 'nolink')) {
            continue;
        }
        
        if (header.id === undefined || header.id == "") {
            header.id = slugify(header.textContent)
        }
        header.appendChild(anchorForId(header.id));
    }
};

document.onreadystatechange = function () {
    if (this.readyState === "complete") {
        var contentBlock = document.getElementsByTagName("article")[0];
        if (!contentBlock) {
            return;
        }
        for (var level = 1; level <= 6; level++) {
            linkifyAnchors(level, contentBlock);
        }
    }
};