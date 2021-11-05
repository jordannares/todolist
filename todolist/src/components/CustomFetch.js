import React from 'react'
import useFetch from '../hooks/useFetch'

export default function CustomFetch() {

    const { data: posts, isLoading, messageError } = useFetch('https://www.reddit.com/r/aww/.json');

    return (

        // <div>dsadasdsd</div>
        
        <div className="container">
            {isLoading && <div>Loading...</div>}
            {posts && (
                <ul>
                    {posts.data.children.map(post => (
                        <li key={post.data.id}>
                            <a href={`https://www.reddit.com${post.data.permalink}`}>{post.data.title}</a>
                        </li>
                    ))}
                    
                </ul>
            )}
            {messageError && <div>{messageError}</div>}
        </div>
    )
}
