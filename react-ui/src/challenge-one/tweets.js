import React from 'react';
import ErrorMessage from './error-message';

const Tweets = (props) => {
    return (
        <div className="tweets">
            <h2>Latest Tweets from Text-Em-All</h2>
            {props.loading && <div className="container">Loading tweets...</div>}
            {props.error && <ErrorMessage>Something went wrong with the system.</ErrorMessage>}
            <ul>
                {props.tweets?.map((tweet, index) => {
                    return <li key={`tweet-${index}`}>{tweet.text}</li>
                })}
            </ul>
        </div>
    );
}

export default Tweets;