import React, { useEffect, useState } from 'react'

export default function Joke() {

    const [joke, setJoke] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [messageError, setMessageError] = useState(null);

    useEffect(() => {
      fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(respone => respone.json())
      .then(result => {
        //   console.log(results.data.children)

        setIsLoading(false); 
        setJoke(result.setup + ' ' + result.punchline);

      })
      .catch(error => {
        setIsLoading(false);
        setMessageError('There was an error');
      })
    }, [])

    return (
        
        <div className="container">
            {isLoading && <div>Loading...</div>}
            {joke && <div>{joke}</div>}    
            {messageError && <div>{messageError}</div>}
        </div>
    )
}
