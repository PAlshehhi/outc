document.getElementById('popupButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Optional: Close the popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});


document.getElementById('popupButton2').addEventListener('click', function() {
    document.getElementById('popup2').style.display = 'flex';
});

document.getElementById('closePopup2').addEventListener('click', function() {
    document.getElementById('popup2').style.display = 'none';
});

// Optional: Close the popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup2')) {
        document.getElementById('popup2').style.display = 'none';
    }
});