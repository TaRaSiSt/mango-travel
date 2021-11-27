(function () {
    const ourTours = [
        {
            id: 1,
            image: 'img/elephant.webp',
            title: 'Horse Ranch Cottage',
            description: 'From Serengeti to Ngorongoro, with nights in comfortable hotels and breakfasts included.',
            date: 'Departing: 9 Nov 2022',
            price: 'Cost: $4000',
            link: '#'
        },
        {
            id: 2,
            image: 'img/tree.webp',
            title: 'Amazing Week in Kenya ',
            description: 'Starting from Nairobi, we`ll visit Maasai Mara, Lake Nakuru, Lake Naivasha andHell’s Gate.',
            date: 'Departing: 12 Jan 2022',
            price: 'Cost: $5500',
            link: '#'
        },
        {
            id: 3,
            image: 'img/bulls.webp',
            title: 'Amboseli Park in Kenya',
            description: 'Go on a 5-days amazing tour around the Amboseli Park in Kenya',
            date: 'Departing: 03 Mar 2022',
            price: 'Cost: $6200',
            link: '#'
        },
        {
            id: 4,
            image: 'img/antilop.webp',
            title: 'Jozani Chwaka Bay National Park',
            description: 'Visit Josani, or as it is also called Fairytale Forest, the only national park in Zanzibar.',
            date: 'Departing: 03 Mar 2022',
            price: 'Cost: $6200',
            link: '#'
        },
        {
            id: 5,
            image: 'img/gorila.webp',
            title: 'Gorilla Trekking in Rwanda ',
            description: 'We start from Akagera National Park, and then go on our gorilla trekking trip lasting for 5 days.',
            date: 'Departing: 03 Mar 2022',
            price: 'Cost: $6200',
            link: '#'
        }
        
    ];

    function renderTours(ourTours) {
        const ourToursContainer = document.querySelector('.our-tours-card-box');
        for (const tour of ourTours) {
            ourToursContainer.innerHTML += `
            <div class="our-tours-cards">
                    <div>
                        <img src="${tour.image}" alt="">
                    </div>
                    <div class="our-tours-card-name">
                        <p>${tour.title}</p>
                    </div>
                    <div class="our-tours-card-desc">
                        <p>${tour.description}</p>
                    </div>
                    <div class="our-tours-card-dp">
                        <p>${tour.date} <br>
                            <span style="color:rgb(241, 195, 36)">${tour.price}</span>
                        </p>
                    </div>
                </div>
            `
        }
    }
    renderTours(ourTours);
})();