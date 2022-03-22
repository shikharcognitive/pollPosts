import React, { FC, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import {Container, Box } from "@mui/material";
import { useSelector } from 'react-redux';
import { RootState } from '../store/root-reducer';

interface StoryDetailsProps {
    title?: 'sp';
}

const StoryDetails: FC<StoryDetailsProps> = (props:any) => {

    const location:any = useLocation();
    const { posts } = useSelector( (state:RootState) => state.posts)
    const [ storyDetails , setStoryDetails]:any = useState('');
  
  
    useEffect( () => {
      if(location && location.state && location.state.storyId !== '') {
        let storyData:any = posts.filter( (post:any) => post.objectID === location.state.storyId);
        storyData = JSON.stringify(storyData)
        setStoryDetails(storyData);
      }
    }, [location]);

    return (
        <Container>
            <Box data-testid='detailsBox'>{storyDetails}</Box>
        </Container>
    )
}

export default StoryDetails;