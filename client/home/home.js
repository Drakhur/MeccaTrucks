require 

let navbar = document.querySelector(".navbar");
let fabars = document.querySelector(`.fa-bars`);

fabars.onclick = () => {
    navbar.classList.toggle("active");
}

function toggleBlur(shouldBlur) {
    let container = document.querySelector('.box');
    if (shouldBlur) {
        container.classList.add('blur');
    } else {
        container.classList.remove('blur');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var pages = document.querySelectorAll('.container');
    var currentPageIndex = 0;

    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            // Scroll down
            if (currentPageIndex < pages.length - 1) {
                currentPageIndex++;
                scrollToPage(currentPageIndex);
            }
        } else {
            // Scroll up
            if (currentPageIndex > 0) {
                currentPageIndex--;
                scrollToPage(currentPageIndex);
            }
        }
    });

    function scrollToPage(index) {
        pages[index].scrollIntoView({ behavior: 'smooth' });
    }
});



// // Create scene, camera, and renderer
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(78, window.innerWidth / window.innerHeight, 0.1, 1000);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(50,50);

// document.getElementById('logo').appendChild(renderer.domElement);

// // Load the texture
// var textureLoader = new THREE.TextureLoader();
// var texture = textureLoader.load('../imgs/seattle2.jpeg');

// // Create a cube with texture
// var geometry = new THREE.BoxGeometry();
// var material = new THREE.MeshBasicMaterial({ map: texture });
// var cube = new THREE.Mesh(geometry, material);
// renderer.setClearColor(0x374151);
// scene.add(cube);

// // Position camera
// camera.position.z = 1.2;

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.02;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }
// animate();