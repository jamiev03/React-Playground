import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import VideoItemStyle from '../modules/VideoItemStyle.module.css';

const VideoItem = ({ video }) => {
    return (
        <Grid item xs={12}>
            <Paper className={VideoItemStyle.paper}>
                <img className={VideoItemStyle.img} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography className={VideoItemStyle.subtitle}variant="subtitle1">{video.snippet.title}</Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;