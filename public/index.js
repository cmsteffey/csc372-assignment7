fetch("/jokebook/random").then(res => res.json()).then((data) => {

    document.getElementById("joke").innerText = data.setup + "\n" + data.delivery;

});