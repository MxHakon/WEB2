// Select the canvas and set its width and height
const canvas = document.getElementById('hackerCanvas');
const ctx = canvas.getContext('2d');

// Set the size of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Store all points and lines data
let points = [];
const numPoints = 100;
const maxDistance = 150;

// Randomize between blue and white for the lines
function getRandomColor() {
    return Math.random() > 0.5 ? 'rgba(0, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.6)';
}

// Create a random point
function createPoint() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: getRandomColor()
    };
}

// Initialize points
for (let i = 0; i < numPoints; i++) {
    points.push(createPoint());
}

// Draw the circles at connecting points
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
}

// Draw lines between points
function drawLine(point1, point2) {
    ctx.beginPath();
    ctx.moveTo(point1.x, point1.y);
    ctx.lineTo(point2.x, point2.y);
    ctx.strokeStyle = point1.color;
    ctx.lineWidth = 1;
    ctx.stroke();
}

// Update the position of each point and bounce off the edges
function updatePoints() {
    points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off walls
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
    });
}

// Animate the scene
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Loop through each point
    points.forEach((point1, index) => {
        // Draw a circle at the point
        drawCircle(point1.x, point1.y);

        // Check each other point for possible connections
        for (let j = index + 1; j < points.length; j++) {
            let point2 = points[j];

            // Calculate the distance between points
            const distance = Math.hypot(point1.x - point2.x, point1.y - point2.y);

            // If points are close enough, draw a connecting line
            if (distance < maxDistance) {
                drawLine(point1, point2);
            }
        }
    });

    // Update the positions of the points
    updatePoints();

    // Repeat the animation
    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Select elements for the login functionality
const loginButton = document.getElementById('loginButton');
const keyInput = document.getElementById('keyInput');

// Add event listener for the login button
loginButton.addEventListener('click', function() {
    const enteredKey = keyInput.value;
    if (enteredKey === 'mxz') {
        // Redirect to another page
        window.location.href = 'loggedin.html'; // Adjust the URL to where the logged-in page will be
    } else {
        alert('Incorrect Key!'); // Alert user if the key is incorrect
    }
});
