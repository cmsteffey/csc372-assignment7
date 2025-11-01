fetch("/jokebook/categories").then(res => res.json()).then((data) => {
    document.getElementById("categories").replaceChildren();
    for(let category of data){
        document.getElementById("categories").add(new Option(category.category, category.category));
    }
    document.getElementById("categories").addEventListener("change", (e) => {
        let custom = e.currentTarget.options[e.currentTarget.selectedIndex].dataset.custom !== undefined;
        document.getElementById("custom-input").hidden = !custom;
        if(custom){
            e.currentTarget.removeAttribute("name");
            document.getElementById("custom-input").name = "category"
        } else {
            document.getElementById("custom-input").removeAttribute("name");
            e.currentTarget.name = "category"
        }
    });
    let customOption = new Option("New Category:");
    customOption.dataset.custom = "";
    document.getElementById("categories").add(customOption);
})