let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function () {
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
});

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
        let items = Array.from(document.querySelectorAll(".grid-item"));

        let matchedItems = [];
        let unmatchedItems = [];

        items.forEach(item => {
            let title = item.querySelector(".text-title").innerText.toLowerCase();
            if (title.includes(searchText)) {
                matchedItems.push(item);
            } else {
                unmatchedItems.push(item);
            }
        });

        // Move matched items to the top
        matchedItems.forEach(item => grid.prepend(item));

        // Hide unmatched items
        unmatchedItems.forEach(item => {
            item.style.visibility = "hidden";
            item.style.opacity = "0";
        });

        // Show matched items
        matchedItems.forEach(item => {
            item.style.visibility = "visible";
            item.style.opacity = "1";
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
            let items = Array.from(document.querySelectorAll(".grid-item"));

            let matchedItems = [];
            let unmatchedItems = [];

            items.forEach(item => {
                if (selectedCategory === "all" || item.classList.contains(selectedCategory)) {
                    matchedItems.push(item);
                } else {
                    unmatchedItems.push(item);
                }
            });

            // Move matched items to the top
            matchedItems.forEach(item => grid.prepend(item));

            // Hide unmatched items
            unmatchedItems.forEach(item => {
                item.style.visibility = "hidden";
                item.style.opacity = "0";
            });

            // Show matched items
            matchedItems.forEach(item => {
                item.style.visibility = "visible";
                item.style.opacity = "1";
            });

            // Recalculate Masonry layout after filtering
            setTimeout(() => {
                msnry.reloadItems();
                msnry.layout();
            }, 300);
        });
    });
});
