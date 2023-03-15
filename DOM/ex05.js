const paragraphs = document.querySelectorAll('p')

const deleteps = function (paragraphs,str) {
    paragraphs.forEach(function (p, index) {
        if (p.textContent.toLowerCase().indexOf(str) == -1) {
            return;
        }

        p.remove()
    })

}
deleteps(paragraphs,'js')

