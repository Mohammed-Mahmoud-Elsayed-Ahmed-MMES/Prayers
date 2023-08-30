const paragraphs = document.querySelectorAll('p');
const boxes = document.querySelectorAll('.box');

for (const paragraph of paragraphs) {
    const icon = document.createElement('i');
    icon.className = 'fa-regular fa-heart love-icon';
    paragraph.appendChild(icon);
}


// Get all the love icons
const loveIcons = document.querySelectorAll('.love-icon');

// Attach click event listener to each love icon
loveIcons.forEach(icon  => {
    icon.addEventListener('click', () => {
        
        // Toggle the 'clicked' class on the clicked love icon
        icon.classList.toggle('clicked');
        icon.classList.add('fa-solid');
        icon.style.color = 'red';
        icon.classList.remove('fa-regular');
        
        // Update the clicked state in local storage
        const clickedIcons = Array.from(loveIcons).map(icon => icon.classList.contains('clicked'));
        localStorage.setItem('clickedIcons', JSON.stringify(clickedIcons));

        // Get the parent paragraph element
        const paragraph = icon.parentNode;

        // Create a new div
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.classList.toggle('new-div');

        // Clone the paragraph and append it to the new div
        const clonedParagraph = paragraph.cloneNode(true);
        newDiv.appendChild(clonedParagraph);

        // Append the new div before the container
        const container = document.querySelector('.container');
        container.parentNode.insertBefore(newDiv, container);
        
        // Delete selected icon and paragraph and Remove the next sibling span element
        const span = paragraph.nextElementSibling;
        if (span && span.tagName === 'SPAN') {
            span.remove();
        }
        icon.remove();
        paragraph.remove();
    });
});

// Restore the clicked state from local storage
window.addEventListener('DOMContentLoaded', () => {
    const clickedIcons = JSON.parse(localStorage.getItem('clickedIcons')) || [];
    clickedIcons.forEach((clicked, index) => {
        if (clicked) {
            loveIcons[index].classList.add('clicked');
            loveIcons[index].classList.add('fa-solid');
            loveIcons[index].style.color = 'red';
            loveIcons[index].classList.remove('fa-regular');

            // Get the parent paragraph element
            const paragraph = loveIcons[index].parentNode;

            // Create a new div
            const newDiv = document.createElement('div');
            newDiv.classList.add('box');
            newDiv.classList.toggle('new-div');

            // Clone the paragraph and append it to the new div
            const clonedParagraph = paragraph.cloneNode(true);
            newDiv.appendChild(clonedParagraph);

            // Append the new div before the container
            const container = document.querySelector('.container');
            container.parentNode.insertBefore(newDiv, container);

            // Delete selected icon and paragraph and Remove the next sibling span element
            const span = paragraph.nextElementSibling;
            if (span && span.tagName === 'SPAN') {
                span.remove();
            }
            loveIcons[index].remove();
            paragraph.remove();
        }
        
    });
});


