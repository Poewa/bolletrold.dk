(function () {
    'use strict';

    var month = new Date().getMonth(); // 0-indexed: 2 = March, 3 = April
    if (month !== 2 && month !== 3) return;

    // Activate Easter theme CSS
    document.body.classList.add('easter-theme');

    // === Easter Banner ===
    var banner = document.createElement('div');
    banner.className = 'easter-banner';
    banner.textContent = '\uD83D\uDC23 P\u00e5skeboller! Troldene fejrer p\u00e5ske! \uD83D\uDC30';
    document.body.insertBefore(banner, document.body.firstChild);

    // === Floating Easter Eggs ===
    var eggs = ['\uD83E\uDD5A', '\uD83C\uDF38', '\uD83D\uDC23', '\uD83D\uDC30', '\uD83C\uDF3C', '\uD83C\uDF37'];
    var eggContainer = document.createElement('div');
    eggContainer.className = 'easter-eggs-container';
    eggContainer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(eggContainer);

    for (var i = 0; i < 12; i++) {
        var egg = document.createElement('span');
        egg.className = 'floating-egg';
        egg.textContent = eggs[i % eggs.length];
        egg.style.left = (Math.random() * 100) + '%';
        egg.style.animationDelay = (Math.random() * 8) + 's';
        egg.style.animationDuration = (8 + Math.random() * 6) + 's';
        egg.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        eggContainer.appendChild(egg);
    }

    // === Easter sub-texts (front page only) ===
    var subtextElement = document.querySelector('.sub-text');
    var container = document.querySelector('.container:not(.gallery-container)');
    if (subtextElement && container && document.querySelector('.main-nav .active')) {
        var activeLink = document.querySelector('.main-nav .active');
        if (activeLink && activeLink.getAttribute('href') === 'index.html') {
            var easterTexts = [
                '"P\u00e5skeharen hopper gerne i din form, hvis du sp\u00f8rger p\u00e6nt." ( \u0361\u00b0 \u035c\u0296 \u0361\u00b0)',
                '"Mine \u00e6g er h\u00e5rdkogte \u2014 vil du kn\u00e6kke dem?" ( \u0361\u00b0 \u035c\u0296 \u0361\u00b0)',
                '"Hvem gemte \u00e6gget i min bolle? Det var ikke mig." ( \u0361\u00b0 \u035c\u0296 \u0361\u00b0)'
            ];
            // Override the existing interval's texts
            if (typeof window.subtexts !== 'undefined') {
                window.subtexts = easterTexts;
            }
            subtextElement.textContent = easterTexts[0];

            // Replace the rotating text logic
            var idx = 0;
            setInterval(function () {
                subtextElement.style.opacity = 0;
                setTimeout(function () {
                    idx = (idx + 1) % easterTexts.length;
                    subtextElement.textContent = easterTexts[idx];
                    subtextElement.style.opacity = 1;
                }, 500);
            }, 5000);
        }
    }
})();
