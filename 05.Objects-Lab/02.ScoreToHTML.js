function scoreToHTML(arr) {

    let j = arr[0];
    let obj = JSON.parse(j);
    let html = "<table>\n"
    html += " <tr><th>name</th><th>score</th></tr>";

    for (let o of obj) {
        html += `  <tr><td>${htmlSplit(o.name)}</td><td>${o.score}</td></tr>\n`;
    }
    html += "table";
    console.log(html);

    function htmlSplit(text) {
 let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

scoreToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);
