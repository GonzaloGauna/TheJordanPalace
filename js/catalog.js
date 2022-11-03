const filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", () => {
    const filtersContainer = document.getElementById("filtersContainer");

    filtersContainer.classList.toggle("filters-close");
    filtersContainer.classList.toggle("filters__container--close");
    filtersContainer.classList.toggle("filters__container--open");
})


