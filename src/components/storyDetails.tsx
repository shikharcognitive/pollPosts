import React, { FC, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Card, CardContent,Typography, Grid, Container, Box, Button, CardMedia, CardActions } from "@mui/material";
import {useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { RootState } from '../store/root-reducer';

interface StoryDetailsProps {
    title?: 'sp';
}

const StoryDetails: FC<StoryDetailsProps> = (props:any) => {

    const location:any = useLocation();
    const { posts } = useSelector( (state:RootState) => state.posts)
    const [ storyDetails , setStoryDetails]:any = useState('');
    const navigate = useNavigate()
  
  
    useEffect( () => {
      if(location && location.state.storyId !== '') {
        let storyData:any = posts.filter( (post:any) => post.objectID === location.state.storyId);
        storyData = JSON.stringify(storyData)
        setStoryDetails(storyData);
      }
    }, [location]);

    return (
        <Container>
            <Box>{ storyDetails}</Box>
        </Container>
    )
}

export default StoryDetails;