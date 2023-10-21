const loadSingleBlogData = async (id) => {
    console.log(id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-cache"
    })
    return res.json()
};

export default loadSingleBlogData;