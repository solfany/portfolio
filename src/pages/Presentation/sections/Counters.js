import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MKInput from "components/MKInput";
import MKPagination from "components/MKPagination";
import Icon from "@mui/material/Icon";

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
import "./CTableTitle.css";

function Counters() {
  const posts = [
    {
      id: 1,
      category: "오류게시판",
      title: "첫 게시물 입니다.",
      tag: "#안녕",
      date: "2023-09-17",
      author: "김솔비",
    },
    {
      id: 1,
      category: "오류게시판",
      title: "첫 게시물 입니다.",
      tag: "#안녕",
      date: "2023-09-17",
      author: "김솔비",
    },
  ];
  return (
    <MKBox component="section" py={10}>
      <Container>
        <CCard className="centered-card">
          <h1 className="boardTitle">게시판</h1>
          <Grid container item xs={12} alignItems="center" justifyContent="center" spacing={3}>
            <Grid item xs={12} lg={6}>
              <CFormSelect
                className="select"
                options={[
                  "카테고리를 선택하세요✅",
                  { label: "팀 프로젝트", value: "1" },
                  { label: "개인 프로젝트", value: "2" },
                  { label: "오류사항", value: "3" },
                ]}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKInput
                variant="standard"
                placeholder="Search"
                fullWidth
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
              {posts.map((post) => (
                <CTableRow className="DataCell" key={post.id}>
                  <CTableDataCell>
                    <Link to="/boardpages">{post.category}</Link>
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to="/boardpages">{post.title}</Link>
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to="/boardpages">{post.tag}</Link>
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to="/boardpages">{post.date}</Link>
                  </CTableDataCell>
                  <CTableDataCell>
                    <Link to="/boardpages">{post.author}</Link>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
          <div className="pagination">
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
          </div>
        </CCard>
      </Container>
    </MKBox>
  );
}

export default Counters;
