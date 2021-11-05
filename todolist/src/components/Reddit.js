import React, { useEffect, useState } from 'react'

export default function Reddit() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [messageError, setMessageError] = useState(null);

    useEffect(() => {
      fetch('https://www.reddit.com/r/aww/.json')
      .then(respone => respone.json())
      .then(results => {
        //   console.log(results.data.children)

        setIsLoading(false);
        setPosts(results.data.children);

      })
      .catch(error => {
        setIsLoading(false);
        setMessageError('There was an error');
      })
    }, [])

    return (
        
        <div className="container">
            {isLoading && <div>Loading...</div>}
            
            <ul>
                {posts.map(post => (
                    <li key={post.data.id}>
                        
                        <a href={`https://www.reddit.com${post.data.permalink}`}>{post.data.title}</a>
                    </li>
                ))}
                
            </ul>
            {messageError && <div>{messageError}</div>}
        </div>
    )
}
