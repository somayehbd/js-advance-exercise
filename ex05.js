const paragraphs = document.querySelectorAll('p')

const deleteps = function (paragraphs, str) {
    paragraphs.forEach(function (p, index) {
        if (p.textContent.indexOf(str) == -1) {
            return;
        }

        let span = `<span style='background:yellow'>${str}</span>`;
        p.innerHTML = p.innerHTML.replace(str, span);
    })

}

let word = prompt('Enter a word: ');
deleteps(paragraphs, word)