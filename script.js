// Select the container where lines will be added
const hackerLinesContainer = document.querySelector('.hacker-lines-container');

// Function to create hacker lines
function createLine() {
    const line = document.createElement('div');
    line.classList.add('line');

    const circle = document.createElement('div');
    circle.classList.add('circle');

    line.appendChild(circle);
    hackerLinesContainer.appendChild(line);
}

// Create multiple lines
for (let i = 0; i < 100; i++) {
    createLine();
}
