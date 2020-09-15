const renderBlogTemplate = ({
  userId,
  id,
  src = "http://place-puppy.com/200x200",
  title,
  body,
}) => `
<div class="card">
<div class="imgBox">
<img src="${src}" alt="a puppy photo">
</div>
<div class="content">
    <ul>
        <li class="userId">${userId}</li>
        <li class="id">${id}</li>
        <li class="title">${title}</li>
        <li class="body">${body}</li>
    </ul>
</div>
</div>
`;

// 3. Create a template for each blog in jsonplaceholder posts
// GET post data from json placeholder

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(resp => resp.json())
  .then(data => { console.log(data);


    data.forEach((
      userId,
      id,
      title,
      body,
    ) => {

    const blogTemplate = renderBlogTemplate({
        userId,
        id,
        title,
        body,
      });

    // Create a new list item
    const blogNodeElement = document.createElement("li");
    blogNodeElement.innerHTML = blogTemplate;

    //4. Add list item to card-list in the DOM.
    document.getElementsByClassName('blog-list')[0].appendChild(blogNodeElement);
      }
    );
  });