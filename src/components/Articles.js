import React from "react";
import classes from "./Articles.module.css";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Avatar,
} from "@mui/material";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";

function Articles() {
  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Articles
      </Typography>
    </Container>
  );
}

export default Articles;
