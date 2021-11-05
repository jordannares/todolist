import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [messageError, setMessageError] = useState(null);

    useEffect(() => {
      fetch(url)
      .then(respone => respone.json())
      .then(results => {

        setIsLoading(false);
        setData(results);
        console.log(results);

      })
      .catch(error => {
        setIsLoading(false);
        setMessageError('There was an error');
      });
    }, [url]);

    return { data, isLoading, messageError };
    
}

export default useFetch