import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";

function BoardPages() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  // 임시로 게시글 데이터. 실제로는 API나 데이터베이스에서 가져올 것입니다.
  const samplePosts = [
    {
      id: "1",
      title: "첫 번째 게시글",
      content: "첫 번째 게시글의 내용입니다.",
    },
    {
      id: "2",
      title: "두 번째 게시글",
      content: "두 번째 게시글의 내용입니다.",
    },
    // ... 기타 게시글
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
