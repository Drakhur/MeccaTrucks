let navbar = document.querySelector(".navbar");
let fabars = document.querySelector(".fa-bars");

fabars.onclick = () => {
    navbar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {

    fetch("./client/resources.json")
    .then(response => response.json())
    .then( data => {

        // add items to home page first:
        let firstBox = document.querySelector(".home-text");
        let Box1H = document.createElement('h1');
        let box1P = document.createElement('p');
        box1P.innerHTML = (data.home[0].description);
        
        let titles = (data.home[0].title);
        console.log(titles.description);
        Box1H.innerHTML = titles;
        firstBox.appendChild(Box1H);
        firstBox.appendChild(box1P);



    })

    
});

   