import React, { useState } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MKInput from "components/MKInput";
// import MKPagination from "components/MKPagination";
import MKTypography from "components/MKTypography";
import Stack from "@mui/material/Stack";
import MKBadge from "components/MKBadge";
import { postsData } from "./data/PostsData"; // 경로는 실제 파일 위치에 따라 조정해주세요.
// import Icon from "@mui/material/Icon";
import "./css/index.css";
import {
  CTable,
  CTableRow,
  CTableHead,
  CTableBody,
  CTableDataCell,
  CCard,
  CFormSelect,
} from "@coreui/react";

import MKBox from "components/MKBox";
import "./css/CTableTitle.css";

function Counters() {
  // 검색창 카테고리 분류 상태 관리하기
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // 검색어와 카테고리에 따라 게시물 필터링하기
  // 처음에 필터를 포스트 메서드 위에 정의해서 오류 났었음
  const filteredPosts = postsData.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || post.category === selectedCategory)
  );
  return (
    <MKBox component="section" py={10}>
      <Container>
        <MKTypography variant="h2" fontWeight="bold">
          <h2 className="projectTitle">Board</h2>
          <h5 className="boardTitle"> — What a curious —</h5>
        </MKTypography>
        <CCard className="centered-card">
          <Grid container item xs={12} alignItems="center" justifyContent="center" spacing={3}>
            <Grid item xs={12} lg={6}>
              <CFormSelect
                className="select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)} // 카테고리 상태 변경하기
                options={[
                  "카테고리를 선택하세요✅",
                  { label: "팀 프로젝트", value: "팀 프로젝트" },
                  { label: "개인 프로젝트", value: "개인 프로젝트" },
                  { label: "이슈", value: "이슈" },
                ]}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKInput
                variant="standard"
                placeholder="제목으로 검색하기"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // 3. 검색어 상태 변경하기
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <CTable hover className="full-width-table">
            <CTableHead>
              <CTableRow className="CTableTitle">
                <CTableDataCell>카테고리</CTableDataCell>
                <CTableDataCell>제목</CTableDataCell>
                <CTableDataCell>태그</CTableDataCell>
                <CTableDataCell>날짜</CTableDataCell>
                <CTableDataCell>작성자</CTableDataCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredPosts.map((post) => (
                <CTableRow className="DataCell" key={post.id}>
                  <CTableDataCell>
                    <Link to={`/boardpages/${post.id}`}>{post.category}</Link>
                  </CTableDataCell>
                  <CTableDataCell className="title-cell">
                    <Link to={`/boardpages/${post.id}`}>{post.title}</Link>
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to={`/boardpages/${post.id}`}>
                      <Stack direction="row" alignItems="flex-end" spacing={0.5} flexWrap="nowrap">
                        {post.tags.map((tag, index) => (
                          <MKBadge
                            key={index}
                            badgeContent={tag}
                            variant="contained"
                            color={tag}
                            container
                          />
                        ))}
                      </Stack>
                    </Link>
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to={`/boardpages${post.id}`}>{post.date}</Link>
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to={`/boardpages${post.id}`}>{post.author}</Link>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
          {/* <div className="pagination">
            <MKPagination>
              <MKPagination item>
                <Icon>keyboard_arrow_left</Icon>
              </MKPagination>
              <MKPagination item>1</MKPagination>
              <MKPagination item>2</MKPagination>
              <MKPagination item>3</MKPagination>
              <MKPagination item>4</MKPagination>
              <MKPagination item>5</MKPagination>
              <MKPagination item>
                <Icon>keyboard_arrow_right</Icon>
              </MKPagination>
            </MKPagination>
          </div> */}
        </CCard>
      </Container>
    </MKBox>
  );
}

export default Counters;
