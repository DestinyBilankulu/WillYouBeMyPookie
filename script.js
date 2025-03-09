document.getElementById("yes").addEventListener("click", function() {
    alert("Yay! You said yes! 💜😭");
});

document.getElementById("no").addEventListener("click", function() {
    alert("Are you sure? :((( Think about it again!");
});

// Create floating flowers and computer elements
const flowerContainer = document.getElementById("flower-container");

for (let i = 0; i < 20; i++) {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = Math.random() * 5 + 3 + "s";
    flowerContainer.appendChild(flower);
}
