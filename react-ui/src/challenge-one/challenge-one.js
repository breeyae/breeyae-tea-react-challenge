import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Tabs, Tab} from '@mui/material';
import Tweets from './tweets';
import Followers from './followers';
import './challenge-one.css';

const ChallengeOne = () => {
    const [tweets, setTweets] = useState();
    const [value, setValue] = React.useState('1');
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    useEffect(() => {
        axios.get('/tweets')
        .then((response) => {
            setTweets(response.data);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
            setError(true);
        });
    }, []);

    return (
        <div className="container">
            <Tabs onChange={(event, newValue) => setValue(newValue)} value={value}>
                <Tab label="Tweets" value="1" />
                <Tab label="Followers" value="2" />
            </Tabs>
            {value === '1' && <Tweets tweets={tweets?.data} loading={loading} error={error} />}
            {value === '2' && <Followers />}
        </div>
    );
};

export default ChallengeOne;