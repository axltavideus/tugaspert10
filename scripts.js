// Carousel Initialization
const myCarouselElement = document.querySelector('#carouselExampleFade');
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
});

// Modal Focus Setup
const myModal = document.getElementById('exampleModal');
const myInput = document.getElementById('myInput');
myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus();
});

// Search Function
document.querySelector('form[role="search"]').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents form from refreshing the page

    const searchQuery = document.querySelector('input[type="search"]').value.toLowerCase();
    const wellnessCards = document.querySelectorAll('#wellness-cards .card');
    let found = false;

    wellnessCards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(searchQuery)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    let notFoundMessage = document.getElementById('not-found');
    if (!found) {
        if (!notFoundMessage) {
            notFoundMessage = document.createElement('p');
            notFoundMessage.id = 'not-found';
            notFoundMessage.className = 'text-muted mt-3';
            notFoundMessage.innerText = 'No results found for your search.';
            document.querySelector('#wellness-cards').appendChild(notFoundMessage);
        }
    } else if (notFoundMessage) {
        notFoundMessage.remove();
    }
});

$(document).ready(function () {
    const articles = [
        {
            title: 'Apakah "Pound Fit" Bisa Dilakukan di Rumah Tanpa Instruktur?',
            text: 'Pernahkah kamu melihat sekelompok orang yang sedang latihan pound fit?',
            image: 'images/news1.jpeg',
            link: 'https://lifestyle.kompas.com/read/2024/10/25/091045120/apakah-pound-fit-bisa-dilakukan-di-rumah-tanpa-instruktur'
        },
        {
            title: 'Jangan Anggap Sepele, Stres Dapat Meningkatkan Risiko Stroke',
            text: 'Di tengah kesibukan dan tekanan hidup yang semakin meningkat, stres telah menjadi bagian tak terpisahkan dari kehidupan banyak orang.',
            image: 'images/news2.jpg',
            link: 'https://lifestyle.kompas.com/read/2024/10/25/173100620/jangan-anggap-sepele-stres-dapat-meningkatkan-risiko-stroke'
        },
        {
            title: '6 Taman Wisata Favorit Warga, Dulu Viral Kini Angker & Diabaikan',
            text: 'Sejumlah tempat wisata yang dahulu begitu populer dan ramai kini sudah kehilangan pesonanya.',
            image: 'images/news3.jpeg',
            link: 'https://www.cnbcindonesia.com/lifestyle/20241022094747-33-581959/6-taman-wisata-favorit-warga-dulu-viral-kini-angker-diabaikan'
        }
    ];

    const $wellnessCardsContainer = $('#wellness-cards');

    // Clear the container first
    $wellnessCardsContainer.empty();

    articles.forEach(article => {
        // Generate HTML for each card
        const cardHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${article.image}" class="card-img-top mt-2" alt="${article.title}">
                <div class="card-body">
                    <a href="${article.link}" class="card-title fs-5" target="_blank" rel="noopener noreferrer">${article.title}</a>
                    <p class="card-text text-body-secondary">${article.text}</p>
                </div>
            </div>
        `;

        // Append the card to the container
        $wellnessCardsContainer.append(cardHTML);
    });
});

$(document).ready(function () {
    const articles2 = [
        {
            title: 'IN2MF 2024 Dorong Akselerasi Pengembangan Sektor Modest Fashion di Indonesia',
            text: 'Bank Indonesia, Kementerian Koperasi dan UKM RI, dan Indonesian Fashion Chamber',
            image: 'images/fashion1.webp',
            link: 'https://www.beritasatu.com/ekonomi/2850792/in2mf-2024-dorong-akselerasi-pengembangan-sektor-modest-fashion-di-indonesia',
            tags: 'fashion'
        },
        {
            title: 'Brand Fashion Indonesia Lebarkan Bisnis ke Belanda',
            text: 'Brand fashion Indonesia, Bhumitala akhirnya melebarkan sayap bisnis hingga ke Eropa.',
            image: 'images/fashion2.webp',
            link: 'https://wartaekonomi.co.id/read547506/brand-fashion-indonesia-lebarkan-bisnis-ke-belanda',
            tags: 'fashion'
        },
        {
            title: "Fresh faced? Experimenting with the 'boyfriend blush' trend that's all over my TikTok",
            text: 'Boyfriend blush is all over my social media right now (that, and Jacob Elordi for Bottega Veneta).',
            image: 'images/trends1.jpg',
            link: 'https://www.russh.com/boyfriend-blush-trend-how-to-recreate/',
            tags: 'trends'
        },
        {
            title: "How the Speedy Bag Became a New Menswear Favorite",
            text: "One of the first designer items I ever lusted over was a Louis Vuitton Speedy bag.",
            image: 'images/trends2.jpg',
            link: 'https://www.vogue.com/article/louis-vuitton-speedy-bag-menswear-trend',
            tags: 'trends'
        }
    ];

    const $fashionCardsContainer = $('#fashion-cards');

    // Clear the container first
    $fashionCardsContainer.empty();

    articles2.forEach(article => {
        // Generate HTML for each card
        const cardHTML = `
            <div class="card" style="width: 18rem;" data-tag="${article.tags}">
                <img src="${article.image}" class="card-img-top mt-2" alt="${article.title}">
                <div class="card-body">
                    <a href="${article.link}" class="card-title fs-5" target="_blank" rel="noopener noreferrer">${article.title}</a>
                    <p class="card-text text-body-secondary">${article.text}</p>
                    <a class="btn btn-light link-ft" data-filter="${article.tags}">${article.tags}</a>
                </div>
            </div>
        `;

        // Append the card to the container
        $fashionCardsContainer.append(cardHTML);
    });

    // Filtering function
    $(document).on('click', '.link-ft', function (event) {
        event.preventDefault();

        // Remove 'active' class from all links and add it to the clicked one
        $('.link-ft').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');
        const fashionCards = $('#fashion-cards .card');

        fashionCards.each(function () {
            const cardTag = $(this).data('tag');
            if (filter === 'all' || cardTag === filter) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});