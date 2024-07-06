//'Javascript fetch method' data fetch

import { useState, useEffect } from 'react';

const Fetch_method = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setPosts(data)
        })
        .catch(err => console.error('There was an error', err))
    }, [])

    // const posts = [
    //         {
    //           "userId": 1,
    //           "id": 1,
    //           "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //           "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //         },
    //         {
    //           "userId": 1,
    //           "id": 2,
    //           "title": "qui est esse",
    //           "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    //         },
    //         {
    //           "userId": 1,
    //           "id": 3,
    //           "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //           "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    //         }
    // ]


    return(

        <div className='flex flex-col items-center'>

            <h3 className='font-bold text-blue-700 m-4'> Example: User Posts </h3>

            {posts.map(post => (
                <div key={post.id} className='border bg-teal-200 rounded-lg m-2 p-2 w-1/2'>
                    <h4 className='font-bold mb-1'>{post.title}</h4> 
                    <p>{post.body}</p>
                </div>
            ))}


        </div>
    )

}

export default Fetch_method;