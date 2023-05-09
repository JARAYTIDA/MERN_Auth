import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from "."
import { FetchFromAPI } from "../utils/FetchFromAPI"

const ChannelDetail = () => {
    const {id} = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([])

    useEffect(() => {
        FetchFromAPI(`channels?parts=snippet&id=${id}`)
        .then((data) => setChannelDetail(data?.items[0]))

        FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data?.items))
    }, [id])

    console.log(videos);

    return (
        <Box>
            <Box>
                <div
                    style={{background:'linear-gradient(90deg, rgba(0, 238, 247, 1) 0%, rgba(206, 3, 0, 1) 100%, rgba(0, 212, 255, 1) 100%)', zIndex:10, height:'200px'}}
                />

                <ChannelCard channelDetail={channelDetail} marginTop='-70px'/>
            </Box>

            <Box display='flex' p='2'>
                <Box sx={{mr:{sm:'100px'}, display:'flex', justifyContent:'center', alignItems:'center'}}/>
                <Videos videos={videos}></Videos>
            </Box>
        </Box>
    )
}

export default ChannelDetail