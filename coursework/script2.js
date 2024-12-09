const carSeries = [
    {
        title: "1",
        cars: [
            { name: "BMW 1 серії", gas: "Бензин", diesel: "Дизель", price: "1 200 000" },
            { name: "BMW M135i xDrive", gas: "Бензин", price: "1 700 000" },
        ],
    },
    {
        title: "2",
        cars: [
            { name: "BMW 2 серії Coupe", gas: "Бензин", diesel: "Дизель", price: "1 300 000" },
            { name: "BMW M2 Coupe", gas: "Бензин", price: "2 600 000" },
            { name: "BMW 2 серії Active Tourer", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид", price: "1 450 000" },
        ],
    },
    {
        title: "3",
        cars: [
            { name: "BMW 3 серії Седан", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид", price: "1 500 000" },
            { name: "BMW 3 серії Touring", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид", price: "1 600 000" },
            { name: "BMW M3 Седан", gas: "Бензин", price: "2 800 000" },
            { name: "BMW M3 Competition Touring", gas: "Бензин", diesel: "Дизель", price: "3 000 000" },
        ],
    },
    {
        title: "4",
        cars: [
            { name: "BMW 4 серії Coupe", gas: "Бензин", diesel: "Дизель", price: "1 700 000" },
            { name: "BMW M4 серії Купе", gas: "Бензин", diesel: "Дизель", price: "3 200 000" },
            { name: "BMW M440i xDrive Гран Купе", gas: "Бензин", price: "2 500 000" },
            { name: "BMW 4 серії Гран Купе", gas: "Бензин", diesel: "Дизель", electric: "Електро", price: "1 800 000" },
            { name: "BMW 4 серії Convertible", gas: "Бензин", diesel: "Дизель", price: "2 000 000" },
            { name: "BMW M4 серії Кабріолет", gas: "Бензин", diesel: "Дизель", price: "3 500 000" },
        ],
    },
    {
        title: "5",
        cars: [
            { name: "BMW 5 серії Седан", gas: "Бензин", diesel: "Дизель", price: "2 000 000" },
            { name: "BMW 5 серії Cедан плагін-гібрид", plugin: "Плагін-гібрид", price: "2 200 000" },
            { name: "BMW i5", electric: "Електро", price: "2 500 000" },
            { name: "BMW i5 M60 xDrive", electric: "Електро", price: "2 800 000" },
        ],
    },
    {
        title: "7",
        cars: [
            { name: "BMW 7 серії Седан", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид", price: "3 500 000" },
            { name: "BMW i7", electric: "Електро", price: "4 000 000" },
            { name: "BMW i7 M70 xDrive", electric: "Електро", price: "4 500 000" },
            { name: "BMW M760e xDrive", plugin: "Плагін-гібрид", price: "3 800 000" },
        ],
    },
    {
        title: "8",
        cars: [
            { name: "BMW 8 серії Купе", gas: "Бензин", diesel: "Дизель", price: "2 500 000" },
            { name: "BMW M8 Купе", gas: "Бензин", price: "4 000 000" },
            { name: "BMW 8 серії Кабріолет", gas: "Бензин", diesel: "Дизель", price: "2 800 000" },
            { name: "BMW M8 Кабріолет", gas: "Бензин", price: "4 500 000" },
            { name: "BMW 8 серії Gran Coupé", gas: "Бензин", diesel: "Дизель", price: "3 000 000" },
            { name: "BMW M8 Gran Coupé", gas: "Бензин", price: "4 800 000" },
        ],
    },
    {
        title: "X",
        cars: [
            { name: "BMW X1", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид", price: "1 500 000" },
            { name: "BMW iX1", electric: "Електро", price: "1 800 000" },
            { name: "BMW X2", gas: "Бензин", diesel: "Дизель", price: "1 600 000" },
            { name: "BMW X2 M35i xDrive", gas: "Бензин", price: "2 200 000" },
            { name: "BMW iX2", electric: "Електро", price: "2 400 000" },
            { name: "BMW X3", gas: "Бензин", diesel: "Дизель", price: "1 800 000" },
            { name: "BMW X3 30e xDrive", plugin: "Плагін-гібрид", price: "2 100 000" },
            { name: "BMW X3 M50 xDrive", gas: "Бензин", price: "2 300 000" },
            { name: "BMW iX3", electric: "Електро", price: "2 500 000" },
            { name: "BMW iX", electric: "Електро", price: "3 500 000" },
            { name: "BMW iX M60", electric: "Електро", price: "4 000 000" },
            { name: "BMW X4", gas: "Бензин", diesel: "Дизель", price: "2 200 000" },
            { name: "BMW X4 M", gas: "Бензин", diesel: "Дизель", price: "3 000 000" },
            { name: "BMW X5 (2023)", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид", price: "3 000 000" },
            { name: "BMW X5 M (2023)", gas: "Бензин", price: "3 500 000" },
            { name: "BMW X6 (2023)", gas: "Бензин", diesel: "Дизель", price: "3 200 000" },
            { name: "BMW X6 M (2023)", gas: "Бензин", diesel: "Дизель", price: "3 700 000" },
            { name: "BMW X7", gas: "Бензин", diesel: "Дизель", price: "3 800 000" },
            { name: "BMW X7 M60i xDrive", gas: "Бензин", diesel: "Дизель", price: "4 200 000" },
            { name: "BMW XM", plugin: "Плагін-гібрид", price: "5 000 000" },
        ],
    },
    {
        title: "Z4",
        cars: [
            { name: "BMW Z4 Roadster", gas: "Бензин", price: "2 200 000" },
        ],
    },
    {
        title: "M",
        cars: [
            { name: "BMW M2 Купе", gas: "Бензин", price: "2 400 000" },
            { name: "BMW M3 Седан", gas: "Бензин", price: "3 000 000" },
            { name: "BMW M3 Competition Touring", gas: "Бензин", diesel: "Дизель", price: "3 200 000" },
            { name: "BMW M4 серії Купе", gas: "Бензин", diesel: "Дизель", price: "3 500 000" },
            { name: "BMW M440i xDrive Гран Купе", gas: "Бензин", price: "2 800 000" },
            { name: "BMW M4 серії Кабріолет", gas: "Бензин", diesel: "Дизель", price: "3 800 000" },
            { name: "BMW M8 Купе", gas: "Бензин", price: "4 000 000" },
            { name: "BMW M8 Кабріолет", gas: "Бензин", price: "4 500 000" },
            { name: "BMW M8 Gran Coupé", gas: "Бензин", price: "4 800 000" },
            { name: "BMW X2 M35i xDrive", gas: "Бензин", price: "2 500 000" },
            { name: "BMW X3 M50 xDrive", gas: "Бензин", price: "2 700 000" },
            { name: "BMW X4 M", gas: "Бензин", diesel: "Дизель", price: "3 000 000" },
            { name: "BMW X5 M (2023)", gas: "Бензин", price: "3 500 000" },
            { name: "BMW X6 M (2023)", gas: "Бензин", diesel: "Дизель", price: "3 700 000" },
            { name: "BMW X7 M60i xDrive", gas: "Бензин", diesel: "Дизель", price: "4 200 000" },
            { name: "BMW iX M60", electric: "Електро", price: "4 500 000" },
        ],
    },
    {
        title: "BMW i",
        cars: [
            { name: "BMW i4 Gran Coupé", electric: "Електро", price: "2 500 000" },
            { name: "BMW i4", electric: "Електро", price: "2 200 000" },
            { name: "BMW i7", electric: "Електро", price: "4 000 000" },
            { name: "BMW i7 M70 xDrive", electric: "Електро", price: "4 500 000" },
            { name: "BMW i5", electric: "Електро", price: "2 800 000" },
            { name: "BMW i5 M60 xDrive", electric: "Електро", price: "3 200 000" },
            { name: "BMW i5 M60 xDrive Touring", electric: "Електро", price: "3 400 000" },
            { name: "BMW iX", electric: "Електро", price: "3 500 000" },
            { name: "BMW iX M60", electric: "Електро", price: "4 000 000" },
            { name: "BMW iX1", electric: "Електро", price: "1 800 000" },
            { name: "BMW iX2", electric: "Електро", price: "2 400 000" },
            { name: "BMW iX3", electric: "Електро", price: "2 500 000" },
        ],
    },
];




function renderCatalog(filter = 'all') {
    const catalog = document.querySelector(".catalog");
    const numFind = document.querySelector(".numFind"); 
    let foundCount = 0; 
    let carIndex = 1;


    const existingSeries = catalog.querySelectorAll(".series");
    existingSeries.forEach(series => catalog.removeChild(series));

    carSeries.forEach((series) => {
        let filteredCars = series.cars;

        if (filter === 'bmw-m') {
            if (series.title !== 'M') return;
        } else if (filter === 'bmw-i') {
            if (series.title !== 'BMW i') return;
        } else {
            filteredCars = series.cars.filter((car) => {
                if (filter === 'all') return true;
                if (filter === 'plugin') return car.plugin;
                if (filter === 'electric') return car.electric;
                return false;
            });
        }

        if (filteredCars.length === 0) return; 

        const seriesContainer = document.createElement("div");
        seriesContainer.className = "series";
        seriesContainer.id = `series-${series.title.replace(/\s+/g, '-').toLowerCase()}`;

        const title = document.createElement("h2");
        title.className = "titletext1";
        title.textContent = series.title; 
        seriesContainer.appendChild(title);

        const row = document.createElement("div");
        row.className = "row";

        filteredCars.forEach((car) => {
            const model = document.createElement("div");
            model.className = "model";

            const imageName = encodeURIComponent(car.name);
            model.innerHTML = `
                <img src="image/${imageName}.png" alt="${car.name}" onerror="this.onerror=null; this.src='image/default.png'">
                <div class="nametext">${carIndex}. ${car.name}</div>
                <div class="desctext" data-price="${car.price}">
                    ${car.gas ? '🚗 ' + car.gas + ' ' : ''}
                    ${car.diesel ? '⛽ ' + car.diesel + ' ' : ''}
                    ${car.plugin ? '🔌 ' + car.plugin + ' ' : ''}
                    ${car.electric ? '⚡ ' + car.electric + ' ' : ''}
                </div>
            `;

            row.appendChild(model);
            foundCount++;
            carIndex++;
        });

        seriesContainer.appendChild(row);
        catalog.appendChild(seriesContainer);
    });

    numFind.textContent = `Найдено автомобілів: ${foundCount}`;
}

function setupFilters() {
    const tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => {
        tag.addEventListener("click", (e) => {
            e.preventDefault();
            tags.forEach(t => t.classList.remove("active"));
            tag.classList.add("active");

            const filter = tag.getAttribute("data-filter");
            renderCatalog(filter);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
    setupFilters(); 
    const allTag = document.querySelector('.tag[data-filter="all"]');
    if (allTag) {
        allTag.classList.add("active");
    }

    const models = document.querySelectorAll('.model');
    models.forEach((model) => {
        model.addEventListener('click', () => {
            const selectedCar = {
                name: model.querySelector('.nametext').textContent,
                image: model.querySelector('img').src,
                price: model.querySelector('.desctext').dataset.price 
            };
    
            console.log('Збережена машина:', selectedCar);
            localStorage.setItem('selectedCar', JSON.stringify(selectedCar));
            window.location.href = 'index3.html';
        });
    });
});