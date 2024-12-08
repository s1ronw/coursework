document.addEventListener("DOMContentLoaded", function() {
    const breadcrumb = document.querySelector('.breadcrumb');
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
    const activeLine = document.querySelector('.active-line');

    function updateActiveLine(activeItem) {
        const left = activeItem.offsetLeft;
        const width = activeItem.offsetWidth;

        activeLine.style.width = `${width}px`;
        activeLine.style.left = `${left}px`;
    }

    const initialActive = document.querySelector('.breadcrumb-item.active a');
    if (initialActive) {
        updateActiveLine(initialActive.parentElement);
    }

    breadcrumbItems.forEach(item => {
        item.addEventListener('click', function() {
            breadcrumbItems.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            updateActiveLine(this);
        });
    });

    window.addEventListener('resize', function() {
        const activeItem = document.querySelector('.breadcrumb-item.active');
        if (activeItem) {
            updateActiveLine(activeItem);
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const engineName = document.querySelector(".engine-card h3:nth-of-type(2)");
    const carImage = document.querySelector(".photob img");
    const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));

    if (selectedCar && selectedCar.name && selectedCar.image) {
        console.log('Загруженна машина:', selectedCar);
        engineName.textContent = selectedCar.name;
        carImage.src = selectedCar.image;
        carImage.alt = selectedCar.name;
    } else {
        console.log('Дані машини не найдено.');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const breadcrumb = document.querySelector('.breadcrumb');
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
    const activeLine = document.querySelector('.active-line');

    function updateActiveLine(activeItem) {
        const left = activeItem.offsetLeft;
        const width = activeItem.offsetWidth;

        activeLine.style.width = `${width}px`;
        activeLine.style.left = `${left}px`;
    }

    const initialActive = document.querySelector('.breadcrumb-item.active a');
    if (initialActive) {
        updateActiveLine(initialActive.parentElement);
    }

    breadcrumbItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            breadcrumbItems.forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            updateActiveLine(this);

            const sections = [
                document.querySelector('.engine-section'),
                document.querySelector('.optioncar-section'),
                document.querySelector('.colorcar-section'),
                document.querySelector('.disk-section'),
                document.querySelector('.readybuy-section')
            ];

            if (sections[index]) {
                sections[index].scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('resize', function() {
        const activeItem = document.querySelector('.breadcrumb-item.active');
        if (activeItem) {
            updateActiveLine(activeItem);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const engineName = document.querySelector(".engine-card h3:nth-of-type(2)");
    const carImage = document.querySelector(".photob img");
    const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));

    if (selectedCar && selectedCar.name && selectedCar.image) {
        console.log('Загруженна машина:', selectedCar);
        engineName.textContent = selectedCar.name;
        carImage.src = selectedCar.image;
        carImage.alt = selectedCar.name;
    } else {
        console.log('Дані машини не найдено.');
    }
});