document.addEventListener("DOMContentLoaded", function(){
    const homepage__movieCard = document.querySelectorAll(".movie-card__age");
    homepage__movieCard.forEach(el => {
        if (el.innerText === "17+") {
            el.classList.add("seventeen")
        };

        if (el.innerText === "18+") {
            el.classList.add("eightteen")
        };
    })
});