import React from "react";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";

function BoardPages() {
  return (
    <MKBox component="section" py={10}>
      <Container>
        <h1>게시글 제목</h1>
        <p>
          게시글 내용이 들어갑니다. 해당 게시글에 대한 상세 내용, 이미지, 댓글 등을 여기에 표시할 수
          있습니다.
        </p>
      </Container>
    </MKBox>
  );
}
export default BoardPages;
