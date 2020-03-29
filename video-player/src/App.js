import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
//have created a separate import file index.js to hold the exports:
// export { default as SearchBar } from './SearchBar';
// export { default as VideoDetails } from './VideoDetails';
import { SearchBar, VideoDetails } from './components';

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {  
            params: {
            part: 'snippet',
            maxResults: 5,
            key: 'api-key',
            q: searchTerm,
    }
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    console.log(response.data.items);
}

    render() {
        const { selectedVideo } = this.state;
        return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            {/* VIDEO LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;