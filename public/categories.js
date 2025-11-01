document.querySelector("input").addEventListener("keyup", (e)=>{
    if (e.key === "Enter") {
        location = "/jokeCategory.html?category=" + e.currentTarget.value;
    }
})
fetch("/jokebook/categories").then(res => res.ok ? res.json() : []).then(categories => {
    let tableBody = document.getElementById("categories").querySelector("tbody");
    console.log(categories);
    for (let category of categories) {
        let row = tableBody.insertRow();
        console.log(row);
        let nameCell = row.insertCell();
        let link = document.createElement("a");
        link.href = "/jokeCategory.html?category=" + category.category;
        link.innerText = category.category;
        nameCell.appendChild(link);
        row.insertCell().textContent = category.num
    }
})
