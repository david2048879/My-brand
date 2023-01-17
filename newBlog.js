//get Element

const blogForm = document.getElementById("blogForm");
const titleInput = blogForm["title"];
const textInput = blogForm["newstext"];




const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

const addBlog = (title, text) => {
  blogs.push({
    title,
    text
  });

  localStorage.setItem("blogs", JSON.stringify(blogs));

  return { title, text };
};


blogForm.onsubmit = e => {
  e.preventDefault();

  const newblog = addBlog(
    titleInput.value,
    textInput.value
    
  );

  titleInput.value = "";
  textInput.value = "";
};
