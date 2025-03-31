let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click',function(){
    collapse.forEach(col=>col.classList.toggle("collapse-toggle"))
})


document.addEventListener("DOMContentLoaded", function () {
    let searchBar = document.getElementById("searchBar");
    let searchIcon = document.getElementById("searchIcon");
    let grid = document.querySelector(".grid");

    // Initialize Masonry
    let msnry = new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: 20,
        percentPosition: true
    });

    // Ensure Masonry updates after all images load
    imagesLoaded(grid, function () {
        msnry.layout();
    });

    // Toggle search bar visibility
    searchIcon.addEventListener("click", function (event) {
        event.preventDefault();
        searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
        if (searchBar.style.display === "block") {
            searchBar.focus();
        }
    });

    // Search functionality
    searchBar.addEventListener("input", function () {
        let searchText = this.value.toLowerCase();
        let items = document.querySelectorAll(".grid-item");

        items.forEach(item => {
            let title = item.querySelector(".text-title").innerText.toLowerCase();
            if (title.includes(searchText)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        // Recalculate Masonry layout after search
        setTimeout(() => {
            msnry.reloadItems();
            msnry.layout();
        }, 500);
    });

    // Category filter
    document.querySelectorAll('input[name="category"]').forEach(radio => {
        radio.addEventListener("change", function () {
            let selectedCategory = this.value;
            let items = document.querySelectorAll(".grid-item");

            items.forEach(item => {
                if (selectedCategory === "all" || item.classList.contains(selectedCategory)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // Recalculate Masonry layout after filtering
            setTimeout(() => {
                msnry.reloadItems();
                msnry.layout();
            }, 300);
        });
    });
});
