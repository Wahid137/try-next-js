
const loadBlogsData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache"
    })
    const blogs = await res.json()
    return
};

export default loadBlogsData;