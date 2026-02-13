const messages = {
    happy: [
        "Your smile is brighter than a thousand roses 🌹",
        "Stay happy, you're someone's favorite notification 💌",
        "Happiness looks dangerously good on you 💖"
    ],
    sad: [
        "Even roses have thorns. You'll bloom again 🌹",
        "It's okay to feel low. You're still deeply loved 💕",
        "Rain makes flowers grow. This will pass 🌧️"
    ],
    excited: [
        "That energy? Pure main character vibes ✨",
        "Channel that excitement into something unforgettable 💫",
        "You’re glowing more than fairy lights 💡"
    ],
    neutral: [
        "Calm is powerful. You're balanced and unbothered 😌",
        "Neutral today, unstoppable tomorrow 💼",
        "Peace is underrated. Keep it classy 💖"
    ],
    angry: [
        "Take a breath. Even fire needs control 🔥",
        "You’re too powerful to waste energy on anger 💢",
        "Strong hearts don’t stay mad for long ❤️"
    ],
    betrayed: [
        "Not everyone deserves your loyalty. You still shine 💎",
        "A broken heart still beats stronger than ever 💔",
        "This chapter hurts, but your story isn’t over 📖"
    ],
    single: [
        "Single? That's premium independence mode activated 😎",
        "You don’t need a Valentine. You ARE the prize 🏆",
        "Self-love season never expires 💕"
    ],
    confused: [
        "It’s complicated… but so are great love stories 🎬",
        "Clarity is coming. Stay patient 💡",
        "Confusion today, confidence tomorrow 💖"
    ]
};

const buttons = document.querySelectorAll(".emotion");
const card = document.getElementById("messageCard");
const messageText = document.getElementById("messageText");
const closeBtn = document.getElementById("closeCard");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const emotion = button.getAttribute("data-emotion");
        const randomMessage = messages[emotion][
            Math.floor(Math.random() * messages[emotion].length)
        ];
        messageText.textContent = randomMessage;
        card.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    card.style.display = "none";
});
