const flowers = ["🌸", "🌼", "🌷", "🌺"];

function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 8000);
}

setInterval(createFlower, 400);
