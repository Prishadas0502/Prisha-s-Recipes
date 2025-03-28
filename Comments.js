function addComment() {
    let commentText = document.getElementById("comment").value;
    if (commentText.trim() !== "") {
        let commentList = document.getElementById("commentList");
        let listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        listItem.innerHTML = `<span>${commentText}</span> <button class='btn btn-danger btn-sm' onclick='deleteComment(this)'>Delete</button>`;
        commentList.prepend(listItem); // Add new comment to the top
        document.getElementById("comment").value = "";
    }
}

function deleteComment(button) {
    button.parentElement.remove();
}