// Show the popup automatically after 2 seconds
window.addEventListener('load', function () {
    const popup = document.getElementById('popupForm');
    setTimeout(() => {
        popup.style.visibility = 'visible';
        popup.style.opacity = '1'; // Make the popup visible
    }, 2000); // Delay of 2 seconds
});

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popupForm');
    popup.style.opacity = '0'; // Fade out
    setTimeout(() => {
        popup.style.visibility = 'hidden'; // Fully hide after fade-out
    }, 500); // Matches the fade-out duration
}
