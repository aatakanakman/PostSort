const posts = [
    { title: "Post 1", detail: "Post 1" },
    { title: "Post 2", detail: "Post 2" },
    { title: "Post 3", detail: "Post 3" },
    { title: "Post 4", detail: "Post 4" },
  ];
  

  
  const addPosts = (newPost) => {
    const promise = new Promise((resolve, reject) => {
      posts.push(newPost);
      resolve(posts);
    }).then((data)=>{
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
    return promise;
  };

  const listPosts = () => {
    posts.map((posts) => {
      console.log(posts.title, posts.detail);
    });
  };
  
  async function showPosts() {
    try {
      await addPosts({ title: "Post 5", detail: "Post 5" });
      listPosts();
    } catch (error) {
      console.log(error);
    }
  }
  
  showPosts();