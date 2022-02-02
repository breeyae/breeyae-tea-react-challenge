import React from 'react';
import axios from 'axios';
import ErrorMessage from './error-message';

//This component will be an example of a class component using lifecycle methods. 
//This way of writing React has gone down in popularity with the introduction of hooks in 2019
export default class Followers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            followers: null,
            error: ''
        }
    }

    /* 
        Note: This service call will be made every time this component mounts, which is not ideal if the data is not likely to change.  
        Depending on the use case, a service call can be made each time the component mounts or once and stored. You can choose to make one call at the parent
        level and pass the data as props, or store the data in a global state management tool like Redux.
    */
    componentDidMount() {
        axios.get('/followers')
        .then((response) => {
            this.setState({followers: response.data.data});
        }).catch((error) => {
            if (error.response.status === 429) {
                this.setState({error: 'Twitter limits the followers API to 15 requests in a 15 minute period. Please wait 15 minutes, and then try again.'})
            } else {
                this.setState({error: 'Something went wrong with the system.'})
            }
        });
    }

    render() {
        return (
            <div className="followers">
                {!this.state.followers && !this.state.error && <div className="container">Loading followers...</div>}
                {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
                <ul>
                    {this.state.followers?.map((follower) => {
                        return <li><img src={follower.profile_image_url} alt={`${follower.name}'s profile picture`} />{follower.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}