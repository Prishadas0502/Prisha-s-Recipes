document.addEventListener("DOMContentLoaded", function () {
    let postCommentBtn = document.getElementById("postCommentBtn");
    if (postCommentBtn) {
        postCommentBtn.addEventListener("click", addComment);
    }
});

function addComment() {
    let nameInput = document.getElementById("commenterName").value.trim();
    let commentText = document.getElementById("comment").value.trim();
    let commentList = document.getElementById("commentList");

    if (nameInput === "" || commentText === "") {
        alert("Please enter your name and comment before posting.");
        return;
    }

    let listItem = document.createElement("li");
    listItem.className = "comment-item";

    listItem.innerHTML = `
        <div class="comment-header">
            <strong>${nameInput}</strong> <span class="comment-time">${new Date().toLocaleTimeString()}</span>
        </div>
        <p class="comment-text">${commentText}</p>
        <button class="btn-delete" onclick="deleteComment(this)">Delete</button>
    `;

    commentList.prepend(listItem);

    // Clear input fields after posting
    document.getElementById("commenterName").value = "";
    document.getElementById("comment").value = "";
}

function deleteComment(button) {
    button.closest("li").remove();
}
