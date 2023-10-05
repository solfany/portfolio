import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import "../css/CTableTitle.css";

function BoardPages() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  // 임시로 게시글 데이터. 실제로는 API나 데이터베이스에서 가져올 것입니다.
  const samplePosts = [
    {
      id: "1",
      title: "첫 번째 게시글",
      content: "첫 번째 게시글의 내용입니다.",
      tags: ["안녕", "primary", "error"],
      date: "2023-09-17",
      author: "김솔비",
    },
    {
      id: "2",
      title: "두 번째 게시글",
      content: "두 번째 게시글의 내용입니다.",
      tags: ["안녕", "primary", "error"],
      date: "2023-09-17",
      author: "김솔비",
    },
    {
      id: "3",
      title: "세 번째 게시글",
      content: "두 번째 게시글의 내용입니다.",
      tags: ["안녕", "primary", "error"],
      date: "2023-09-17",
      author: "김솔비",
    },
    {
      id: "4",
      title: "네 번째 게시글",
      content: "두 번째 게시글의 내용입니다.",
      tags: ["안녕", "primary", "error"],
      date: "2023-09-17",
      author: "김솔비",
    },
  ];

  useEffect(() => {
    const currentPost = samplePosts.find((p) => parseInt(p.id) === parseInt(id));
    setPost(currentPost);
  }, [id]);

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <MKBox component="section" py={10}>
      <Container>
        <Typography variant="h3" gutterBottom>
          {post.title}
        </Typography>
        <Box display="flex" alignItems="center" marginBottom={3}>
          <Avatar>{post.author[0]}</Avatar>
          <Box marginLeft={2}>
            <Typography variant="subtitle1">{post.author}</Typography>
            <Typography variant="caption" color="textSecondary">
              {post.date}
            </Typography>
          </Box>
        </Box>
        <Divider style={{ marginBottom: "20px" }} />
        <Card variant="outlined">
          <CardContent>
            <Typography variant="body1" paragraph>
              {post.content}
            </Typography>
          </CardContent>
          <Box p={2} display="flex" flexDirection="row" gap={1}>
            {post.tags.map((tag, index) => (
              <Chip key={index} label={tag} variant="outlined" />
            ))}
          </Box>
        </Card>
      </Container>
    </MKBox>
  );
}

export default BoardPages;
