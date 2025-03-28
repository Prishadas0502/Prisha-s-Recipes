let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click',function(){
    collapse.forEach(col=>col.classList.toggle("collapse-toggle"))
})


// Search
document.getElementById("searchIcon").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    let searchBar = document.getElementById("searchBar");
    
    // Toggle the search bar visibility
    if (searchBar.classList.contains("hidden")) {
        searchBar.classList.remove("hidden");
        searchBar.focus(); // Automatically focus on the input
    } else {
        searchBar.classList.add("hidden");
    }
});

function searchPosts() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let posts = document.querySelectorAll('.grid-item');

    posts.forEach(post => {
        let title = post.querySelector('.text-title').innerText.toLowerCase();
        post.style.display = title.includes(input) ? 'block' : 'none';
    });
}

