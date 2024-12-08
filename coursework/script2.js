const carSeries = [
    {
        title: "1",
        cars: [
            { name: "BMW 1 серії", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M135i xDrive", gas: "Бензин" },
        ],
    },
    {
        title: "2",
        cars: [
            { name: "BMW 2 серії Coupe", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M2 Coupe", gas: "Бензин" },
            { name: "BMW 2 серії Active Tourer", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
        ],
    },
    {
        title: "3",
        cars: [
            { name: "BMW 3 серії Седан", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW 3 серії Touring", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW M3 Седан", gas: "Бензин" },
            { name: "BMW M3 Competition Touring", gas: "Бензин", diesel: "Дизель" },
        ],
    },
    {
        title: "4",
        cars: [
            { name: "BMW 4 серії Coupe", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M4 серії Купе", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M440i xDrive Гран Купе", gas: "Бензин" },
            { name: "BMW 4 серії Гран Купе", gas: "Бензин", diesel: "Дизель", electric: "Електро" },
            { name: "BMW 4 серії Convertible", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M4 серії Кабріолет", gas: "Бензин", diesel: "Дизель" },
        ],
    },
    {
        title: "5",
        cars: [
            { name: "BMW 5 серії Седан", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW 5 серії Cедан плагін-гібрид", plugin: "Плагін-гібрид" },
            { name: "BMW i5", electric: "Електро" },
            { name: "BMW i5 M60 xDrive", electric: "Електро" },
        ],
    },
    {
        title: "7",
        cars: [
            { name: "BMW 7 серії Седан", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW i7", electric: "Електро" },
            { name: "BMW i7 M70 xDrive", electric: "Електро" },
            { name: "BMW M760e xDrive", plugin: "Плагін-гібрид" },
        ],
    },
    {
        title: "8",
        cars: [
            { name: "BMW 8 серії Купе", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M8 Купе", gas: "Бензин" },
            { name: "BMW 8 серії Кабріолет", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M8 Кабріолет", gas: "Бензин" },
            { name: "BMW 8 серії Gran Coupé", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M8 Gran Coupé", gas: "Бензин" },
        ],
    },
    {
        title: "X",
        cars: [
            { name: "BMW X1", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW iX1", electric: "Електро" },
            { name: "BMW X2", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X2 M35i xDrive", gas: "Бензин" },
            { name: "BMW iX2", electric: "Електро" },
            { name: "BMW X3", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X3 30e xDrive", plugin: "Плагін-гібрид" },
            { name: "BMW X3 M50 xDrive", gas: "Бензин" },
            { name: "BMW iX3", electric: "Електро" },
            { name: "BMW iX", electric: "Електро" },
            { name: "BMW iX M60", electric: "Електро" },
            { name: "BMW X4", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X4 M", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X5 (2023)", gas: "Бензин", diesel: "Дизель", plugin: "Плагін-гібрид" },
            { name: "BMW X5 M (2023)", gas: "Бензин" },
            { name: "BMW X6 (2023)", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X6 M (2023)", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X7", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X7 M60i xDrive", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW XM", plugin: "Плагін-гібрид" },
        ],
    },
    {
        title: "Z4",
        cars: [
            { name: "BMW Z4 Roadster", gas: "Бензин" },
        ],
    },
    {
        title: "M",
        cars: [
            { name: "BMW M2 Купе", gas: "Бензин" },
            { name: "BMW M3 Седан", gas: "Бензин" },
            { name: "BMW M3 Competition Touring", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M4 серії Купе", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M440i xDrive Гран Купе", gas: "Бензин" },
            { name: "BMW M4 серії Кабріолет", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW M8 Купе", gas: "Бензин" },
            { name: "BMW M8 Кабріолет", gas: "Бензин" },
            { name: "BMW M8 Gran Coupé", gas: "Бензин" },
            { name: "BMW X2 M35i xDrive", gas: "Бензин" },
            { name: "BMW X3 M50 xDrive", gas: "Бензин" },
            { name: "BMW X4 M", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X5 M (2023)", gas: "Бензин" },
            { name: "BMW X6 M (2023)", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW X7 M60i xDrive", gas: "Бензин", diesel: "Дизель" },
            { name: "BMW iX M60", electric: "Електро" },
        ],
    },
    {
        title: "BMW i",
        cars: [
            { name: "BMW i4 Gran Coupé", electric: "Електро" },
            { name: "BMW i4", electric: "Електро" },
            { name: "BMW i7", electric: "Електро" },
            { name: "BMW i7 M70 xDrive", electric: "Електро" },
            { name: "BMW i5", electric: "Електро" },
            { name: "BMW i5 M60 xDrive", electric: "Електро" },
            { name: "BMW i5 M60 xDrive Touring", electric: "Електро" },
            { name: "BMW iX", electric: "Електро" },
            { name: "BMW iX M60", electric: "Електро" },
            { name: "BMW iX1", electric: "Електро" },
            { name: "BMW iX2", electric: "Електро" },
            { name: "BMW iX3", electric: "Електро" },
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
                <div class="desctext">
                    ${car.gas ? car.gas : ""}
                    ${car.diesel ? "• " + car.diesel : ""}
                    ${car.plugin ? "• " + car.plugin : ""}
                    ${car.electric ? "• " + car.electric : ""}
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
                image: model.querySelector('img').src 
            };

            console.log('Сохраненная машина:', selectedCar);

            localStorage.setItem('selectedCar', JSON.stringify(selectedCar)); 
            window.location.href = 'index3.html';
        });
    });
});