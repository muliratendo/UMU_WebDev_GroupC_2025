document.addEventListener("DOMContentLoaded", () => {


    const carouselElement = document.querySelector('#carouselExampleCaptions');
    if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement);

        carouselElement.addEventListener('mouseenter', () => {
            carousel.pause();
        });

        carouselElement.addEventListener('mouseleave', () => {
            carousel.cycle();
        });
    }



    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });



    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.transition = "transform .3s ease, box-shadow .3s ease";

        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.03)";
            card.style.boxShadow = "0 8px 18px rgba(0,0,0,0.3)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });



    cards.forEach(card => {
        card.addEventListener("click", () => {
            const paragraph = card.querySelector(".card-text");
            if (paragraph) {
                paragraph.classList.toggle("expanded");

                paragraph.style.transition = "all .3s ease";
            }
        });
    });



    const tableRows = document.querySelectorAll(".timetable tr");

    tableRows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#ffe066";
        });

        row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "";
        });
    });



    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.style.display =
                window.scrollY > 300 ? "block" : "none";
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

});
