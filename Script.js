const postBtn = document.getElementById("postBtn");
const postText = document.getElementById("postText");
const postImage = document.getElementById("postImage");
const feed = document.getElementById("feed");

postBtn.addEventListener("click", () => {
  const text = postText.value.trim();
  const file = postImage.files[0];

  if (!text && !file) {
    alert("Write something or upload an image!");
    return;
  }

  const post = document.createElement("div");
  post.classList.add("post");

  // Add text
  if (text) {
    const p = document.createElement("p");
    p.textContent = text;
    post.appendChild(p);
  }

  // Add image (proper fix)
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      post.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  feed.prepend(post);

  // Reset inputs
  postText.value = "";
  postImage.value = "";
});