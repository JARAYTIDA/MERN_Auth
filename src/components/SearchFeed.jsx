import {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import { FetchFromAPI } from '../utils/FetchFromAPI';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams();

    {/* also passing some dependencies in use effect in array [] */}
    {/* [] meaning that the code inside useEffect function onlu run when we refresh the page */}
    {/* if we pass selectedCategory in [] then it will run when we select a category */}
    useEffect ( () => {
        FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}} >
            Search results for :  <span style={{color:'#f31503'}}> {searchTerm} </span>
        </Typography>
        <Videos videos = {videos}/>
    </Box>
    )
}

export default SearchFeed