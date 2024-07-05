document.addEventListener('DOMContentLoaded', function() {
    var images = ['service1.jpg', 'service2.jpg', 'service3.jpg']; // List of image filenames
    var currentIndex = 0; // Index of the currently displayed image
    var intervalTime = 3000; // Interval time in milliseconds (3 seconds)

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length; // Increment index and wrap around
        var imageUrl = images[currentIndex];
        document.getElementById('serviceImage').src = imageUrl; // Change the image source
    }

    // Call changeImage function at regular intervals
    setInterval(changeImage, intervalTime);
});
