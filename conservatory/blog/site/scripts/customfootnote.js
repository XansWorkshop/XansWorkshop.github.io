const footnotes = document.getElementsByClassName("footnote-ref");
for (let i = 0; i < footnotes.length; i++) {
    let href = footnotes[i].getAttribute("href");
    href = href.substring(4);
    if (href.startsWith("disp:")) {
        footnotes[i].innerHTML = href.substring(5);
    }
}