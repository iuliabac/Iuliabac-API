async function loadArticles() {
  try {
    const res = await fetch('https://example-api.com/articles');
    const data = await res.json();
    console.log(data); // Do something with the data
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
}

async function loadMultipleData() {
  try {
    const [articlesRes, authorsRes] = await Promise.all([
      fetch('https://example-api.com/articles'),
      fetch('https://example-api.com/authors')
    ]);

    const [articles, authors] = await Promise.all([
      articlesRes.json(),
      authorsRes.json()
    ]);

    console.log('Articles:', articles);
    console.log('Authors:', authors);
  } catch (error) {
    console.error('Error loading multiple resources:', error);
  }
}

async function loadFoxAndPosts() {
  try {
    const [foxRes, postRes] = await Promise.all([
      fetch('https://randomfox.ca/floof/'),
      fetch('https://jsonplaceholder.typicode.com/posts/1')
    ]);

    const [fox, post] = await Promise.all([
      foxRes.json(),
      postRes.json()
    ]);

    document.body.innerHTML += `
      <img src="${fox.image}" alt="Fox" class="w-64">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
  } catch (err) {
    console.error('Something went wrong:', err);
  }
}

loadFoxAndPosts();
