window.category = URL.parse(location).searchParams.get("category");
if(!window.category){
    location.href = "/index.html";
}
let h1 = document.createElement('h1');
h1.innerText = "Jokes in Category \"" + category + "\"";
document.querySelector("main").prepend(h1)
let jokesTableBody = document.getElementById('jokes').querySelector("tbody");
fetch("/jokebook/category/" + category).then(response => response.ok ? response.json() : []).then(data => {
    if(data.length === 0){
        let p = document.createElement("p");
        p.textContent = "There are no jokes in this category.";
        jokesTableBody.parentElement.parentElement.appendChild(p);
        jokesTableBody.parentElement.remove();
        return;
    }
    for(let joke of data){
        let row = jokesTableBody.insertRow();
        row.insertCell().textContent = joke.setup;
        row.insertCell().textContent = joke.delivery;
    }
});