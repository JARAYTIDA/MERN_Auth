import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoChannelTitle, demoChannelUrl, demoVideoUrl, demoProfilePicture, demoThumbnailUrl, demoVideoTitle } from '../utils/constants'

const VideoCard = ({video : { id : {videoId}, snippet}}) => { 
    // console.log(snippet?.thumbnails)
    return (
        <Card sx = {{width: {md:'350px', xs:'450px',}, boxShadow:'none', borderRadius:'20px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image = {snippet?.thumbnails?.high?.url}
                    alt = {snippet?.title}
                    sx = {{width:{md:'350px', xs:'450px'}, height: 195}}
                />
            </Link>

            <CardContent sx = {{backgroundColor:'#1e1e1e', height:'106px'}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography varient = 'subtitle1' fontWeight='bold' color = '#fff'>
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to = {snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography varient = 'subtitle2' fontWeight='bold' color='#fff'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard