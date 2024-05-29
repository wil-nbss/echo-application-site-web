var btn = document.getElementById('myButton');

btn.onmouseover = function() {
    btn.style.backgroundColor = "#0d92a4";
}

btn.onmouseout = function() {
    btn.style.backgroundColor = "";
}

btn.onclick = function() {
    window.location.href = 'https://www.bing.com'; // Remplacez par votre URL
}