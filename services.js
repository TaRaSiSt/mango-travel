(function () {
    const services = [
        {
            id: 1,
            image: 'img/visa-opening.webp',
            title: 'Visa Opening',
            description: 'We provide visa support for citizens of any country. Our experts will advise on all visa issues.',
        },
        {
            id: 2,
            image: 'img/private-transfer.webp',
            title: 'Private Transfer',
            description: 'We can arrange a private transfer at the start or end point, book a hotel or offer a continuation of the rest after a safari.',
        },
        {
            id: 3,
            image: 'img/photo-report.webp',
            title: 'Photo Report',
            description: 'For an additional fee, you can get a full photo and video report on the trip, as well as a personal photo shoot.',
        },
        {
            id: 4,
            title: 'Medical Insurance',
            description: 'Reliable medical insurance that really covers the risks if something happens while traveling.',
            bg: 'style = "background-image: url(img/medical-insurance.webp); background-size: cover; background-position: center; height:165.925px; width: auto;"'
        },
    ];

    function renderservices(services) {
        const servicesContainer = document.querySelector('.additional-services');
        for (const service of services) {
            servicesContainer.innerHTML += `
            <div class="additional-services-card">
                <div ${service.bg}>
                    <img src="${service.image}" alt="">
                </div>
                <div class="additional-services-desc">
                    <p>${service.title}</p>
                    <p><span>${service.description}</span></p>
                </div>
            </div>
            `
        }
    }
    renderservices(services);
})();