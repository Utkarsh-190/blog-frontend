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

const blogData = [
  {
    id: 1,
    imageUrl:
      "https://media.istockphoto.com/photos/web-app-developer-make-code-picture-id682308482?k=20&m=682308482&s=612x612&w=0&h=4z--rkHrqP2dQR-vFis7NScqMBJbbDJTQMR5pEh5ixA=",
    title: "React router",
  },
  {
    id: 2,
    imageUrl:
      "https://media.istockphoto.com/photos/hacker-hacking-password-at-night-picture-id1173804879?k=20&m=1173804879&s=612x612&w=0&h=0Q7Eo9zzJ8uS7MRS9_I2oaqKoHrZXKvH5jOggq4QE5o=",
    title: "Redux",
  },
  {
    id: 3,
    imageUrl:
      "https://media.istockphoto.com/photos/computers-installing-the-new-program-picture-id1187065271?k=20&m=1187065271&s=612x612&w=0&h=kgBVhgfBOynFWh8pWYK8cJgaptEQzdzLx5-PZiekjzE=",
    title: "Hooks",
  },
  {
    id: 4,
    imageUrl:
      "https://media.istockphoto.com/photos/data-code-digital-technology-picture-id469052780?k=20&m=469052780&s=612x612&w=0&h=jKgGLyF4rgCgzDWmpx8cCBRMgZ09McxlFDYD5NWgvwI=",
    title: "GraphQl",
  },
];

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
