(function () {
    const reasons = [
        {
            id: 1,
            image: 'img/experience.svg',
            title: 'Experience',
            description: 'the exotic countries, go beyond the main streets and see the real life.',
        },
        {
            id: 2,
            image: 'img/escape.svg',
            title: 'Escape',
            description: 'from the bustle of big cities and get closer to the nature as it is.',
        },
        {
            id: 3,
            image: 'img/see.svg',
            title: 'See',
            description: 'wild animals in the flesh. Hurry, as many of them are endangered!',
        },
        {
            id: 4,
            image: 'img/stay.svg',
            title: 'Stay',
            description: 'in the selected lodges and villas on the route, with hot water and AC.',
        },
        {
            id: 5,
            image: 'img/travel.svg',
            title: 'Travel',
            description: 'with expert guides and game rangers who know the best spots.',
        }
    ];

    function renderreasons(reasons) {
        const reasonsContainer = document.querySelector('.reasons-safari-section');
        for (const reason of reasons) {
            reasonsContainer.innerHTML += `
            <div class="reasons-safari-card">
                    <div>
                        <img src="${reason.image}" alt="">
                    </div>
                    <div class="reasons-safari-desc">
                        <p>${reason.title}</p>
                        <p><span>${reason.description}</span></p>
                    </div>
                </div>
            `
        }
    }
    renderreasons(reasons);
})();