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

document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById('box');
    const button = document.querySelector('.button');
    let isOpen = false;

    button.addEventListener('click', function() {
        if (isOpen) {
            box.style.height = '0';
            box.querySelector('.box-content').style.opacity = '0';
            button.textContent = 'Open';
        } else {
            box.style.height = '300px'; /* Adjust height as needed */
            box.querySelector('.box-content').style.opacity = '1';
            button.textContent = 'Close';
        }
        isOpen = !isOpen;
    });
});

document.addEventListener("scroll", function() {
    const scrollTextBox = document.getElementById('scrollTextBox');
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (window.scrollY / maxScroll) * 100;

    if (scrollPercent < 5) {
        scrollTextBox.textContent = "Explore the Ocean!";
        scrollTextBox.style.color = "white";
    } else if (scrollPercent >= 5 && scrollPercent < 35) {
        scrollTextBox.textContent = "Sunlight Zone";
        scrollTextBox.style.color = "white"; 
    } else if (scrollPercent >= 35 && scrollPercent < 75) {
        scrollTextBox.textContent = "Twilight Zone";
        scrollTextBox.style.color = "white"; /* Yellow text color */
    } else {
        scrollTextBox.textContent = "Midnight Zone";
        scrollTextBox.style.color = "#ffeb66"; /* Yellow text color */
    }
});

function scrollToPictureBox(id) {
    const pictureBox = document.getElementById(id);
    if (pictureBox) {
        pictureBox.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element with id "${id}" not found.`);
    }
}