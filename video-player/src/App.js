import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import youtube from './api/youtube';
//have created a separate import file index.js to hold the exports:
// export { default as SearchBar } from './SearchBar';
// export { default as VideoDetails } from './VideoDetails';
import { SearchBar, VideoDetails, VideoList } from './components';

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('llamas')
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {  
            params: {
            part: 'snippet',
            maxResults: 5,
            key: 'API-KEY',
            q: searchTerm,
    }
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    console.log(response.data.items);
}

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Typography variant="h3" style={{textAlign: 'center', paddingBottom: '2rem', paddingTop: '2rem' }}>Youtube Video Search</Typography>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;