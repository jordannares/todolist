import React from 'react'
import { useQuery } from 'react-query'

export default function CustomFetch() {

    // const { data: posts, isLoading, messageError } = useFetch('https://www.reddit.com/r/aww/.json');

     const { data: posts, isLoading, isError, error, isSuccess  } = useQuery('posts', fetchPosts, {
         retry:false
    });

     function fetchPosts() {
         return fetch('https://www.reddit.com/r/aww/.json').then(response => response.json());
     }

    return (
        
        <div className="container">

            {isLoading && <div>Loading...</div>}

            {isSuccess && (
                <ul>
                    {posts.data.children.map(post => (
                        <li key={post.data.id}>
                            <a href={`https://www.reddit.com${post.data.permalink}`}>{post.data.title}</a>
                        </li>
                    ))}
                    
                </ul>
            )}
            {isError && <div>{error.message}</div>}
        </div>
    )
}
