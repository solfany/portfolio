import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
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
    // postId를 숫자로 변환해서 비교
    const currentPost = samplePosts.find((p) => parseInt(p.id) === parseInt(id));
    setPost(currentPost);
  }, [id]);
  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <MKBox component="section" py={10}>
      <Container>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </Container>
    </MKBox>
  );
}
export default BoardPages;
