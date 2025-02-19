function showMessage() {
    let messageBox = document.getElementById("message-box");
    let message = document.getElementById("message");
    
    let text = "A friend is one of the best things you can have, and the best thing you can be. Cheers to our unforgettable college memories! 🎓🥳";
    
    messageBox.classList.remove("hidden");
    messageBox.style.opacity = "1";

    let index = 0;
    message.innerHTML = "";
    
    function typeEffect() {
        if (index < text.length) {
            message.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();

    createFloatingEmojis();
}

function createFloatingEmojis() {
    let emojis = ["🎉", "🎓", "🥳", "🤩", "🎶", "🍕", "🎊"];
    
    for (let i = 0; i < 10; i++) {
        let emoji = document.createElement("div");
        emoji.className = "emoji";
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = Math.random() * window.innerHeight + "px";
        emoji.style.animationDuration = Math.random() * 2 + 2 + "s";
        
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2000);
    }
}
