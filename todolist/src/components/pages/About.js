import React, { useState } from 'react'
import Joke from '../Joke';
import Reddit from '../Reddit';

export default function About() {

    const [redditVisible, setRedditVisible] = useState(false);
    const [jokeVisible, setJokeVisible] = useState(false);

    return (
        <div>
            <h2>This is the about page</h2>

            <div className="buttons">
                <button 
                    onClick={() =>  setRedditVisible(prevRedditVisible => !prevRedditVisible)}
                >
                    Toggle Reddit
                </button>
                <button 
                    onClick={() =>  setJokeVisible(prevJokeVisible => !prevJokeVisible)}
                >
                    Toggle Joke
                </button>
            </div>
            {redditVisible && <Reddit />}
            {jokeVisible && <Joke />}
        </div>
    )

}
