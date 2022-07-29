require('fs');
document.getElementById("header").innerHTML = fs.readFileSync("example.txt", 'utf-8');