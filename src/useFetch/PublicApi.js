import {useEffect,useState} from 'react'
const PublicApi = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .then(console.log(posts))
        .catch((err) => {
            

        })
    },[])
    return ( 
        <div>
            {posts.map(post => {
                return <li>{post.title}</li>
            })}
        </div>
     );
}
 
export default PublicApi;
