const funFacts = [
    "I have a green thumb, nurturing my plants like they're my leafy children!",
    "My heart is as big as my garden, always ready to lend a hand to any furry friend in need!",
    "I'm a professional napper, mastering the art of snoozing while dreaming of my next botanical adventure!"
];

document.getElementById('generate-button').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById('fun-fact').textContent = funFacts[randomIndex];
});
