let navbar = document.querySelector(".navbar");
let fabars = document.querySelector(".fa-bars");

fabars.onclick = () => {
    navbar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {

    fetch("../resources.json")
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
// let CurrContainerIndex = 0;
//     const containers = Array.from(document.querySelectorAll('.container'));
//     let isTransitioning = false;

        //     // Add scroll event listener
        // window.addEventListener('scroll', function() {
        //     const scrollY = window.scrollY || document.documentElement.scrollTop;
        //     const threshhold = 40;

        //     // Trigger transition when scrolled past a certain point
        //     if (scrollY > threshhold && CurrContainerIndex < containers.length -1) {
        //         transitionContainers(CurrContainerIndex + 1);
        //     }
        //     // Trigger transition when scrolled back to a certain point
        //     if (scrollY < threshhold && CurrContainerIndex > 0) {
        //         transitionContainers(CurrContainerIndex - 1);
        //     }
        // });
        // // function to transition containers
        // function transitionContainers(nextIndex) {
        //     // Get the current container index
        //     const CurrContainer = containers[CurrContainerIndex];
        //     const nextContainer = containers[CurrContainerIndex];
        //     // Check if the next container is in view

        //     if(nextContainer){
        //         // fade out the current container
        //         CurrContainer.classList.add("hidden");

        //         // wait for the fade to finish
        //         setTimeout(() => {
        //             CurrContainer.classList.add('final'); // set display to nnoe
        //             nextContainer.classList.remove('hidden'); //start fading in the next one
        //             isTransitioning = false;

        //         }, 2000); //apparently matches opacity transition time
        //         currentContainerIndex = nextIndex;
        //     }
        // }
   