function JSONtable(arr) {
    let html = "<table>\n";
    for (let i = 0; i < arr.length; i++) {
        let obj = JSON.parse(arr[ i ]);
        html += `\t<tr>\n`;
        html += `\t\t<td>${htmlEscape(obj.name)}</td>\n`;
        html += `\t\t<td>${htmlEscape(obj.position)}</td>\n`
        html += `\t\t<td>${obj.salary}</td>\n`;
        html += `\t</tr>\n`;
    }
    html += '</table>';
    console.log(html);
    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ ch ]);
    }
}
JSONtable([ '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}' ]
);