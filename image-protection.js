// Prevent right-click on images
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
}, false);

// Prevent keyboard shortcuts for saving images
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + S
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }
    // Ctrl/Cmd + Shift + S
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }
});

// Additional protection for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.getElementsByTagName('img');
    for (let img of images) {
        // Prevent drag & drop
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
        
        // Add title attribute for better UX
        if (!img.hasAttribute('title')) {
            img.setAttribute('title', 'This image is protected');
        }
    }
});
