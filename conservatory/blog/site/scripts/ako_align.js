const nearestSquareDimension = n => Math.round(Math.sqrt(n));

function alignTextForAko(innerText, length) {
	let htmlLength = innerText.length;
    let squareSize = nearestSquareDimension(length);
    const a = 'a';
    const z = 'z';  
    const A = 'A';
    const Z = 'Z';
    const zero = '0';
    const nine = '9';
    let result = "";
    let lineSize = 0;
    let isInTag = false;
    for (let i = 0; i < htmlLength; i++) {
        let c = innerText[i];
        result += c;
        // This is awful but I have no user input so it will work.
        if (c == '<') {
        	isInTag = true;
        } else if (c == '>') {
        	isInTag = false;
        }
        if (isInTag) continue;
        if ((c >= a && c <= z) || (c >= A && c <= Z) || (c >= zero && c <= nine) || c == '.' || c == ',' || c == '_' || c == ' ') {
            lineSize++;
            if (lineSize >= squareSize) {
                lineSize = 0;
                result += "<br/>";
            }
        }
    }
	return result;
}

const akoStuff = document.querySelectorAll(".ako");
akoStuff.forEach((item) => {
	let html = item.innerHTML;
	let text = item.innerText;
	item.innerHTML = alignTextForAko(html, text.length);
});