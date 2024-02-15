import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
 
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text" gutterBottom>
          Title of the post
        </Typography>
        <Typography variant="body2">
          Here comes the body of the post
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Tags
        </Typography>
      </CardContent>
      <Typography component="legend">Rating</Typography>
    </React.Fragment>
  );
  
  export default function PostDetailsPage() {
    const [rating, setRating] = useState(3)
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}
        <h3>Current rating: {rating}</h3>
        <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
        </Card>
      </Box>
    );
  }