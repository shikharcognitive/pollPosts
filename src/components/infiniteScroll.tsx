import React, { useEffect, useState, ChangeEvent, ReactEventHandler} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/root-reducer';
import { fetchPostRequest } from '../store/posts/actions';
import { Box, CircularProgress, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Button, Pagination } from "@mui/material";
import {useNavigate } from "react-router-dom";


type dataType = {
  author: string;
  created_at: string;
  title: string;
  url: string;
  objectID: string;
}

export default function PageSizeCustomOptions() {

  const [selectedPage, setSelectedPage] = useState<number>(1);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { posts } = useSelector( (state:RootState) => state.posts)

  useEffect( () => {
    dispatch(fetchPostRequest(selectedPage));
    const interval = setInterval(() => {
      dispatch(fetchPostRequest(selectedPage));
    }, 10000);
  
    return () => clearInterval(interval);
    
  }, [selectedPage]);

  const changePageData = (value:any) => {
    setSelectedPage(value);
    dispatch(fetchPostRequest(value));
  }

  const showStoryData = (storyItem:any) => {
    navigate(`/story-details/${storyItem.author}`, {
      state : {
        storyId: storyItem.objectID,
      }
    });
  }

 

  return (
    <Box 
    data-testid='tableBox'
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"20px"
      }}
    >
       {posts.length === 0 ? (
         <>
         <CircularProgress></CircularProgress> Loading
         </>
       ): (
         <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems: "center"
          }}
         >
          <TableContainer sx={{ height: 600, width :'100%'}}>
            <Table stickyHeader>
              <TableHead>
                <TableCell 
                  sx={{
                    backgroundColor: "gold",
                    border: "1px solid green",
                    color: "black"
                  }} align="center"
                >
                  Title
                </TableCell>
                <TableCell 
                  sx={{
                    backgroundColor: "gold",
                    border: "1px solid green",
                    color: "black"
                  }} align="center"
                >
                  Author
                </TableCell>
                <TableCell 
                  sx={{
                    backgroundColor: "gold",
                    border: "1px solid green",
                    color: "black"
                  }} align="center"
                >
                  Created-At
                </TableCell>
                <TableCell 
                  sx={{
                    backgroundColor: "gold",
                    border: "1px solid green",
                    color: "black"
                  }} align="center"
                >
                  URL
                </TableCell>
                <TableCell 
                  sx={{
                    backgroundColor: "gold",
                    border: "1px solid green",
                    color: "black"
                  }} align="center"
                >
                  Raw-Data
                </TableCell>
              </TableHead>
              <TableBody>
                {posts.length && posts.map((items: dataType) => {
                  console.log(items)
                  const {author, created_at, title, url, objectID} = items;
                  return(
                    <TableRow key={objectID}>
                      <TableCell sx={{ maxWidth:250, overflow: "hidden"}}>{title === null ? 'fetching...' : title}</TableCell>
                      <TableCell>{author}</TableCell>
                      <TableCell>{created_at}</TableCell>
                      <TableCell sx={{ maxWidth: 200, overflow: "hidden"}}>{url}</TableCell>
                      <TableCell>
                        <Button variant="contained" onClick={(e:React.MouseEvent<any>) => showStoryData(items)}>Select</Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{padding: "50px"}}>
            <Pagination count={posts.length} 
            onChange={(e: ChangeEvent<any>, value: number): void => changePageData(value)}
            page={selectedPage}></Pagination>
          </Box>
         </Box>
       )}
    </Box>
  )
}