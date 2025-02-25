window.onload = function() {
    var postList = document.querySelector("#posts .post-list");
    for (var i = postList.children.length; i >= 0; i--) {
        postList.appendChild(postList.children[Math.random() * i | 0]);
    }
}