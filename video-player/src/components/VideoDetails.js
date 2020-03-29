import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import VideoDetailsStyle from '../modules/VideoDetails.module.css';

const VideoDetails = ({ video }) => {
    if(!video) return <div>Please wait a moment while we fetch your video...</div>

    console.log(video.id.videoId);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} className={VideoDetailsStyle.paper}>
                <iframe frameBorder='0' width="100%" height='100%' title='video Player' src={videoSrc}></iframe>
            </Paper>
            <Paper elevation={6} className={VideoDetailsStyle.paper2}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetails;