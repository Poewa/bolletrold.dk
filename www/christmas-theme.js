(function () {
    'use strict';

    var month = new Date().getMonth(); // 0-indexed: 10 = November, 11 = December
    if (month !== 10 && month !== 11) return;

    // Activate Christmas theme CSS
    document.body.classList.add('christmas-theme');

    // === Christmas Banner ===
    var banner = document.createElement('div');
    banner.className = 'christmas-banner';
    banner.textContent = '🎅 Glædelig jul! Julemanden elsker også lune boller! 🎄';
    document.body.insertBefore(banner, document.body.firstChild);

    // === Floating Snowflakes ===
    var snowflakes = ['❄️', '⛄', '🎁', '🎄', '✨', '❄️'];
    var snowflakeContainer = document.createElement('div');
    snowflakeContainer.className = 'christmas-snowflakes-container';
    snowflakeContainer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(snowflakeContainer);

    for (var i = 0; i < 15; i++) {
        var flake = document.createElement('span');
        flake.className = 'floating-snowflake';
        flake.textContent = snowflakes[i % snowflakes.length];
        flake.style.left = (Math.random() * 100) + '%';
        flake.style.animationDelay = (Math.random() * 8) + 's';
        flake.style.animationDuration = (8 + Math.random() * 6) + 's';
        flake.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        snowflakeContainer.appendChild(flake);
    }

    // === Christmas sub-texts (front page only) ===
    var subtextElement = document.querySelector('.sub-text');
    var container = document.querySelector('.container:not(.gallery-container)');
    if (subtextElement && container && document.querySelector('.main-nav .active')) {
        var activeLink = document.querySelector('.main-nav .active');
        if (activeLink && activeLink.getAttribute('href') === 'index.html') {
            var christmasTexts = [
                '"Julemanden kommer ned i min skorsten i nat..." ( ͡° ͜ʖ ͡°)',
                '"Vil du mærke julemandens store sæk med klejner?" ( ͡° ͜ʖ ͡°)',
                '"Har du været en artig nisse, eller skal du have smæk med kagerullen?" ( ͡° ͜ʖ ͡°)'
            ];
            // Override the existing interval's texts
            if (typeof window.subtexts !== 'undefined') {
                window.subtexts = christmasTexts;
            }
            subtextElement.textContent = christmasTexts[0];

            // Replace the rotating text logic
            var idx = 0;
            setInterval(function () {
                subtextElement.style.opacity = 0;
                setTimeout(function () {
                    idx = (idx + 1) % christmasTexts.length;
                    subtextElement.textContent = christmasTexts[idx];
                    subtextElement.style.opacity = 1;
                }, 500);
            }, 5000);
        }
    }
})();
