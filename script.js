function createBubble() {
    const container = document.querySelector('.container');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 100 + 30;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 3}s`;
    container.appendChild(bubble);

    setTimeout(() => {
        container.removeChild(bubble);
    }, 8000);
}

setInterval(createBubble, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    const box = document.getElementById('box');
    
    // Store the original text of the button
    const originalText = button.textContent;
    
    button.addEventListener('click', function() {
        if (box.classList.contains('expand')) {
            box.classList.remove('expand');
            box.classList.add('collapse'); // Collapse the box
            button.textContent = originalText; // Revert button text
            button.classList.remove('no-shadow'); // Add shadow back
        } else {
            box.classList.remove('collapse');
            box.classList.add('expand'); // Expand the box
            button.textContent = 'Close'; // Change button text
            button.classList.add('no-shadow'); // Remove shadow
        }
    });
});